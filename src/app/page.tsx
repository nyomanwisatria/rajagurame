"use client";
import { useState } from "react";

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

  // Rotasi otomatis slide (tanpa useEffect)
  if (typeof window !== "undefined") {
    setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Elemen dengan ID " + sectionId + " tidak ditemukan.");
    }
  };

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
        { name: "Es Cream Alpukat", price: 25000, image: "/alpukat.png" },
      ],
    },
  ];

  const handleOrder = () => {
    console.log("Order button clicked!");
  };


  return (
    
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-orange-600">Raja Gurame</div>
            <div className="space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Home</a>
              <a href="#menu" className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16" style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
    {slides[currentSlide].title}
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl mb-8">
    {slides[currentSlide].description}
  </p>
  <a
    href="#menu"
    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    Lihat Menu
  </a>
</div>

      </section>

      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-700 mb-8">Tentang Kami</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Raja Gurame hadir dengan komitmen menghadirkan kelezatan autentik masakan Indonesia.
              Dengan bahan berkualitas dan racikan bumbu special, kami menghadirkan
              pengalaman kuliner yang tak terlupakan untuk Anda.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16">
      <nav className="flex justify-center mt-4 space-x-4 mb-8"> 
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
        <h3 className="mt-2 text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-lg text-orange-600 font-bold">
          IDR {item.price.toLocaleString("id-ID")}
        </p>
        <button className="mt-2 w-full bg-orange-600 text-white py-2 rounded">
          Pesan Sekarang
        </button>
      </div>
    ))}
</div>

      </section>

      <section id="contact" className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h3 className="text-3xl font-bold text-orange-700">Hubungi Kami</h3>
    <div className="mt-8 max-w-md mx-auto text-left"> {/* Aligned text to the left */}
      <p className="text-gray-600 mb-2"> {/* Reduced margin-bottom */}
        <strong>Alamat:</strong> Pondok Santap Raja Gurame, Gg. Sawo II No.33, Segala Mider, Kec. Tj. Karang Bar., Kota Bandar Lampung, Lampung 35125
      </p>
      <p className="text-gray-600 mb-2"> {/* Reduced margin-bottom */}
        <strong>Telepon:</strong> 082281431287
      </p>
      <p className="text-gray-600 mb-2"> {/* Reduced margin-bottom */}
        <strong>Email:</strong> wisatrianyoman.com
      </p>
      <p className="text-gray-600">
        <strong>Jam Operasional:</strong><br />
        Senin - Minggu: 10:00 - 22:00
      </p>
    </div>
  </div>
</section>



      <footer className="bg-orange-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">Raja Gurame - Kelezatan Dalam Setiap Sajian</p>
          <p className="text-sm opacity-75">
            &copy; {new Date().getFullYear()} Raja Gurame. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
