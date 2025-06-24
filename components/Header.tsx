'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // TODO: marginesy/kontener
    <header className="relative bg-background text-foreground flex items-center py-4 px-6 w-full"> 
      <div className="flex justify-between items-center space-x-4 w-full">
        <Link
          href="/"
          className="text-[32px] font-semibold font-albert-sans uppercase z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          Progher.studio
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 w-8 h-8 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d={isMenuOpen ? 'M4 6L20 6' : 'M0 6L16 6'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 18L20 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <nav className="fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-2xl z-40">
              <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/#portfolio" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/#footer" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}