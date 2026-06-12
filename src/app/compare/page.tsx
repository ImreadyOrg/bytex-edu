"use client";
import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, ChevronRight, Home, Lock, Truck, Cpu, Database, HardDrive, Monitor, Gpu, X } from "lucide-react";
import { productsInventory, Product } from "@/lib/product";
import DeviceModal from "@/components/sections/DeviceModal";
import CollegeLabModal from "@/components/sections/CollegeLabModal";

const COMPARE_SPEC_ROWS = [
  { label: 'Processor', key: 'processor' },
  { label: 'Cores', key: 'cores' },
  { label: 'Threads', key: 'threads' },
  { label: 'Memory', key: 'memory' },
  { label: 'Storage', key: 'storage' },
  { label: 'Operating System', key: 'operatingSystem' },
  { label: 'Graphics', key: 'graphics' },
  { label: 'GPU Memory', key: 'gpuMemory' },
  { label: 'Display', key: 'screen' },
  { label: 'Weight', key: 'weight' },
  { label: 'Battery', key: 'battery' },
  { label: 'Camera', key: 'camera' },
  { label: 'Warranty', key: 'warranty' },
];

const EmptyComparisonCards = ({ count = 3, specSkeletonCount = 7 }) => (
  <div className="min-w-0 bg-white">
    <div
      className="grid divide-x divide-[#ededed]"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-6 px-4 pb-7 pt-4 text-center sm:pb-8 sm:pt-5"
        >
          <div className="relative mx-auto flex aspect-[5/4] w-full max-h-[300px] min-h-[200px] max-w-[min(100%,340px)] items-center justify-center bg-transparent sm:max-h-[340px] sm:min-h-[220px] sm:max-w-[min(100%,380px)]">
            <div className="h-16 w-16 rounded-full bg-[#f0f0f0]" />
          </div>
          <div className="h-4 w-[62%] rounded-full bg-[#f0f0f0]" />
          <div className="w-full max-w-md space-y-2">
            <div className="mx-auto h-3 w-[92%] rounded-full bg-[#f0f0f0]" />
            <div className="mx-auto h-3 w-[78%] rounded-full bg-[#f0f0f0]" />
          </div>
          <div className="w-full max-w-md space-y-2">
            <div className="h-3 w-[94%] rounded-full bg-[#f0f0f0]" />
            <div className="h-3 w-[88%] rounded-full bg-[#f0f0f0]" />
            <div className="h-3 w-[80%] rounded-full bg-[#f0f0f0]" />
          </div>
          <div className="flex w-full max-w-xs flex-col items-center gap-2">
            <div className="h-4 w-[44%] rounded-full bg-[#f0f0f0]" />
            <div className="h-3 w-[52%] rounded-full bg-[#f0f0f0]" />
          </div>
          <div className="flex w-full max-w-xs flex-col items-center gap-2">
            <div className="h-10 w-full rounded-full bg-[#f0f0f0]" />
            <div className="h-3 w-[72%] rounded-full bg-[#f0f0f0]" />
          </div>
        </div>
      ))}
    </div>
    {Array.from({ length: specSkeletonCount }).map((__, rowIndex) => (
      <div
        key={rowIndex}
        className="grid divide-x divide-[#ededed] border-b border-[#ededed]"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: count }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center gap-2 px-4 py-6">
            <div className="h-4 w-[60%] rounded-full bg-[#f0f0f0]" />
            <div className="h-3 w-[36%] rounded-full bg-[#f0f0f0]" />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const PROCESSOR_LOGOS: Record<string, { src: string; alt: string }> = {
  Intel: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/512px-Intel-logo.svg.png",
    alt: "Intel",
  },
  AMD: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/512px-AMD_Logo.svg.png",
    alt: "AMD",
  },
};

// Slightly darker orange highlighter — value text only, icon-chip specs
const KEY_POINT_HIGHLIGHT = "bg-[#ffd4a8] box-decoration-clone px-0.5 py-px rounded-[2px]";

