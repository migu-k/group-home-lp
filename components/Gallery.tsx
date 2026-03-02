"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    alt: "施設外観",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80",
    alt: "リビング",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    alt: "ダイニング",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=1200&q=80",
    alt: "相談室",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            グループホームあさひ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ※お部屋の写真はモデルルームであり、実際の居室はベッド・エアコン以外の家具・調度品等は含まれておりません。
        </p>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="画像ギャラリー"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="閉じる"
            >
              <FiX className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="前の画像"
            >
              <FiChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-16 text-white hover:text-gray-300 z-10"
              aria-label="次の画像"
            >
              <FiChevronRight className="w-10 h-10" />
            </button>
            <div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
