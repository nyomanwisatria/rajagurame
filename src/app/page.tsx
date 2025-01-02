"use client";

import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const [orderTotal, setOrderTotal] = useState(0);

  const categories = [
    {
      name: "Terlaris",
      items: [
        { name: "Ayam Goreng", price: 19000, image: "/ayam-goreng.jpg" },
        { name: "Es Teh Manis", price: 10000, image: "/es-teh.jpg" },
        { name: "Mujair Goreng", price: 22000, image: "/mujair-goreng.jpg" },
        { name: "Sate Ayam", price: 25000, image: "/sate-ayam.jpg" },
      ],
    },
    {
      name: "Makanan",
      items: [
        { name: "Ayam Goreng", price: 19000, image: "/ayam-goreng.jpg" },
        { name: "Mujair Goreng", price: 22000, image: "/mujair-goreng.jpg" },
        { name: "Lele Goreng", price: 15000, image: "/lele-goreng.jpg" },
        { name: "Tumis Tempe", price: 7000, image: "/tumis-tempe.jpg" },
        { name: "Ikan Goreng", price: 15000, image: "/ikan-goreng.jpg" },
        { name: "Sate Ayam", price: 25000, image: "/sate-ayam.jpg" },
      ],
    },
    {
      name: "Minuman",
      items: [
        { name: "Es Teh Manis", price: 10000, image: "/es-teh.jpg" },
        { name: "Es Jeruk", price: 12000, image: "/es-jeruk.jpg" },
        { name: "Air Mineral", price: 5000, image: "/air-mineral.jpg" },
        { name: "Kopi Tubruk", price: 15000, image: "/kopi-tubruk.jpg" },
        { name: "Es Campur", price: 20000, image: "/es-campur.jpg" },
        { name: "Jus Alpukat", price: 25000, image: "/jus-alpukat.jpg" },
      ],
    },
  ];

  const handleOrder = () => {
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center py-50 text-white"
        style={{
          backgroundImage: 'url(home.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',

        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">Warteg Serba Ada!</h2>
          <p className="mt-2">Dapatkan potongan harga dengan min. order IDR 50,000</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-orange-700">Tentang Raja Gurame</h3>
          <p className="mt-4 text-lg">
            Raja Gurame adalah restoran yang mengkhususkan diri dalam menyajikan olahan gurame terbaik dengan resep khas Nusantara. 
            Kami berkomitmen untuk menghadirkan pengalaman kuliner yang autentik dan lezat bagi setiap pelanggan.
          </p>
          <p className="mt-2">
            Berdiri sejak tahun 2010, Raja Gurame telah menjadi pilihan utama bagi para pecinta ikan gurame. Dengan bahan-bahan 
            segar dan berkualitas tinggi, setiap hidangan yang kami sajikan dibuat dengan penuh cinta dan perhatian terhadap detail.
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src="/about-image.jpg" // Ganti dengan path gambar Anda
              alt="Raja Gurame"
              className="rounded-lg shadow-lg w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
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

      {/* Menu Items */}
      <section className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {categories
            .find((category) => category.name === selectedCategory)
            ?.items.map((item, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
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
      </section>

