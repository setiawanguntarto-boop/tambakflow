import React from "react";
import { Card } from "@/components/ui/card";
const InfoCard = ({
  title,
  text
}: {
  title: string;
  text: string;
}) => <Card className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
    <h4 className="text-xl font-semibold text-primary mb-3">{title}</h4>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </Card>;
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mengapa Tambakflow Berbeda?
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Tambakflow dirancang khusus untuk pembudidaya udang vaname yang menginginkan sistem pencatatan data yang <span className="font-semibold text-primary">sederhana, andal, dan berbasis peran</span>, sehingga teknisi lapangan tetap fokus pada tugasnya tanpa perlu mempelajari aplikasi rumit.
          </p>
        </div>
      </div>
    </section>
  );
};