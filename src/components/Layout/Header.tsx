import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Brand/Logo";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-gradient-ocean text-primary-foreground shadow-ocean sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" aria-label="Homepage" className="flex items-center space-x-2">
          <Logo />
          <h1 className="text-2xl font-bold hidden md:block">Tambakflow</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-accent-light transition-colors font-medium">
            Tentang
          </a>
          <a href="#features" className="hover:text-accent-light transition-colors font-medium">
            Fitur
          </a>
          <a href="#workflow" className="hover:text-accent-light transition-colors font-medium">
            Alur
          </a>
          <a href="/demo" className="hover:text-accent-light transition-colors font-medium">
            Demo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary-foreground hover:bg-primary-foreground/10" aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-primary-dark text-center pb-4 space-y-2">
          <a href="#about" className="block py-2 hover:text-accent-light transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
            Tentang
          </a>
          <a href="#features" className="block py-2 hover:text-accent-light transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
            Fitur
          </a>
          <a href="#workflow" className="block py-2 hover:text-accent-light transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
            Alur
          </a>
          <a href="/demo" className="block py-2 hover:text-accent-light transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
            Demo
          </a>
        </div>}
    </header>;
};