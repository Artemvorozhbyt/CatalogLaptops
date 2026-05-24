// ── Laptop Data ──

export const laptops = [
  {
    id: 1,
    brand: "Lenovo",
    name: 'Legion 5 15.6" Ryzen 7 16GB 512GB SSD FHD IPS',
    category: "gaming",
    price: 2376, // PLN
    ram: "16 GB",
    storage: "512 GB SSD",
    cpu: "AMD Ryzen 7 4800H (8C/16T, 2.9–4.2 GHz)",
    gpu: "NVIDIA GeForce GTX 1660 Ti 6 GB",
    screen: '15.6" Full HD IPS 1920×1080 144 Hz',
    os: "Windows 11 Pro",
    weight: "2.3 kg",
    battery: "6–8 годин",
    badge: "hot",
    emoji: "🎮",
    images: [
      "images/laptops/legion-5-15-6-ryzen-16gb-512gb-ssd-fhd-ips-1.jpg",
      "images/laptops/legion-5-15-6-ryzen-16gb-512gb-ssd-fhd-ips-2.jpg",
      "images/laptops/legion-5-15-6-ryzen-16gb-512gb-ssd-fhd-ips-3.jpg"  
    ],
    desc: {
      uk: "Lenovo Legion 5 із Ryzen 7 та GTX 1660 Ti — ігрова машина для геймінгу та роботи.",
      pl: "Lenovo Legion 5 z Ryzen 7 i GTX 1660 Ti — maszyna gamingowa do gier i pracy.",
      en: "Lenovo Legion 5 with Ryzen 7 and GTX 1660 Ti — gaming machine for gaming and work."




    }
  },
  {
    id: 2,
    brand: "Apple",
    name: 'MacBook Air 13" M1 16GB 512GB SSD Retina A2337',
    category: "ultrabooks",
    price: 2399, // PLN
    ram: "16 GB",
    storage: "512 GB SSD",
    cpu: "Apple M1 (8‑core)",
    gpu: "7‑core GPU Apple M1",
    screen: '13.3" Retina 2560×1600 True Tone',
    os: "macOS",
    weight: "1.29 kg",
    battery: "15 годин",
    badge: "new",
    emoji: "🍏",
    images: [
      "images/laptops/macbook-air-13-m1-16gb-512gb-ssd-retina-a2337-1.jpg",
      "images/laptops/macbook-air-13-m1-16gb-512gb-ssd-retina-a2337-2.jpg",
      "images/laptops/macbook-air-13-m1-16gb-512gb-ssd-retina-a2337-3.jpg"
    ],
    desc: {
      uk: "MacBook Air M1 — тихий ультрабук з алюмінієвим корпусом і високою автономністю.",
      pl: "MacBook Air M1 — cichy ultrabook z aluminiową obudową i wysoką autonomią.",
      en: "MacBook Air M1 — quiet ultrabook with aluminum body and high autonomy."




    }
  },
  {
    id: 3,
    brand: "ASUS",
    name: 'ROG Strix 15.6" i5 16GB 512GB SSD Gaming Laptop',
    category: "gaming",
    price: 2297, // PLN
    ram: "16 GB",
    storage: "512 GB SSD",
    cpu: "Intel Core i5‑11400H (6C/12T)",
    gpu: "NVIDIA GeForce RTX 3050 4 GB",
    screen: '15.6" IPS FHD 144 Hz',
    os: "Windows 11 Home",
    weight: "2.3 kg",
    battery: "6 годин",
    images: [
      "images/laptops/rog-strix-15-6-i5-16gb-512gb-ssd-gaming-1.jpg",
      "images/laptops/rog-strix-15-6-i5-16gb-512gb-ssd-gaming-2.jpg",
      "images/laptops/rog-strix-15-6-i5-16gb-512gb-ssd-gaming-3.jpg"
    ],
    badge: "hot",
    emoji: "🎮",
    desc: {
      uk: "ASUS ROG Strix — потужний ігровий ноутбук з екраном 144 Гц та RTX 3050.",
      pl: "ASUS ROG Strix — potężny laptop gamingowy z ekranem 144 Hz i RTX 3050.",
      en: "ASUS ROG Strix — powerful gaming laptop with 144 Hz screen and RTX 3050."




    }
    },
        {
          id: 4,
          brand: "Lenovo",
          name: 'ThinkPad 14" i5 16GB 256GB SSD FHD Intel Graphics',
          category: "Бізнес",
          price: 699, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10210U",
          gpu: "Intel UHD Graphics 620",
          screen: '14" Full HD 1920×1080 IPS',
          os: "Windows 10 Pro",
          weight: "1.55 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-14-1.jpg",
            "images/laptops/lenovo-thinkpad-14-2.jpg",
            "images/laptops/lenovo-thinkpad-14-3.jpg"
          ],
          desc: {
            uk: "Бізнес‑ноутбук Lenovo ThinkPad з міцним корпусом і FHD екраном.",
            pl: "Biznesowy laptop Lenovo ThinkPad z trwałą obudową i ekranem FHD.",
            en: "Business laptop Lenovo ThinkPad with a durable body and a FHD screen."
          },
        },
        {
          id: 5,
          brand: "Dell",
          name: 'Latitude 5410 14" i5 16GB 256GB SSD IPS Biznesowy',
          category: "Бізнес",
          price: 899, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10310U",
          gpu: "Intel UHD Graphics",
          screen: '14" IPS FHD 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.6 kg",
          battery: "9 годин",
          badge: null,
          emoji: "🖥️",
          images: [
            "images/laptops/dell-latitude-5410-1.jpg",
            "images/laptops/dell-latitude-5410-2.jpg",
            "images/laptops/dell-latitude-5410-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 5410 — надійний бізнес‑ноутбук з IPS‑екраном та довгим часом роботи.",
            pl: "Dell Latitude 5410 — niezawodny biznesowy laptop z ekranem IPS i długim czasem pracy.",
            en: "Dell Latitude 5410 — a reliable business laptop with an IPS screen and long battery life."
          },
        },
        {
          id: 6,
          brand: "Apple",
          name: 'MacBook Pro 13.3" 2019 i5 16GB 256GB SSD Retina',
          category: "Ультрабуки",
          price: 1196, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8257U",
          gpu: "Intel Iris Plus Graphics 645",
          screen: '13.3" Retina 2560×1600',
          os: "macOS Ventura",
          weight: "1.37 kg",
          battery: "10 годин",
          badge: null,
          emoji: "🍎",
          images: [
            "images/laptops/apple-macbook-pro-13-1.jpg",
            "images/laptops/apple-macbook-pro-13-2.jpg",
            "images/laptops/apple-macbook-pro-13-3.jpg"
          ],
          desc: {
            uk: "MacBook Pro 2019 — якість дисплею Retina та надійність для роботи.",
            pl: "MacBook Pro 2019 — jakość dyspleyu Retina i solidność do pracy.",
            en: "MacBook Pro 2019 — quality dyspleyu Retina and reliability for work."




          },
        },
        {
          id: 7,
          brand: "Acer",
          name: 'Nitro 5 15.6" i5 16GB 512GB SSD Laptop Gaming',
          category: "Ігрові",
          price: 3099, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i5‑10300H",
          gpu: "NVIDIA GeForce GTX 1650 4 GB",
          screen: '15.6" IPS FHD 144 Hz',
          os: "Windows 11 Home",
          weight: "2.4 kg",
          battery: "7 годин",
          badge: "hot",
          emoji: "🔥",
          images: [
            "images/laptops/acer-nitro-5-1.jpg",
            "images/laptops/acer-nitro-5-2.jpg",
            "images/laptops/acer-nitro-5-3.jpg"
          ],
          desc: {
            uk: "Acer Nitro 5 з GTX 1650 — баланс продуктивності та ціни для ігрових користувачів.",
            pl: "Acer Nitro 5 z GTX 1650 — balans wydajności i ceny dla graczy.",
            en: "Acer Nitro 5 with GTX 1650 — a balance of performance and price for gaming users."
          },
        },
        {
          id: 8,
          brand: "Dell",
          name: 'G3 Gaming 15.6" i5 16GB 512GB SSD Laptop',
          category: "Ігрові",
          price: 2399, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i5‑9300H",
          gpu: "NVIDIA GeForce GTX 1650 4 GB",
          screen: '15.6" FHD IPS 120 Hz',
          os: "Windows 11 Home",
          weight: "2.3 kg",
          battery: "6 годин",
          badge: null,
          emoji: "🎮",
          images: [
            "images/laptops/dell-g3-gaming-1.jpg",
            "images/laptops/dell-g3-gaming-2.jpg",
            "images/laptops/dell-g3-gaming-3.jpg"
          ],
          desc: {
            uk: "Dell G3 Gaming із GTX 1650 — доступний вступ у світ геймінгу.",
            pl: "Dell G3 Gaming z GTX 1650 — dostępny wejście w svit heyminhu.",
            en: "Dell G3 Gaming with GTX 1650 — affordable entry in svit heyminhu."




          },
        },
        {
          id: 9,
          brand: "HP",
          name: 'EliteBook 840 G6 14" i5 16GB 256GB SSD FHD Srebrny',
          category: "Бізнес",
          price: 899, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8265U",
          gpu: "Intel UHD 620",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.5 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/hp-elitebook-840-g6-1.jpg",
            "images/laptops/hp-elitebook-840-g6-2.jpg",
            "images/laptops/hp-elitebook-840-g6-3.jpg"
          ],
          desc: {
            uk: "HP EliteBook 840 G6 — стильний і витривалий офісний ноутбук.",
            pl: "HP EliteBook 840 G6 — stylowy i wytrzymały laptop biurowy.",
            en: "HP EliteBook 840 G6 — a stylish and durable business laptop."




          },
        },
        {
          id: 10,
          brand: "HP",
          name: 'ProBook 430 G8 13.3" i3 16GB 256GB SSD FHD',
          category: "Офісні",
          price: 999, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i3‑1115G4",
          gpu: "Intel UHD Graphics",
          screen: '13.3" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.3 kg",
          battery: "11 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/hp-probook-430-g8-1.jpg",
            "images/laptops/hp-probook-430-g8-2.jpg",
            "images/laptops/hp-probook-430-g8-3.jpg"
          ],
          desc: {
            uk: "Компактний ProBook 430 G8 — легкий та економічний ноутбук для офісної роботи.",
            pl: "Kompaktowy ProBook 430 G8 — lekki i ekonomiczny laptop do pracy biurowej.",
            en: "The compact ProBook 430 G8 is a lightweight, efficient laptop for office work."




          },
        },
        {
          id: 11,
          brand: "HP",
          name: 'ProBook 440 G9 14" i3 8GB 240GB SSD Srebrny',
          category: "Офісні",
          price: 899, // PLN
          ram: "8 GB",
          storage: "240 GB SSD",
          cpu: "Intel Core i3‑1215U",
          gpu: "Intel UHD Graphics",
          screen: '14" FHD 1920×1080',
          os: "Windows 11 Home",
          weight: "1.38 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/hp-probook-440-g9-1.jpg",
            "images/laptops/hp-probook-440-g9-2.jpg",
            "images/laptops/hp-probook-440-g9-3.jpg"
          ],
          desc: {
            uk: "HP ProBook 440 G9 — офісний ноутбук з новим процесором Intel та тонким дизайном.",
            pl: "HP ProBook 440 G9 — biznesowy laptop z nowym procesorem Intel i smukłą obudową.",
            en: "HP ProBook 440 G9 — a business laptop with a new Intel processor and a slim design."




          },
        },
        {
          id: 12,
          brand: "Lenovo",
          name: 'ThinkPad 14" i5 8GB 256GB SSD Intel Graphics Laptop',
          category: "Бізнес",
          price: 699, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8565U",
          gpu: "Intel UHD Graphics 620",
          screen: '14" FHD IPS',
          os: "Windows 10 Pro",
          weight: "1.6 kg",
          battery: "10 годин",
          badge: null,
          emoji: "🧳",
          images: [
            "images/laptops/lenovo-thinkpad-1.jpg",
            "images/laptops/lenovo-thinkpad-2.jpg",
            "images/laptops/lenovo-thinkpad-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad — класика ділового ноутбука з високою надійністю та ергономікою.",
            pl: "Lenovo ThinkPad — klasyka biznesowego laptopa o wysokiej niezawodności i ergonomii.",
            en: "Lenovo ThinkPad — a classic business laptop with high reliability and ergonomic design."
          },

          
        },
        {
          id: 13,
          brand: "Lenovo",
          name: 'ThinkPad L14 Gen2 14" FHD i5‑1135G7 16GB 256GB',
          category: "Бізнес",
          price: 1048, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑1135G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '14" IPS FHD 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.59 kg",
          battery: "12 годин",
          badge: "new",
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-l14-gen2-1.jpg",
            "images/laptops/lenovo-thinkpad-l14-gen2-2.jpg",
            "images/laptops/lenovo-thinkpad-l14-gen2-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad L14 Gen2 — оновлена версія з Iris Xe та покращеним екраном.",
            pl: "Lenovo ThinkPad L14 Gen2 — zaktualizowana wersja z Iris Xe i ulepszonym ekranem.",
            en: "Lenovo ThinkPad L14 Gen2 — updated version with Iris Xe and improved screen."




          },
        },
        {
          id: 14,
          brand: "Dell",
          name: 'Latitude E5470 14" HD i5‑6200U 16GB 256GB SSD',
          category: "Бізнес",
          price: 699, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑6200U",
          gpu: "Intel HD 520",
          screen: '14" HD 1366×768',
          os: "Windows 10 Pro",
          weight: "1.76 kg",
          battery: "8 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-e5470-1.jpg",
            "images/laptops/dell-latitude-e5470-2.jpg",
            "images/laptops/dell-latitude-e5470-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude E5470 — перевірений бізнес‑ноутбук з процесором 6‑го покоління Intel.",
            pl: "Dell Latitude E5470 — sprawdzony biznesowy laptop z procesorem Intel 6. generacji.",
            en: "Dell Latitude E5470 — a proven business laptop with a 6th-gen Intel processor."
          },
        },

        {
          id: 15,
          brand: "Lenovo",
          name: 'ThinkPad T14 Gen1 14" i5‑10310U 16GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 899, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10310U (4C/8T)",
          gpu: "Intel UHD Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.46 kg",
          battery: "11 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-t14-gen1-1.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-2.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad T14 Gen1 — сучасний бізнес‑ноутбук із комфортною клавіатурою й досконалою якістю збірки.",
            pl: "Lenovo ThinkPad T14 Gen1 — nowoczesny biznesowy laptop z wygodną klawiaturą i doskonałą jakością wykonania.",
            en: "Lenovo ThinkPad T14 Gen1 — a modern business laptop with a comfortable keyboard and excellent build quality."
          },
        },
        {
          id: 16,
          brand: "Dell",
          name: 'Latitude 7490 14" FHD i7‑8650U 16GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 918, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑8650U (4C/8T)",
          gpu: "Intel UHD 620",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.4 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-7490-1.jpg",
            "images/laptops/dell-latitude-7490-2.jpg",
            "images/laptops/dell-latitude-7490-3.jpg"
          ],
          desc: {
            uk: "Latitude 7490 — преміум‑клас серед бізнес лінійки Dell із потужним i7 та тонким дизайном.",
            pl: "Latitude 7490 — Linia produktów klasy premium firmy Dell z wydajnym procesorem i7 i smukłą konstrukcją.",
            en: "Latitude 7490 — Dell's premium business line with a powerful i7 and a slim design."




          },
        },
        {
          id: 17,
          brand: "HP",
          name: 'EliteBook 840 G7 14" i5‑10610U 16GB 256GB SSD Biznes',
          category: "Бізнес",
          price: 1100, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10610U",
          gpu: "Intel UHD Graphics",
          screen: '14" Full HD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.45 kg",
          battery: "11 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/hp-elitebook-840-g7-1.jpg",
            "images/laptops/hp-elitebook-840-g7-2.jpg",
            "images/laptops/hp-elitebook-840-g7-3.jpg"
          ],
          desc: {
            uk: "HP EliteBook 840 G7 поєднує надійність серії Elite та елегантний дизайн для щоденної роботи.",
            pl: "HP EliteBook 840 G7 łączy niezawodność serii Elite z eleganckim designem do codziennej pracy.",
            en: "HP EliteBook 840 G7 combines Elite-series reliability with an elegant design for daily work."




          },
        },
        {
          id: 18,
          brand: "Dell",
          name: 'Latitude 7280 Touch i7‑7600U 8GB 256GB SSD 12.5"',
          category: "Бізнес",
          price: 803.99, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑7600U (2C/4T)",
          gpu: "Intel HD 620",
          screen: '12.5" HD 1366×768 сенсорний',
          os: "Windows 10 Pro",
          weight: "1.26 kg",
          battery: "8 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/dell-latitude-7280-touch-1.jpg",
            "images/laptops/dell-latitude-7280-touch-2.jpg",
            "images/laptops/dell-latitude-7280-touch-3.jpg"
          ],
          desc: {
            uk: "Компактний Latitude 7280 з сенсорним екраном — зручний у подорожах та роботі в дорозі.",
            pl: "kompaktowy Latitude 7280 z dotykowym ekranem — wygodny w podróży i pracy w drodze.",
            en: "compact Latitude 7280 with touch screen — comfortable in trips and work in road."




          },
        },
        {
          id: 19,
          brand: "Apple",
          name: 'MacBook Pro 14" M1 Pro 16GB 512GB SSD Retina A2442',
          category: "Професійні",
          price: 3199, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "Apple M1 Pro (10‑core)",
          gpu: "16‑core GPU Apple M1 Pro",
          screen: '14.2" Liquid Retina XDR 3024×1964 120 Hz',
          os: "macOS",
          weight: "1.6 kg",
          battery: "17 годин",
          badge: "hot",
          emoji: "🍏",
          images: [
            "images/laptops/apple-macbook-pro-14-m1-1.jpg",
            "images/laptops/apple-macbook-pro-14-m1-2.jpg",
            "images/laptops/apple-macbook-pro-14-m1-3.jpg"
          ],
          desc: {
            uk: "MacBook Pro 14 M1 Pro — неймовірна потужність для монтажу, графіки та розробки.",
            pl: "MacBook Pro 14 M1 Pro — niesamowita wydajność do montażu, grafiki i programowania.",
            en: "MacBook Pro 14 M1 Pro — amazing performance for editing, graphics, and development."




          },
        },
        {
          id: 20,
          brand: "Acer",
          name: 'Nitro V15 15.6" i5 16GB 512GB SSD FHD IPS',
          category: "Ігрові",
          price: 3099, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i5‑13420H",
          gpu: "NVIDIA GeForce RTX 4050 6 GB",
          screen: '15.6" FHD IPS 144 Hz',
          os: "Windows 11 Home",
          weight: "2.4 kg",
          battery: "6 годин",
          badge: "new",
          emoji: "🎮",
          images: [
            "images/laptops/acer-nitro-v15-1.jpg",
            "images/laptops/acer-nitro-v15-2.jpg",
            "images/laptops/acer-nitro-v15-3.jpg"
          ],
          desc: {
            uk: "Acer Nitro V15 — нове покоління ігрової серії з RTX 4050 та високою частотою оновлення екрану.",
            pl: "Acer Nitro V15 — nowe pokolenie gamingowej serii z RTX 4050 i wysoką częstotliwością odświeżania ekranu.",
            en: "Acer Nitro V15 — a new generation of gaming laptops with RTX 4050 and a high-refresh-rate display."




          },
        },
        {
          id: 21,
          brand: "Dell",
          name: 'Latitude 7280 12.5" i5‑7200U 8GB 256GB SSD Czarny',
          category: "Бізнес",
          price: 699, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑7200U",
          gpu: "Intel HD 620",
          screen: '12.5" HD 1366×768',
          os: "Windows 10 Pro",
          weight: "1.2 kg",
          battery: "8 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-7280-1.jpg",
            "images/laptops/dell-latitude-7280-2.jpg",
            "images/laptops/dell-latitude-7280-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 7280 — компактний та надійний офісний ноутбук для бізнес‑класу.",
            pl: "Dell Latitude 7280 — kompaktowy i solidny laptop biurowy dla klasy biznes.",
            en: "Dell Latitude 7280 — a compact and reliable business laptop."




          },
        },
        {
          id: 22,
          brand: "Lenovo",
          name: 'IdeaPad Gaming 3 15.6" 16GB 512GB SSD AMD NVIDIA',
          category: "Ігрові",
          price: 2496, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "AMD Ryzen 5 5600H",
          gpu: "NVIDIA GeForce GTX 1650 4 GB",
          screen: '15.6" FHD IPS 120 Hz',
          os: "Windows 11 Home",
          weight: "2.25 kg",
          battery: "6 годин",
          badge: "hot",
          emoji: "🎮",
          images: [
            "images/laptops/lenovo-ideapad-gaming-3-1.jpg",
            "images/laptops/lenovo-ideapad-gaming-3-2.jpg",
            "images/laptops/lenovo-ideapad-gaming-3-3.jpg"
          ],
          desc: {
            uk: "Lenovo IdeaPad Gaming 3 — доступний геймерський ноутбук із Ryzen та GTX графікою.",
            pl: "Lenovo IdeaPad Gaming 3 — dostępny gamingowy laptop z Ryzen i GTX kartą graficzną.",
            en: "Lenovo IdeaPad Gaming 3 — affordable gaming laptop with Ryzen and GTX graphics."




          },
        },
        {
          id: 23,
          brand: "Dell",
          name: 'Latitude 5580 15.6" HD i5‑7300U 16GB 256GB SSD',
          category: "Бізнес",
          price: 1100, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑7300U",
          gpu: "Intel HD 620",
          screen: '15.6" HD 1366×768',
          os: "Windows 10 Pro",
          weight: "2.0 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-5580-1.jpg",
            "images/laptops/dell-latitude-5580-2.jpg",
            "images/laptops/dell-latitude-5580-3.jpg"
          ],
          desc: {
            uk: "Надійний Dell Latitude 5580 для щоденної офісної роботи з великим екраном 15.6 дюймів.",
            pl: "Niezawodny Dell Latitude 5580 do codziennej pracy biurowej z dużym ekranem 15,6 cala.",
            en: "Reliable Dell Latitude 5580 for everyday office work with a large 15.6-inch screen."




          },
        },
        {
          id: 24,
          brand: "Lenovo",
          name: 'IdeaPad Gaming 3 15.6" i5 16GB Laptop Gaming',
          category: "Ігрові",
          price: 2346, // PLN
          ram: "16 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i5‑11300H",
          gpu: "NVIDIA RTX 3050 4 GB",
          screen: '15.6" FHD 144 Hz',
          os: "Windows 11 Home",
          weight: "2.3 kg",
          battery: "6 годин",
          badge: null,
          emoji: "🎮",
          images: [
            "images/laptops/lenovo-ideapad-gaming-3-i5-1.jpg",
            "images/laptops/lenovo-ideapad-gaming-3-i5-2.jpg",
            "images/laptops/lenovo-ideapad-gaming-3-i5-3.jpg"
          ],
          desc: {
            uk: "Lenovo IdeaPad Gaming 3 на Intel Core i5 та RTX 3050 — сучасна ігрова модель для середнього класу.",
            pl: "Lenovo IdeaPad Gaming 3 na Intel Core i5 i RTX 3050 — suchasna gamingowa model do klasy średniej.",
            en: "Lenovo IdeaPad Gaming 3 na Intel Core i5 and RTX 3050 — modern gaming model for mid-range."




          },
        },
        {
          id: 25,
          brand: "Dell",
          name: 'Latitude 7280 12.5" HD i5‑7200U 8GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 599, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑7200U",
          gpu: "Intel HD 620",
          screen: '12.5" HD 1366×768',
          os: "Windows 10 Pro",
          weight: "1.2 kg",
          battery: "8 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-7280-hd-1.jpg",
            "images/laptops/dell-latitude-7280-hd-2.jpg",
            "images/laptops/dell-latitude-7280-hd-3.jpg"
          ],
          desc: {
            uk: "Latitude 7280 — міцний та портативний бізнес‑ноутбук з компактним екраном.",
            pl: "Latitude 7280 — solidny i przenośny biznesowy laptop z kompaktowym ekranem.",
            en: "Latitude 7280 — a sturdy, portable business laptop with a compact screen."
          },
        },
        {
          id: 26,
          brand: "Dell",
          name: 'Latitude 7390 13.3" HD i5‑8250U 8GB 256GB SSD',
          category: "Бізнес",
          price: 699, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8250U (4C/8T)",
          gpu: "Intel UHD 620",
          screen: '13.3" FHD 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.2 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-7390-1.jpg",
            "images/laptops/dell-latitude-7390-2.jpg",
            "images/laptops/dell-latitude-7390-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 7390 — тонкий ультрабук для бізнесу з яскравим FHD екраном.",
            pl: "Dell Latitude 7390 — tonkyy ultrabook do biznesu z jasnym FHD ekranem.",
            en: "Dell Latitude 7390 — tonkyy ultrabook for biznesu with bright FHD screen."




          },
        },
        {
          id: 27,
          brand: "Dell",
          name: 'Latitude 7390 13.3" i5‑8250U 8GB 256GB SSD Czarny',
          category: "Бізнес",
          price: 699, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8250U",
          gpu: "Intel UHD 620",
          screen: '13.3" FHD 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.2 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/dell-latitude-7390-czarny-1.jpg",
            "images/laptops/dell-latitude-7390-czarny-2.jpg",
            "images/laptops/dell-latitude-7390-czarny-3.jpg"
          ],
          desc: {
            uk: "Latitude 7390 у чорному корпусі зберігає міцність та портативність серії для мобільних працівників.",
            pl: "Latitude 7390 w czarnej obudowie zachowuje wytrzymałość i mobilność serii dla pracowników w terenie.",
            en: "The Latitude 7390 in a black chassis retains the toughness and portability of the series for mobile professionals."




          },
        },
        {
          id: 28,
          brand: "Lenovo",
          name: 'ThinkPad L480 14" i5‑8250U 16GB 256GB SSD Iris Plus',
          category: "Бізнес",
          price: 799, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8250U",
          gpu: "Intel UHD 620 / Iris Plus",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.68 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-l480-1.jpg",
            "images/laptops/lenovo-thinkpad-l480-2.jpg",
            "images/laptops/lenovo-thinkpad-l480-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad L480 — надійний робочий інструмент із качественою клавіатурою та збалансованими характеристиками.",
            pl: "Lenovo ThinkPad L480 — solidny narzędzie do pracy z kachestvenoyu klaviaturoyu i zbalansovanymy kharakterystykamy.",
            en: "Lenovo ThinkPad L480 — reliable work tool with kachestvenoyu klaviaturoyu and zbalansovanymy kharakterystykamy."




          },
        },

        {
          id: 29,
          brand: "Dell",
          name: 'Latitude 7490 i5‑7300U 16GB 256GB SSD 14" FHD Intel HD',
          category: "Бізнес",
          price: 918, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑7300U",
          gpu: "Intel HD 620",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.4 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-7490-i5-1.jpg",
            "images/laptops/dell-latitude-7490-i5-2.jpg",
            "images/laptops/dell-latitude-7490-i5-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 7490 — преміум‑бізнес ноутбук із міцним корпусом і повноцінним набором портів.",
            pl: "Dell Latitude 7490 — premium‑biznesowy laptop z trwałą obudową i pełnym zestawem portów.",
            en: "Dell Latitude 7490 — premium‑business laptop with durable body and full port selection."




          },
        },
        {
          id: 30,
          brand: "Lenovo",
          name: 'ThinkPad X280 i7‑8650U 8GB 256GB SSD 12.5" FHD Intel HD',
          category: "Бізнес",
          price: 999, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑8650U",
          gpu: "Intel UHD Graphics 620",
          screen: '12.5" FHD 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.16 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-x280-1.jpg",
            "images/laptops/lenovo-thinkpad-x280-2.jpg",
            "images/laptops/lenovo-thinkpad-x280-3.jpg"
          ],
          desc: {
            uk: "Компактний і міцний ThinkPad X280 для працівників, які часто подорожують.",
            pl: "Kompaktowy i wytrzymały ThinkPad X280 dla pracowników, którzy często podróżują.",
            en: "The compact and durable ThinkPad X280 is designed for professionals who travel frequently."




          },
        },
        {
          id: 31,
          brand: "Dell",
          name: 'Latitude 3510 15.6" FHD i5‑10210U 16GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 1099, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10210U",
          gpu: "Intel UHD Graphics 620",
          screen: '15.6" FHD 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.9 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-3510-1.jpg",
            "images/laptops/dell-latitude-3510-2.jpg",
            "images/laptops/dell-latitude-3510-3.jpg"
          ],
          desc: {
            uk: "Latitude 3510 — офісний ноутбук Dell із повнорозмірним екраном та потужною роботою на батареї.",
            pl: "Latitude 3510 — laptop Dell do biura z pełnowymiarowym ekranem i mocną pracą na baterii.",
            en: "Latitude 3510 — a Dell office laptop with a full-size display and strong battery performance."




          },
        },
        {
          id: 32,
          brand: "HP",
          name: 'ProBook 640 G8 14" i5‑1135G7 16GB 256GB SSD Windows Pro',
          category: "Бізнес",
          price: 999, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑1135G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.3 kg",
          battery: "11 годин",
          badge: "new",
          emoji: "💼",
          images: [
            "images/laptops/hp-probook-640-g8-1.jpg",
            "images/laptops/hp-probook-640-g8-2.jpg",
            "images/laptops/hp-probook-640-g8-3.jpg"
          ],
          desc: {
            uk: "HP ProBook 640 G8 — сучасний тонкий ноутбук для бізнесу з потужним процесором Intel 11‑го покоління.",
            pl: "HP ProBook 640 G8 — Nowoczesny, smukły laptop biznesowy z wydajnym procesorem Intel 11. generacji.",
            en: "HP ProBook 640 G8 — modern lightweight laptop for business with a powerful Intel 11th generation processor."




          },
        },
        {
          id: 33,
          brand: "HP",
          name: 'ProBook 440 G8 14" i7‑1165G7 16GB 256GB SSD MX450 2GB',
          category: "Бізнес",
          price: 1149, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑1165G7",
          gpu: "NVIDIA GeForce MX450 2 GB",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.38 kg",
          battery: "11 годин",
          badge: "hot",
          emoji: "💻",
          images: [
            "images/laptops/hp-probook-440-g8-1.jpg",
            "images/laptops/hp-probook-440-g8-2.jpg",
            "images/laptops/hp-probook-440-g8-3.jpg"
          ],
          desc: {
            uk: "HP ProBook 440 G8 із дискретною графікою MX450 — відмінний баланс для роботи й мультимедіа.",
            pl: "HP ProBook 440 G8 z dedykowaną kartą graficzną MX450 — doskonała równowaga między pracą i multimediami.",
            en: "HP ProBook 440 G8 with discrete graphics MX450 — excellent balance for work and multimedia."




          },
        },
        {
          id: 34,
          brand: "Lenovo",
          name: 'ThinkPad T14s Gen 1 14" Ryzen 5 4500U 16GB 256GB SSD',
          category: "Бізнес",
          price: 899, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "AMD Ryzen 5 4500U",
          gpu: "AMD Radeon Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.27 kg",
          battery: "12 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-t14s-1.jpg",
            "images/laptops/lenovo-thinkpad-t14s-2.jpg",
            "images/laptops/lenovo-thinkpad-t14s-3.jpg"
          ],
          desc: {
            uk: "Легкий ThinkPad T14s з Ryzen 5 — тихий, автономний та дуже надійний ультрабук для бізнесу.",
            pl: "Lehkyy ThinkPad T14s z Ryzen 5 — tykhyy, avtonomnyy i duzhe solidny ultrabook do biznesu.",
            en: "Lightweight and durable ThinkPad T14s with Ryzen 5 — a quiet, autonomous, and very reliable ultrabook for business."




          },
        },
        {
          id: 35,
          brand: "Lenovo",
          name: 'ThinkPad E14 Gen2 i3‑1115G4 16GB 256GB SSD 14" FHD',
          category: "Офісні",
          price: 0, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i3‑1115G4",
          gpu: "Intel UHD Graphics",
          screen: '14" FHD 1920×1080',
          os: "Windows 11 Home",
          weight: "1.59 kg",
          battery: "8 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/lenovo-thinkpad-e14-gen2-1.jpg",
            "images/laptops/lenovo-thinkpad-e14-gen2-2.jpg",
            "images/laptops/lenovo-thinkpad-e14-gen2-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad E14 Gen2 — відмінний робочий інструмент для офісних завдань та навчання.",
            pl: "Lenovo ThinkPad E14 Gen2 — doskonałe narzędzie do pracy do zadań biurowych i nauki.",
            en: "Lenovo ThinkPad E14 Gen2 — an excellent work tool for office tasks and studying."
          },
        },
        {
          id: 36,
          brand: "Lenovo",
          name: 'ThinkPad T14 Gen1 14" Ryzen 5 4650U 16GB 256GB SSD',
          category: "Бізнес",
          price: 899, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "AMD Ryzen 5 4650U (6C/12T)",
          gpu: "AMD Radeon Graphics",
          screen: '14" IPS FHD 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.46 kg",
          battery: "13 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-t14-gen1-ryzen-1.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-ryzen-2.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-ryzen-3.jpg"
          ],
          desc: {
            uk: "T14 Gen1 на Ryzen 5 — оптимальний для користувачів, які цінують продуктивність і автономність.",
            pl: "T14 Gen1 z Ryzen 5 — optymalny dla użytkowników, którzy cenią wydajność i autonomię.",
            en: "T14 Gen1 with Ryzen 5 — optimal for users who value performance and battery life."
          },
        },
        {
          id: 37,
          brand: "Lenovo",
          name: 'ThinkPad T14 Gen1 14" i5‑10310U 16GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 1046.99, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑10310U",
          gpu: "Intel UHD Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.4 kg",
          battery: "11 годин",
          badge: null,
          emoji: "🧳",
          images: [
            "images/laptops/lenovo-thinkpad-t14-gen1-i5-1.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-i5-2.jpg",
            "images/laptops/lenovo-thinkpad-t14-gen1-i5-3.jpg"
          ],
          desc: {
            uk: "ThinkPad T14 Gen1 на Intel Core i5 — міцний бізнес‑ноутбук з класичним дизайном і портами.",
            pl: "ThinkPad T14 Gen1 with Intel Core i5 — Solidny laptop biznesowy o klasycznym wzornictwie i portach.",
            en: "ThinkPad T14 Gen1 with Intel Core i5 — a sturdy business laptop with classic design and ports."
          },
        },
        {
          id: 38,
          brand: "Dell",
          name: 'Latitude 3420 i3‑1115G4 16GB 256GB SSD 14" HD Intel HD',
          category: "Офісні",
          price: 849.99, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i3‑1115G4",
          gpu: "Intel UHD Graphics",
          screen: '14" HD 1366×768',
          os: "Windows 11 Home",
          weight: "1.52 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/dell-latitude-3420-1.jpg",
            "images/laptops/dell-latitude-3420-2.jpg",
            "images/laptops/dell-latitude-3420-3.jpg"
          ],
          desc: {
            uk: "Latitude 3420 — базовий Dell для офісу та навчання із новим поколінням процесора Intel.",
            pl: "Latitude 3420 — podstawowy Dell do biura i nauki z nową generacją procesora Intel.",
            en: "Latitude 3420 — a basic Dell for office and study with a new generation Intel processor."
          },
        },
        {
          id: 39,
          brand: "HP",
          name: 'EliteBook 830 G8 13.3" i5‑1135G7 16GB 256GB SSD',
          category: "Бізнес",
          price: 1196, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑1135G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '13.3" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.3 kg",
          battery: "11 годин",
          badge: "new",
          emoji: "💼",
          images: [
            "images/laptops/hp-elitebook-830-g8-1.jpg",
            "images/laptops/hp-elitebook-830-g8-2.jpg",
            "images/laptops/hp-elitebook-830-g8-3.jpg"
          ],
          desc: {
            uk: "HP EliteBook 830 G8 — легкий і міцний ноутбук для щоденної професійної роботи.",
            pl: "HP EliteBook 830 G8 — lekki i wytrzymały laptop do codziennej pracy profesjonalnej.",
            en: "HP EliteBook 830 G8 — a lightweight and durable laptop for everyday professional use."




          },
        },
        {
          id: 40,
          brand: "Lenovo",
          name: 'ThinkPad L490 14" i5‑8265U 16GB 256GB SSD Laptop',
          category: "Бізнес",
          price: 999, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8265U",
          gpu: "Intel UHD 620",
          screen: '14" FHD 1920×1080',
          os: "Windows 10 Pro",
          weight: "1.68 kg",
          battery: "10 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/lenovo-thinkpad-l490-1.jpg",
            "images/laptops/lenovo-thinkpad-l490-2.jpg",
            "images/laptops/lenovo-thinkpad-l490-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad L490 — збалансований бізнес‑ноутбук із якісною збіркою та тихою роботою.",
            pl: "Lenovo ThinkPad L490 — zrównoważony biznesowy laptop o wysokiej jakości wykonania i cichej pracy.",
            en: "Lenovo ThinkPad L490 — a balanced business laptop with quality build and quiet operation."
          },
        },
        {
          id: 41,
          brand: "HP",
          name: 'ProBook 640 G8 14" i5‑8250U 16GB 256GB SSD Srebrny',
          category: "Бізнес",
          price: 999, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8250U",
          gpu: "Intel UHD Graphics",
          screen: '14" FHD IPS',
          os: "Windows 10 Pro",
          weight: "1.38 kg",
          battery: "9 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/hp-probook-640-g8-srebrny-1.jpg",
            "images/laptops/hp-probook-640-g8-srebrny-2.jpg",
            "images/laptops/hp-probook-640-g8-srebrny-3.jpg"
          ],
          desc: {
            uk: "HP ProBook 640 G8 — практичний і витончений робочий ноутбук у срібному корпусі.",
            pl: "HP ProBook 640 G8 — praktychnyy i vytonchenyy robochyy laptop w sribnomu obudowie.",
            en: "HP ProBook 640 G8 — praktychnyy and vytonchenyy work laptop in sribnomu body."




          },
        },
        {
          id: 42,
          brand: "Lenovo",
          name: 'ThinkPad E490 14" i7‑8565U 16GB 256GB SSD Radeon 550X',
          category: "Бізнес",
          price: 1697, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑8565U",
          gpu: "AMD Radeon 550X 2 GB",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.75 kg",
          battery: "10 годин",
          badge: "hot",
          emoji: "💻",
          images: [
            "images/laptops/lenovo-thinkpad-e490-1.jpg",
            "images/laptops/lenovo-thinkpad-e490-2.jpg",
            "images/laptops/lenovo-thinkpad-e490-3.jpg"
          ],
          desc: {
            uk: "ThinkPad E490 з i7 та Radeon 550X — продуктивний ноутбук для мультимедіа й роботи.",
            pl: "ThinkPad E490 z i7 i Radeon 550X — produktyvnyy laptop do multimedialny i pracy.",
            en: "ThinkPad E490 with i7 and Radeon 550X — productive laptop for multimedia work."




          },
        },
        {
          id: 43,
          brand: "Apple",
          name: 'MacBook Pro 16" A2141 2019 i9‑9980HK 32GB 512GB SSD',
          category: "Професійні",
          price: 2299, // PLN
          ram: "32 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i9‑9980HK (8C/16T, до 5 GHz)",
          gpu: "AMD Radeon Pro 5500M 4 GB",
          screen: '16" Retina 3072×1920 True Tone',
          os: "macOS",
          weight: "2.0 kg",
          battery: "11 годин",
          badge: "hot",
          emoji: "🍎",
          images: [
            "images/laptops/apple-macbook-pro-16-i9-1.jpg",
            "images/laptops/apple-macbook-pro-16-i9-2.jpg",
            "images/laptops/apple-macbook-pro-16-i9-3.jpg"
          ],
          desc: {
            uk: "Флагманський MacBook Pro 16\" з Core i9 та Radeon 5500M для професіоналів відео і графіки.",
            pl: "Flagowy MacBook Pro 16\" z Core i9 i Radeon 5500M dla profesjonalistów wideo i grafiki.",
            en: "Flagship MacBook Pro 16\" with Core i9 and Radeon 5500M for video and graphics professionals."
          },
        },
        {
          id: 44,
          brand: "HP",
          name: 'ProBook 640 G8 14" i5‑1135G7 16GB 256GB SSD Windows Pro',
          category: "Бізнес",
          price: 999, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑1135G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '14" FHD IPS',
          os: "Windows 11 Pro",
          weight: "1.4 kg",
          battery: "11 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/hp-probook-640-g8-i5-1.jpg",
            "images/laptops/hp-probook-640-g8-i5-2.jpg",
            "images/laptops/hp-probook-640-g8-i5-3.jpg"
          ],
          desc: {
            uk: "HP ProBook 640 G8 — сучасний тонкий ноутбук для офісу з процесором Intel 11‑го покоління.",
            pl: "HP ProBook 640 G8 — nowoczesny, cienki laptop biurowy z procesorem Intel 11. generacji.",
            en: "HP ProBook 640 G8 — a modern thin office laptop with an 11th-gen Intel processor."
          },
        },
        {
          id: 45,
          brand: "Apple",
          name: 'MacBook Pro A1990 15.4" 2019 i9‑9880H 32GB 512GB SSD',
          category: "Професійні",
          price: 2399, // PLN
          ram: "32 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i9‑9880H (8C/16T)",
          gpu: "AMD Radeon Pro 560X 4 GB",
          screen: '15.4" Retina 2880×1800',
          os: "macOS",
          weight: "1.83 kg",
          battery: "10 годин",
          badge: null,
          emoji: "🍏",
          images: [
            "images/laptops/apple-macbook-pro-15-2019-1.jpg",
            "images/laptops/apple-macbook-pro-15-2019-2.jpg",
            "images/laptops/apple-macbook-pro-15-2019-3.jpg"
          ],
          desc: {
            uk: "MacBook Pro 15\" 2019 — класика Apple для творців контенту та професіоналів.",
            pl: "MacBook Pro 15\" 2019 — klasyka Apple dla twórców treści i profesjonalistów.",
            en: "MacBook Pro 15\" 2019 — Apple classic for content creators and professionals."
          },
        },
        {
          id: 46,
          brand: "Dell",
          name: 'Latitude 7280 Touch i5‑6300U 8GB 256GB SSD 12.5"',
          category: "Бізнес",
          price: 699, // PLN
          ram: "8 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑6300U",
          gpu: "Intel HD 520",
          screen: '12.5" HD 1366×768 сенсорний',
          os: "Windows 10 Pro",
          weight: "1.28 kg",
          battery: "7 годин",
          badge: null,
          emoji: "💻",
          images: [
            "images/laptops/dell-latitude-7280-touch-i5-1.jpg",
            "images/laptops/dell-latitude-7280-touch-i5-2.jpg",
            "images/laptops/dell-latitude-7280-touch-i5-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 7280 зі сенсорним дисплеєм — портативний помічник для бізнес‑користувачів.",
            pl: "Dell Latitude 7280 z dotykowym ekranem — przenośny pomocnik dla użytkowników biznesowych.",
            en: "Dell Latitude 7280 with a touch display — a portable assistant for business users."
          },
        },
        {
          id: 47,
          brand: "HP",
          name: 'EliteBook 830 G8 i5‑1135G7 16GB 256GB SSD 13.3"',
          category: "Бізнес",
          price: 1096, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑1135G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '13.3" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.28 kg",
          battery: "11 годин",
          badge: "new",
          emoji: "💼",
          images: [
            "images/laptops/hp-elitebook-830-g88-1.jpg",
            "images/laptops/hp-elitebook-830-g88-2.jpg",
            "images/laptops/hp-elitebook-830-g88-3.jpg"
          ],
          desc: {
            uk: "HP EliteBook 830 G8 — легкий бізнес‑ультрабук із новим CPU та довгою автономністю.",
            pl: "HP EliteBook 830 G8 — lekki biznesowy ultrabook z nowym procesorem i długim czasem pracy baterii.",
            en: "HP EliteBook 830 G8 — a light business ultrabook with a new CPU and long battery life."
          },
        },
        {
          id: 48,
          brand: "HP",
          name: 'EliteBook 645 G9 14" Ryzen 5 5625U 16GB 256GB SSD Radeon',
          category: "Бізнес",
          price: 1600, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "AMD Ryzen 5 5625U",
          gpu: "Radeon Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.39 kg",
          battery: "12 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/hp-elitebook-645-g9-1.jpg",
            "images/laptops/hp-elitebook-645-g9-2.jpg",
            "images/laptops/hp-elitebook-645-g9-3.jpg"
          ],
          desc: {
            uk: "HP EliteBook 645 G9 з Ryzen 5 — швидкий і ефективний ноутбук для професіоналів.",
            pl: "HP EliteBook 645 G9 z Ryzen 5 — szybki i wydajny laptop dla profesjonalistów.",
            en: "HP EliteBook 645 G9 with Ryzen 5 — a fast and efficient laptop for professionals."
          },
        },
        {
          id: 49,
          brand: "Lenovo",
          name: 'ThinkPad E490 14" i5‑8265U 16GB 256GB SSD Czarny',
          category: "Бізнес",
          price: 1697, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i5‑8265U",
          gpu: "Intel UHD Graphics 620",
          screen: '14" Full HD IPS',
          os: "Windows 10 Pro",
          weight: "1.75 kg",
          battery: "10 годин",
          badge: null,
          emoji: "🧳",
          images: [
            "images/laptops/lenovo-thinkpad-e490-i5-1.jpg",
            "images/laptops/lenovo-thinkpad-e490-i5-2.jpg",
            "images/laptops/lenovo-thinkpad-e490-i5-3.jpg"
          ],
          desc: {
            uk: "Lenovo ThinkPad E490 — міцний та зручний у роботі ноутбук для бізнесу й навчання.",
            pl: "Lenovo ThinkPad E490 — solidny i wygodny laptop do pracy dla biznesu i nauki.",
            en: "Lenovo ThinkPad E490 — a sturdy and comfortable work laptop for business and study."
          },
        },
        {
          id: 50,
          brand: "Apple",
          name: "MacBook Pro A2141 2019 i9‑9980HK 32 GB 512 GB",
          category: "Професійні",
          price: 2299, // PLN
          ram: "32 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i9‑9980HK",
          gpu: "AMD Radeon Pro 5500M 4 GB",
          screen: '16" Retina 3072×1920',
          os: "macOS",
          weight: "2.0 kg",
          battery: "11 годин",
          badge: "hot",
          emoji: "🍏",
          images: [
            "images/laptops/apple-macbook-pro-16-i9-32gb-1.jpg",
            "images/laptops/apple-macbook-pro-16-i9-32gb-2.jpg",
            "images/laptops/apple-macbook-pro-16-i9-32gb-3.jpg"
          ],
          desc: {
            uk: "MacBook Pro 16\" (2019) на Intel Core i9 — професійна модель для редакторів і дизайнерів.",
            pl: "MacBook Pro 16\" (2019) na Intel Core i9 — profesjonalny model dla redaktorów i projektantów.",
            en: "MacBook Pro 16\" (2019) with Intel Core i9 — a professional model for editors and designers."
          },
        },
        {
          id: 51,
          brand: "Apple",
          name: 'MacBook Pro A2141 16" 2019 i9‑9980HK 32GB 512GB SSD',
          category: "Професійні",
          price: 2299, // PLN
          ram: "32 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i9‑9980HK",
          gpu: "AMD Radeon Pro 5500M 4 GB",
          screen: '16" Retina 3072×1920',
          os: "macOS",
          weight: "2.0 kg",
          battery: "11 годин",
          badge: "hot",
          emoji: "🍎",
          images: [
            "images/laptops/apple-macbook-pro-16-i9-radeon-1.jpg",
            "images/laptops/apple-macbook-pro-16-i9-radeon-2.jpg",
            "images/laptops/apple-macbook-pro-16-i9-radeon-3.jpg"
          ],
          desc: {
            uk: "Ігрово‑робоча станція MacBook Pro 16\" з i9 і Radeon Pro — потужність у класичному дизайні Apple.",
            pl: "Gamingowa stacja robocza MacBook Pro 16\" z i9 i Radeon Pro — moc w klasycznym designie Apple.",
            en: "Gaming workstation MacBook Pro 16\" with i9 and Radeon Pro — power in classic Apple design."
          },
        },
        {
          id: 52,
          brand: "Dell",
          name: 'Latitude 5420 14" HD i7‑1185G7 16GB 256GB SSD Intel HD',
          category: "Бізнес",
          price: 1199.99, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑1185G7",
          gpu: "Intel Iris Xe Graphics",
          screen: '14" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "1.4 kg",
          battery: "12 годин",
          badge: null,
          emoji: "💼",
          images: [
            "images/laptops/dell-latitude-5420-1.jpg",
            "images/laptops/dell-latitude-5420-2.jpg",
            "images/laptops/dell-latitude-5420-3.jpg"
          ],
          desc: {
            uk: "Dell Latitude 5420 — ефективний та легкий бізнес‑ноутбук із Core i7 та батареєю на цілий день.",
            pl: "Dell Latitude 5420 — wydajny i lekki biznesowy laptop z Core i7 i baterią na cały dzień.",
            en: "Dell Latitude 5420 — an efficient and light business laptop with Core i7 and all-day battery life."
          },
        },
        {
          id: 53,
          brand: "Apple",
          name: 'MacBook Pro 15.4" A1990 2019 i9 32GB 512GB SSD',
          category: "Професійні",
          price: 2499, // PLN
          ram: "32 GB",
          storage: "512 GB SSD",
          cpu: "Intel Core i9‑9980H",
          gpu: "AMD Radeon Pro 560X 4 GB",
          screen: '15.4" Retina 2880×1800',
          os: "macOS",
          weight: "1.83 kg",
          battery: "10 годин",
          badge: null,
          emoji: "🍎",
          images: [
            "images/laptops/apple-macbook-pro-15-2019-32gb-1.jpg",
            "images/laptops/apple-macbook-pro-15-2019-32gb-2.jpg",
            "images/laptops/apple-macbook-pro-15-2019-32gb-3.jpg"
          ],
          desc: {
            uk: "MacBook Pro 15\" (2019) із 32 ГБ RAM та Radeon Pro — універсальний інструмент для творчих профі.",
            pl: "MacBook Pro 15\" (2019) z 32 GB RAM i Radeon Pro — uniwersalne narzędzie dla kreatywnych profesjonalistów.",
            en: "MacBook Pro 15\" (2019) with 32 GB RAM and Radeon Pro — a versatile tool for creative pros."
          },
        },
        {
          id: 54,
          brand: "Dell",
          name: 'Precision 3541 15.6" i7‑9850H 16GB 256GB SSD Czarny',
          category: "Професійні",
          price: 2099, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑9850H (6C/12T)",
          gpu: "NVIDIA Quadro P620 4 GB",
          screen: '15.6" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "2.0 kg",
          battery: "8 годин",
          badge: null,
          emoji: "🧠",
          images: [
            "images/laptops/dell-precision-3541-1.jpg",
            "images/laptops/dell-precision-3541-2.jpg",
            "images/laptops/dell-precision-3541-3.jpg"
          ],
          desc: {
            uk: "Dell Precision 3541 — мобільна робоча станція для CAD та графічних додатків.",
            pl: "Dell Precision 3541 — mobilna stacja robocza do CAD i aplikacji graficznych.",
            en: "Dell Precision 3541 — a mobile workstation for CAD and graphic applications."
          },
        },
        {
          id: 55,
          brand: "Dell",
          name: 'Precision 3541 15.6" FHD i7‑9850H 16GB 256GB SSD Quadro',
          category: "Професійні",
          price: 1999.99, // PLN
          ram: "16 GB",
          storage: "256 GB SSD",
          cpu: "Intel Core i7‑9850H",
          gpu: "NVIDIA Quadro P620 4 GB",
          screen: '15.6" FHD IPS 1920×1080',
          os: "Windows 11 Pro",
          weight: "2.02 kg",
          battery: "8 годин",
          badge: "hot",
          emoji: "🧠",
          images: [
            "images/laptops/dell-precision-3541-quadro-1.jpg",
            "images/laptops/dell-precision-3541-quadro-2.jpg",
            "images/laptops/dell-precision-3541-quadro-3.jpg"
          ],
          desc: {
            uk: "Dell Precision 3541 з графікою Quadro — ідеальний для інженерів та дизайнерів, що цінують надійність.",
            pl: "Dell Precision 3541 z kartą graficzną Quadro — idealny dla inżynierów i projektantów ceniących niezawodność.",
            en: "Dell Precision 3541 with Quadro graphics — ideal for engineers and designers who value reliability."
          },
        },
];
