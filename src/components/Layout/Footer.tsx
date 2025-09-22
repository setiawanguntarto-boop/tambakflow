import React from "react";
import { Logo } from "@/components/Brand/Logo";

export const Footer = () => {
  return (
    <footer className="bg-gradient-ocean text-primary-foreground py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-primary-foreground" />
            <span className="font-semibold text-xl">Tambakflow</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <a href="#privacy" className="hover:text-accent-light transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-accent-light transition-colors">
              Kontak
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-light text-sm">
            Powered by <span className="font-semibold">Naraflow</span> — WhatsApp-first workflow & data engine
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            © 2024 Tambakflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};