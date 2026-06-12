export interface Product {
  id: string;
  name: string;
  image: string;
  comments: string;
  Model: string;
  processorcompany: string;
  processor: string;
  cores: string;
  threads: string;
  memory: string;
  storage: string;
  operatingSystem: string;
  graphics: string;
  gpuMemory: string;
  warranty: string;
  camera: string;
  battery: string;
  screen: string;
  weight: string;
  price: string;
  specialPrice: string;
  category: "consumer" | "commercial";
  tagLabel?: string;
}

export const productsInventory: Product[] = [
  {
    id: "1",
    name: "Lenovo V14 Gen 4",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/Lenovo+Thinkpad+E14+Gen+6+new.jpeg",
    comments: `Professional hardware security & build quality.
 Top durability and reliability in the category.
 Unbeatable performance-to-price ratio in the E14 lineup.`,
    Model: "21M3007NIG",
    processorcompany: "AMD",
    processor: "Ryzen™ 3 7520U Processor",
    cores: "6",
    threads: "12",
    memory: "8 G",
    storage: "512 GB",
    operatingSystem: "Windows 11 Home",
    graphics: "Integrated AMD Graphics",
    gpuMemory: "Integrated",
    warranty: "1 Yr Onsite Warranty",
    camera: "720P HD with Dual Microphone",
    battery: "2 Cell Rechargeable Li-ion 38Wh",
    screen: '35.56cms (14) FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, Narrow Bezel',
    weight: "1420g",
    price: "₹ 44,800",
    specialPrice: "₹ 35,000",
    category: "commercial",
  },
  {
    id: "2",
    name: "Lenovo V14",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/Asus+Expertbook+B1.jpeg",
    comments: `Ultra lightweight 14 inch chassis.
 Essential power for basic office tasks.
 Portable for on-the-go business work.`,
    Model: "B1403",
    processorcompany: "Intel",
    processor: "13th Generation Intel® Core™ i3-1315U Processor",
    cores: "6",
    threads: "8",
    memory: "8 GB",
    storage: "512 GB",
    operatingSystem: "Windows 11 Home",
    graphics: "Integrated Intel® UHD Graphics",
    gpuMemory: "Integrated",
    warranty: "1 Yr Onsite Warranty",
    camera: "720p HD camera with privacy shutter",
    battery: "2 Cell Rechargeable Li-ion 38Wh",
    screen: '14" FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 60Hz',
    weight: "1400g",
    price: "₹ 35,500",
    specialPrice: "₹ 35,500",
    category: "commercial",
  },
  {
    id: "3",
    name: "Lenovo V15 Gen5i",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/lenvo+v15.jpg",
    comments: `Large 15.6-inch screen for comfortable viewing.
Dedicated number keypad for faster data entry.
Smooth performance for everyday office work and big files.`,
    Model: "83HF006YIG",
    processorcompany: "Intel",
    processor: "13th Generation Intel® Core™ i3-1315U Processor",
    cores: "6",
    threads: "8",
    memory: "8 GB",
    storage: "512 GB",
    operatingSystem: "Windows 11 Home",
    graphics: "Integrated Intel® UHD Graphics",
    gpuMemory: "Integrated",
    warranty: "1 Yr Onsite Warranty",
    camera: "HD 720p with Privacy Shutter",
    battery: "2 Cell Rechargeable Li-ion 38Wh",
    screen: '14" FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 45%NTSC, 250 nits, 60Hz',
    weight: "1610g",
    price: "₹ 38,450",
    specialPrice: "₹ 38,450",
    category: "consumer",
  },
  {
    id: "4",
    name: "Lenovo ThinkBook 16",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/lenvo+v15.jpg",
    comments: `Large 15.6-inch screen for comfortable viewing. 
 Better performance for smooth multitasking.
 Faster processing compared to Core 3 processors.`,
    Model: "83CC004CIN",
    processorcompany: "Intel",
    processor: "Intel® Core™ 5 210H Processor",
    cores: "8",
    threads: "12",
    memory: "16 GB",
    storage: "512 GB",
    operatingSystem: "Windows 11 Home",
    graphics: "Integrated Intel® Graphics",
    gpuMemory: "Integrated",
    warranty: "1 Yr Onsite Warranty",
    camera: "1080p FHD with Dual Microphone and Privacy Shutter",
    battery: "3 Cell Rechargeable Li-ion 45 Wh",
    screen: '40.64cms (16) WUXGA (1920 x 1200), IPS, Anti-Glare, Non-Touch, 45%NTSC, 300 nits, 60 Hz',
    weight: "1650g",
    price: "₹ 65,990",
    specialPrice: "₹ 45,990",
    category: "consumer",
  },
  {
    id: "5",
    name: "Lenovo Thinkpad E14 Gen 7",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/thinkpad+e14.jpg",
    comments: `Compact 14-inch design for easy portability.
Includes 3-year onsite warranty for long-term service reliability.
Reliable performance with fewer interruptions and issues.`,
    Model: "21T9005UIG",
    processorcompany: "Intel",
    processor: "Intel® Core™ 7 240H Processor",
    cores: "8",
    threads: "12",
    memory: "16 GB",
    storage: "512 GB",
    operatingSystem: "Windows 11 Home",
    graphics: "Integrated Intel® Graphics",
    gpuMemory: "Integrated",
    warranty: "1 Yr Onsite Warranty",
    camera: "FHD 1080p + IR Hybrid with Privacy Shutter",
    battery: "4 Cell Rechargeable Li-ion 45 Wh",
    screen: '40.64cms (16) WUXGA (1920 x 1200), IPS, Anti-Glare, Non-Touch, 45%NTSC, 300 nits, 60 Hz',
    weight: "1340g",
    price: "₹ 87,990",
    specialPrice: "₹ 87,990",
    category: "commercial",
    tagLabel: "",
  },
  {
    id: "6",
    name: "Lenovo LOQ 13th Gen",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/thinkpad+e14.jpg",
    comments: `Compact 14-inch design for easy portability
 Strong build quality with professional security features.
 Pre-configured with Windows 11 Pro for instant business use.`,
    Model: "21T9005SIG",
    processorcompany: "Intel",
    processor: "13th Generation Intel® Core™ i7-13645HX Processor",
    cores: "8",
    threads: "12",
    memory: "16 GB",
    storage: "1 TB",
    operatingSystem: "Windows 11 Home",
    graphics: "NVIDIA® GeForce RTX™ 5050 Laptop GPU ",
    gpuMemory: "8 GB",
    warranty: "1 Yr Onsite Warranty",
    camera: "5MP with Dual Microphone and E-Shutter",
    battery: "4 Cell Rechargeable Li-ion 80 Wh",
    screen: '39.62cms (15.6) FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 100%sRGB, 300 nits, 144 Hz',
    weight: "1340g",
    price: "₹ 1,33,990",
    specialPrice: "₹ 1,33,990",
    category: "commercial",
  },
  {
    id: "7",
    name: "Lenovo LOQ 13th Gen",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/SMB/thinkpad+e14.jpg",
    comments: `AI-powered PC with built-in Copilot support
 Pre-configured with Windows 11 Pro for instant business use.
 Strong build quality and hardware security`,
    Model: "21SX007UIG",
    processorcompany: "Intel",
    processor: "13th Generation Intel® Core™ i7-13700HX Processor",
    cores: "12",
    threads: "14",
    memory: "16 GB",
    storage: "1 TB",
    operatingSystem: "Windows 11 Home",
    graphics: "NVIDIA® Geforce RTX™ 5060 Laptop GPU",
    gpuMemory: "8GB",
    warranty: "1 Yr Onsite Warranty ",
    camera: "5MP with Dual Microphone and E-Shutter",
    battery: "4 Cell Rechargeable Li-ion 60 Wh",
    screen: '39.62cms (15.6) FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 100%sRGB, 300 nits, 144 Hz',
    weight: "1340g",
    price: "₹ 1,42,990",
    specialPrice: "₹ 1,42,990",
    category: "commercial",
  },
  {
    id: "8",
    name: "Lenovo LOQ Gen 10",
    image:
      "https://bytex-uex-production.s3.ap-south-1.amazonaws.com/products/97eb72a5-9722-46ad-a72d-7ff36babaed6.jpg",
    comments: `On-device AI processing with a powerful 47 TOPS NPU.
Ultra-light design (under 1 kg) with exceptional strength.
High-end performance built for executive professionals.
`,
    Model: "21NSS1RL00",
    processorcompany: "AMD",
    processor: "Ryzen™ 7 250 Processor",
    cores: "8",
    threads: "8",
    memory: "16 GB",
    storage: "1 TB",
    operatingSystem: "Windows 11 Home",
    graphics: "NVIDIA® GeForce RTX™ 5050 Laptop GPU",
    gpuMemory: "8 GB",
    warranty: "1 Yr Onsite Warranty",
    camera: "5MP with Dual Microphone",
    battery: "4 Cell Rechargeable Li-ion 60 Wh",
    screen:
      '139.62cms (15.6) FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 100%sRGB, 300 nits, 144Hz',
    weight: "986g",
    price: "₹ 1,25,045",
    specialPrice: "₹ 1,25,045",
    category: "commercial",
  }
];
