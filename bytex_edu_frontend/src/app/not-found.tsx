import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-surface-warm via-white to-surface-warm-alt">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-brand-orange mb-4">404</p>
        <h1 className="text-3xl font-bold text-text-primary mb-3">
          Page not found
        </h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Button variant="primary" size="lg" href="/">
          ← Back to Home
        </Button>
      </div>
    </section>
  );
}
