"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { facilityData } from "@/data/facility";

const navItems = [
  { label: "グループホーム朝日の特長", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "受け入れ体制", href: "#system" },
  { label: "ご入居までの流れ", href: "#flow" },
  { label: "お客様の声", href: "#testimonials" },
  { label: "よくある質問", href: "#faq" },
  { label: "所在地", href: "#location" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl md:text-2xl font-bold text-primary-700"
            >
              {facilityData.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm text-gray-700 hover:text-accent-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Chat Button */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${facilityData.phone.replace(/-/g, "")}`}
              className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors text-sm"
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${facilityData.phone.replace(/-/g, "")}`}
                className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-center mt-2"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
