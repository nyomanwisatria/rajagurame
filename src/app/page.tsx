"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const [orderTotal, setOrderTotal] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Elemen dengan ID " + sectionId + " tidak ditemukan.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const categories = [
    {
      name: "Terlaris",
      items: [
        { name: "Mujair Goreng", price: 22000, image: "/about.png" },
        { name: "Es Teh Manis", price: 10000, image: "/esteh.png" },
        { name: "Gurame Goreng", price: 22000, image: "/2.png" },
        { name: "Sate Ayam", price: 25000, image: "/sate.png" },
      ],
    },
    {
      name: "Makanan",
      items: [
        { name: "Gurame Bakar", price: 19000, image: "/1.png" },
        { name: "Mujair Goreng", price: 22000, image: "/about.png" },
        { name: "Gurame Goreng", price: 15000, image: "/2.png" },
        { name: "Gurame Nyat-nyat", price: 50000, image: "/3.png" },
        { name: "Lele Bakar", price: 15000, image: "/4.png" },
        { name: "Sate Ayam", price: 25000, image: "/1.png" },
      ],
    },
    {
      name: "Minuman",
      items: [
        { name: "Es Teh Manis", price: 10000, image: "/esteh.png" },
        { name: "Es Jeruk", price: 12000, image: "/jeruk.png" },
        { name: "Air Mineral", price: 5000, image: "/mineral.png" },
        { name: "Kopi Tubruk", price: 15000, image: "/kuwut.png" },
        { name: "Es Campur", price: 20000, image: "/campur.png" },
        { name: "Jus Alpukat", price: 25000, image: "/alpukat.png" },
      ],
    },
  ];

  const handleOrder = () => {
    console.log("Order button clicked!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-orange-600">Raja Gurame</div>
            <div className="space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-orange-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-orange-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-600 hover:text-orange-600"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-orange-600"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex flex-col justify-center items-center py-[50px] text-white"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "100%",
          paddingTop: "64px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
          <p className="mt-2">{slides[currentSlide].description}</p>
        </div>
      </section>

      <section id="about" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-orange-700">Tentang Raja Gurame</h3>
          <p className="mt-4 text-lg">
            Raja Gurame adalah restoran yang mengkhususkan diri dalam menyajikan olahan gurame terbaik dengan resep khas Nusantara.
          </p>
        </div>
      </section>

      <section id="menu" className="py-16">
        <nav className="flex justify-center mt-4 space-x-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.name
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-orange-600 text-orange-600"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {categories
              .find((category) => category.name === selectedCategory)
              ?.items.map((item) => (
                <div key={item.name} className="bg-white rounded shadow p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
                  <p className="text-orange-600 font-semibold">
                    IDR {item.price.toLocaleString()}
                  </p>
                  <button
                    className="mt-2 w-full bg-orange-600 text-white py-1 rounded"
                    onClick={() => handleOrder()}
                  >
                    Pesan Sekarang
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-orange-700">Hubungi Kami</h3>
          <div className="mt-8 max-w-md mx-auto">
            <p className="text-gray-600 mb-4">
              <strong>Alamat:</strong> Pondok Santap Raja Gurame, Gg. Sawo II No.33, Segala Mider, Kec. Tj. Karang Bar., Kota Bandar Lampung, Lampung 35125
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Telepon:</strong> 082281431287
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> wisatrianyoman.com
            </p>
            <p className="text-gray-600">
              <strong>Jam Operasional:</strong><br />
              Senin - Minggu: 10:00 - 22:00
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-orange-600 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Raja Gurame. All rights reserved.
        </p>
      </footer>
    </div>
  );
}