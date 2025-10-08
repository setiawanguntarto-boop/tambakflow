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
  return;
};