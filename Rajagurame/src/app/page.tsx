"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const contactInfo = {
    phone: "+6282186386670",
    instagram: "@rajagurame",
    hours: "10:00 - 22:00",
    address:
      "Pondok Santap Raja Gurame, Gg. Sawo II No.33, Segala Mider, Kec. Tj. Karang Bar., Kota Bandar Lampung, Lampung 35125",
  };

  const slides = [
    {
      title: "Selamat Datang di Raja Gurame",
      description: "Rasakan kelezatan ikan gurame khas Nusantara.",
      image: "/about.png",
    },
    {
      title: "Promo Spesial!",
      description: "Dapatkan diskon hingga 20% untuk pesanan spesial.",
      image: "/2.png",
    },
    {
      title: "Gurame Terbaik",
      description: "Diolah dari bahan-bahan segar dan berkualitas.",
      image: "/3.png",
    },
  ];

  const categories = [
    {
      name: "Terlaris",
      items: [
        {
          name: "Mujair Goreng",
          price: 22000,
          image: "/about.png",
          description:
            "Ikan mujair segar pilihan yang digoreng garing dengan bumbu rempah khas Raja Gurame. Disajikan dengan sambal dan lalapan segar.",
        },
        {
          name: "Es Teh Manis",
          price: 10000,
          image: "/esteh.png",
          description:
            "Teh berkualitas tinggi yang diseduh sempurna dan disajikan dingin dengan tingkat kemanisan yang pas.",
        },
        {
          name: "Gurame Goreng",
          price: 22000,
          image: "/2.png",
          description:
            "Ikan gurame ukuran jumbo digoreng hingga garing dengan bumbu tradisional. Cocok untuk dimakan bersama keluarga.",
        },
        {
          name: "Sate Ayam",
          price: 25000,
          image: "/sate.png",
          description:
            "Potongan daging ayam pilihan yang dimarinasi dengan bumbu kacang special dan dipanggang sempurna.",
        },
      ],
    },
    {
      name: "Makanan",
      items: [
        {
          name: "Gurame Bakar",
          price: 19000,
          image: "/1.png",
          description:
            "Ikan gurame segar yang dibakar dengan bumbu tradisional dan diolesi kecap manis special. Disajikan dengan sambal kecap.",
        },
        {
          name: "Mujair Goreng",
          price: 22000,
          image: "/about.png",
          description:
            "Ikan mujair segar pilihan yang digoreng garing dengan bumbu rempah khas Raja Gurame. Disajikan dengan sambal dan lalapan segar.",
        },
        {
          name: "Gurame Goreng",
          price: 15000,
          image: "/2.png",
          description:
            "Ikan gurame ukuran jumbo digoreng hingga garing dengan bumbu tradisional. Cocok untuk dimakan bersama keluarga.",
        },
        {
          name: "Gurame Nyat-nyat",
          price: 50000,
          image: "/3.png",
          description:
            "Hidangan khas Bali dengan ikan gurame yang dimasak dengan bumbu nyat-nyat autentik. Rasanya pedas dan sangat menggugah selera.",
        },
        {
          name: "Lele Bakar",
          price: 15000,
          image: "/4.png",
          description:
            "Ikan lele segar yang dibakar dengan bumbu special. Disajikan dengan sambal terasi dan lalapan.",
        },
        {
          name: "Sate Ayam",
          price: 25000,
          image: "/sate.png",
          description:
            "Potongan daging ayam pilihan yang dimarinasi dengan bumbu kacang special dan dipanggang sempurna.",
        },
      ],
    },
    {
      name: "Minuman",
      items: [
        {
          name: "Es Teh Manis",
          price: 10000,
          image: "/esteh.png",
          description:
            "Teh berkualitas tinggi yang diseduh sempurna dan disajikan dingin dengan tingkat kemanisan yang pas.",
        },
        {
          name: "Es Jeruk",
          price: 12000,
          image: "/jeruk.png",
          description:
            "Jeruk segar pilihan yang diperas langsung dan disajikan dengan es. Menyegarkan dan kaya vitamin C.",
        },
        {
          name: "Air Mineral",
          price: 5000,
          image: "/mineral.png",
          description: "Air mineral berkualitas yang menyegarkan dan sehat.",
        },
        {
          name: "Kopi Tubruk",
          price: 15000,
          image: "/kuwut.png",
          description:
            "Kopi tradisional yang diseduh dengan air panas, menggunakan biji kopi pilihan yang digiling segar.",
        },
        {
          name: "Es Campur",
          price: 20000,
          image: "/campur.png",
          description:
            "Kombinasi berbagai buah segar, cincau, dan jelly dengan sirup manis dan susu. Dessert yang menyegarkan.",
        },
        {
          name: "Es Cream Alpukat",
          price: 25000,
          image: "/alpukat.png",
          description:
            "Es krim lembut dengan alpukat segar berkualitas tinggi. Disajikan dengan susu dan cokelat serut di atasnya.",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "contact"];
      let maxVisibleSection = sections[0];
      let maxVisibleArea = 0;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            maxVisibleSection = sectionId;
          }
        }
      });

      setActiveSection(maxVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <title>Restoran Raja Gurame</title>
      <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="h-25 w-20 m-2 text-black inline-block whitespace-nowrap text-2xl font-bold">
                    Pondok Santap Raja Gurame
                  </p>
                </div>
              </div>
              <div className="space-x-6">
                <a
                  href="#home"
                  className={`transition-colors duration-300 ${
                    activeSection === "home"
                      ? "text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-orange-600"
                  }`}>
                  Home
                </a>
                <a
                  href="#about"
                  className={`transition-colors duration-300 ${
                    activeSection === "about"
                      ? "text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-orange-600"
                  }`}>
                  About
                </a>
                <a
                  href="#menu"
                  className={`transition-colors duration-300 ${
                    activeSection === "menu"
                      ? "text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-orange-600"
                  }`}>
                  Menu
                </a>
                <a
                  href="#contact"
                  className={`transition-colors duration-300 ${
                    activeSection === "contact"
                      ? "text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-orange-600"
                  }`}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-16"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              {slides[currentSlide].description}
            </p>
            <a
              href="#menu"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Lihat Menu
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-orange-700 mb-8">
                Tentang Kami
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Raja Gurame hadir dengan komitmen menghadirkan kelezatan
                autentik masakan Indonesia. Dengan bahan berkualitas dan racikan
                bumbu special, kami menghadirkan pengalaman kuliner yang tak
                terlupakan untuk Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16">
          <div className="container mx-auto px-6">
            <nav className="flex justify-center mt-4 space-x-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category.name
                      ? "bg-orange-600 text-white"
                      : "bg-white border border-orange-600 text-orange-600"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}>
                  {category.name}
                </button>
              ))}
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {categories
                .find((category) => category.name === selectedCategory)
                ?.items.map((item) => (
                  <div key={item.name} className="bg-white rounded shadow p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-50 object-cover rounded"
                    />
                    <h3 className="mt-2 text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-lg text-orange-600 font-bold">
                      IDR {item.price.toLocaleString("id-ID")}
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-orange-700 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami siap melayani Anda. Kunjungi lokasi kami atau hubungi
                melalui berbagai channel di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1482130649856!2d105.24430517523254!3d-5.39437429458468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40daec45c84ddb%3A0x762f01b4be3ce046!2sPondok%20Santap%20Raja%20Gurame!5e0!3m2!1sid!2sid!4v1736248752165!5m2!1sid!2sid"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href={`https://wa.me/${contactInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/pondoksantaprajagurame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Instagram
                      </h3>
                      <p className="text-gray-600">{contactInfo.instagram}</p>
                    </div>
                  </div>
                </a>

                <div className="p-6 bg-white rounded-xl shadow-md border border-orange-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Jam Operasional
                      </h3>
                      <p className="text-gray-600">Setiap Hari</p>
                      <p className="text-gray-800 font-semibold">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md border border-orange-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Alamat
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-orange-600 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg mb-2">
              Raja Gurame - Kelezatan Dalam Setiap Sajian
            </p>
            <p className="text-sm opacity-75">
              &copy; {new Date().getFullYear()} Raja Gurame. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