function CompareContent() {
  const searchParams = useSearchParams();
  const keysParam = searchParams.get("keys") || "";
  const keys = keysParam.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  const source = searchParams.get("from") || "";
  const parentLinkHref = source === "labs" ? "/labs" : "/bundles";
  const parentLinkLabel = source === "labs" ? "Set Up Your Lab" : "Explore Devices";

  let displayProducts: Product[] = [];
  if (keys.includes("starter")) {
    displayProducts.push(...productsInventory.filter(p => ["1", "2", "3"].includes(p.id)));
  }
  if (keys.includes("pro")) {
    displayProducts.push(...productsInventory.filter(p => ["4", "5"].includes(p.id)));
  }
  if (keys.includes("power")) {
    displayProducts.push(...productsInventory.filter(p => ["6", "7", "8"].includes(p.id)));
  }

  const [showDiffOnly, setShowDiffOnly] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const differingKeys = useMemo(() => {
    const diffs = new Set<string>();
    COMPARE_SPEC_ROWS.forEach((row) => {
      const values = new Set(
        displayProducts.map((p) => String((p as any)[row.key] || '-').trim().toLowerCase())
      );
      if (values.size > 1) diffs.add(row.key);
    });
    return diffs;
  }, [displayProducts]);

  const visibleMatrixRows = showDiffOnly
    ? COMPARE_SPEC_ROWS.filter((row) => differingKeys.has(row.key))
    : COMPARE_SPEC_ROWS;

  const hasSelection = displayProducts.length > 0;

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-[#1a1a1a]">
      {previewImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-8" 
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="relative flex h-full max-h-[70vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#ededed] px-6 py-4">
              <span className="text-[11px] font-semibold tracking-wider text-[#999999] uppercase">
                Product Image Preview
              </span>
              <button 
                className="rounded-full p-1 text-[#999999] hover:bg-gray-100 hover:text-[#333333] transition-colors" 
                onClick={() => setPreviewImage(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative flex flex-1 items-center justify-center overflow-hidden p-6 sm:p-12">
              <div className="relative h-full w-full">
                <Image 
                  src={previewImage} 
                  alt="Preview" 
                  fill 
                  className="object-contain" 
                  unoptimized 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center border-t border-[#ededed] p-4">
              <div className="h-16 w-16 overflow-hidden rounded border-2 border-[#153a75] p-1">
                <div className="relative h-full w-full">
                  <Image 
                    src={previewImage} 
                    alt="Thumbnail" 
                    fill 
                    className="object-contain" 
                    unoptimized 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex w-full flex-1 flex-col bg-white px-0 py-0">
        <div className="w-full bg-white">
          <nav
            aria-label="Breadcrumb"
            className="flex w-full flex-wrap items-center gap-x-1.5 gap-y-1 border-b border-[#e5e7eb] bg-[#f3f4f6] px-3 py-2.5 text-[13px] font-medium leading-snug sm:px-4 sm:text-sm"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#5b6880] transition-colors hover:text-[#1d2f57]"
            >
              <Home className="h-3.5 w-3.5 shrink-0" strokeWidth={1.85} aria-hidden />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8590a3]" strokeWidth={2} aria-hidden />
            <Link
              href={parentLinkHref}
              className="inline-flex items-center gap-1.5 text-[#5b6880] transition-colors hover:text-[#1d2f57]"
            >
              <span>{parentLinkLabel}</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8590a3]" strokeWidth={2} aria-hidden />
            <span className="font-semibold text-[#13213f]">Compare</span>
          </nav>

          <div className="flex w-full items-center justify-between gap-3 px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3">
            <label
              className={`inline-flex items-center gap-2 text-sm font-medium ${
                !hasSelection ? 'text-[#888888] cursor-default' : 'text-[#1a1a1a] cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                className="rounded border-[#cccccc]"
                checked={showDiffOnly}
                onChange={(e) => setShowDiffOnly(e.target.checked)}
                disabled={!hasSelection}
              />
              <span>Help Me Compare</span>
            </label>
          </div>

          <div className="px-0 pb-0 sm:px-0">
            {!hasSelection ? (
              <EmptyComparisonCards count={3} specSkeletonCount={COMPARE_SPEC_ROWS.length} />
            ) : (
              <div
                className="grid items-stretch divide-x divide-[#ededed] bg-white"
                style={{ gridTemplateColumns: `repeat(${Math.max(displayProducts.length, 1)}, minmax(0, 1fr))` }}
              >
                {displayProducts.map((product) => {
                  const processorLogo = PROCESSOR_LOGOS[product.processorcompany];
                  const commentsList = product.comments.split('\n').map(c => c.trim()).filter(Boolean);
                  const highlightKeyPoint = (key: string) =>
                    showDiffOnly && differingKeys.has(key) ? KEY_POINT_HIGHLIGHT : "";

                  return (
                    <div
                      key={product.id}
                      className="flex h-full flex-col px-5 pb-8 pt-4 sm:px-8 sm:pb-10 sm:pt-5 xl:px-10 xl:pb-12 xl:pt-6"
                    >
                      {product.tagLabel ? (
                        <div className="relative z-10 mb-2 flex justify-center px-1">
                          <div className="inline-flex max-w-[min(100%,300px)] items-center justify-center rounded-[999px] bg-[#E8F0FE] px-4 py-1.5 text-center font-sans text-[11px] font-medium leading-snug tracking-normal text-[#1A3B8B] antialiased shadow-[0_1px_4px_rgba(26,59,139,0.06),0_4px_14px_rgba(26,59,139,0.04)] sm:max-w-[min(100%,340px)] sm:px-5 sm:py-2 sm:text-xs">
                            {product.tagLabel}
                          </div>
                        </div>
                      ) : <div className="h-7 mb-2" />}

                      <div className="flex flex-col items-center w-full mb-4">
                        <div 
                          className="relative mx-auto aspect-[5/4] w-full max-h-[340px] min-h-[230px] max-w-[min(100%,340px)] bg-transparent sm:aspect-[16/10] sm:max-h-[340px] sm:min-h-[220px] sm:max-w-[min(100%,380px)] cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setPreviewImage(product.image)}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 90vw, 45vw"
                            className="object-contain object-center p-2 sm:p-4"
                            unoptimized
                          />
                          {processorLogo ? (
                            <div className="absolute bottom-4 right-4 z-10 flex items-center justify-center rounded bg-white/95 p-1.5 shadow-sm ring-1 ring-black/5">
                              <img
                                src={processorLogo.src}
                                alt={processorLogo.alt}
                                className="h-3.5 w-auto max-w-[52px] object-contain sm:h-4 sm:max-w-[60px]"
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-center px-1 mb-3 gap-2">
                        <h3 className="text-center text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-base">
                          {product.name}
                        </h3>
                      </div>
                      
                      <div className="mb-5 flex w-full flex-col self-start bg-white px-1">
                        <div className="flex w-full flex-col gap-y-1.5">
                          {/* Line 1: CPU | OS */}
                          <div className="flex min-h-[20px] w-full flex-row items-center justify-center gap-x-2 font-normal leading-snug text-[#333333] flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-[13px]">
                              <Cpu className="h-[15px] w-[15px] shrink-0 text-[#153a75]" strokeWidth={1.5} />
                              <span className={`break-words text-center ${highlightKeyPoint('processor')}`}>{product.processor}</span>
                            </span>
                            <span className="shrink-0 select-none text-[#d1d5db]">|</span>
                            <span className="inline-flex items-center gap-1.5 text-[13px]">
                              <Monitor className="h-[15px] w-[15px] shrink-0 text-[#153a75]" strokeWidth={1.5} />
                              <span className={`break-words text-center ${highlightKeyPoint('operatingSystem')}`}>{product.operatingSystem}</span>
                            </span>
                          </div>
                          
                          {/* Line 2: Memory | Graphics */}
                          <div className="flex min-h-[20px] w-full flex-row items-center justify-center gap-x-2 font-normal leading-snug text-[#333333] flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-[13px]">
                              <Database className="h-[15px] w-[15px] shrink-0 text-[#153a75]" strokeWidth={1.5} />
                              <span className={`break-words text-center ${highlightKeyPoint('memory')}`}>{product.memory}</span>
                            </span>
                            <span className="shrink-0 select-none text-[#d1d5db]">|</span>
                            <span className="inline-flex items-center gap-1.5 text-[13px]">
                              <Gpu className="h-[15px] w-[15px] shrink-0 text-[#153a75]" strokeWidth={1.5} />
                              <span className={`break-words text-center ${highlightKeyPoint('graphics')}`}>{product.graphics}</span>
                            </span>
                          </div>

                          {/* Line 3: Storage */}
                          <div className="flex min-h-[20px] w-full flex-row items-center justify-center font-normal leading-snug text-[#333333] flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-[13px]">
                              <HardDrive className="h-[15px] w-[15px] shrink-0 text-[#153a75]" strokeWidth={1.5} />
                              <span className={`break-words text-center ${highlightKeyPoint('storage')}`}>{product.storage}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 w-full flex-1 px-1 text-left">
                        <ul className="space-y-3">
                          {commentsList.map((comment, index) => (
                            <li key={index} className="flex items-start gap-3 text-[13px] leading-relaxed text-[#1a1a1a] sm:text-sm">
                              <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-emerald-500">
                                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                              </span>
                              <span>{comment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto w-full max-w-md mx-auto pt-2 text-center">
                        <div className="flex flex-col items-center gap-0.5">
                          <p className="text-2xl font-bold tracking-tight text-[#153a75] sm:text-3xl">
                            {product.specialPrice}
                            <span className="ml-1 text-sm font-semibold text-[#666666] sm:text-base">+ GST</span>
                          </p>
                          {source === "labs" ? (
                            <p className="text-[13px] font-medium text-[#999999]">First-cut price</p>
                          ) : (
                            <p className="text-[11px] font-medium text-[#999999] line-through">{product.price}</p>
                          )}
                        </div>

                        <button
                          type="button"
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6600] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e65c00] sm:py-4 sm:text-base"
                          onClick={() => {
                            if (source === "labs") {
                              window.dispatchEvent(new CustomEvent("open-college-enquiry", { detail: { labName: product.name } }));
                            } else {
                              window.dispatchEvent(new CustomEvent("open-device-signup", { detail: { tier: product.name } }));
                            }
                          }}
                        >
                          <Lock className="h-5 w-5 shrink-0 text-white" strokeWidth={2} aria-hidden />
                          {source === "labs" ? "Unlock Special Price" : "Unlock Student Discount"}
                        </button>
                        {source !== "labs" && <p className="mt-2 text-center text-[11px] text-[#666666]">Revealed on sign-up</p>}
                        <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#153a75] sm:text-xs">
                          <Truck className="h-4 w-4 shrink-0" />
                          <span>Estimated delivery in 5–7 days</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="w-full border-t border-[#ededed] bg-white font-sans antialiased">
            {!hasSelection
              ? COMPARE_SPEC_ROWS.map((row, index) => (
                  <div
                    key={`empty-${row.key}`}
                    className={`grid divide-x divide-[#ededed] ${index < COMPARE_SPEC_ROWS.length - 1 ? 'border-b border-[#ededed]' : ''}`}
                    style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
                  >
                    {Array.from({ length: 3 }).map((_, colIndex) => (
                      <div
                        key={`${row.key}-${colIndex}`}
                        className="px-4 py-7 text-center sm:px-6 sm:py-9"
                      >
                        <div className="mx-auto h-6 w-[120px] rounded-full bg-[#f0f0f0]" />
                        <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#555555]">
                          {row.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              : visibleMatrixRows.map((row, index) => (
                  <div
                    key={row.key}
                    className={`grid divide-x divide-[#ededed] ${index < visibleMatrixRows.length - 1 ? 'border-b border-[#ededed]' : ''}`}
                    style={{ gridTemplateColumns: `repeat(${Math.max(displayProducts.length, 1)}, minmax(0, 1fr))` }}
                  >
                    {displayProducts.map((product, colIndex) => {
                      const value = (product as any)[row.key] || '-';
                      return (
                        <div
                          key={`${row.key}-${colIndex}`}
                          className="px-4 py-7 text-center sm:px-6 sm:py-9"
                        >
                          <div className="text-sm text-[#111111] sm:text-base">
                            {value}
                          </div>
                          <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#555555]">
                            {row.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
          </div>
        </div>
      </main>
      <DeviceModal />
      <CollegeLabModal />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white text-[#1a1a1a]">Loading comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
