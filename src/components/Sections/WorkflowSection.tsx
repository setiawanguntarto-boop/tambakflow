import React from "react";

const WorkflowStep = ({ 
  step, 
  title, 
  description
}: { 
  step: number; 
  title: string; 
  description: string;
}) => (
  <div className="p-8 bg-muted/30 rounded-2xl border border-border/50 text-center">
    <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
      {step}
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-3">{title}</h4>
    <p className="text-muted-foreground">
      {description}
    </p>
  </div>
);

export const WorkflowSection = () => {
  const workflowSteps = [
    {
      step: 1,
      title: "Input Data via WhatsApp",
      description: "Teknisi cukup membalas chat dari Bot Tambakflow untuk mengirim data harian—kualitas air, pakan, mortalitas—tanpa aplikasi tambahan."
    },
    {
      step: 2,
      title: "Analisis Otomatis & Cerdas",
      description: "Sistem kami langsung menghitung metrik vital seperti FCR, SR, dan estimasi biomassa, serta memberi peringatan dini jika ada anomali."
    },
    {
      step: 3,
      title: "Dapatkan Laporan & Rekomendasi",
      description: "Akses laporan performa siklus yang mudah dibaca dan dapatkan rekomendasi cerdas untuk optimalkan hasil panen Anda."
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hanya 3 Langkah Mudah
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami merancang alur kerja yang sangat sederhana, bahkan untuk teknisi yang awam dengan teknologi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};