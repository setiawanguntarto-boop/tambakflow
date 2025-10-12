import React from "react";
import { Card } from "@/components/ui/card";
import { MessageCircle, UserCheck, Shield, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  return (
    <>
      {/* Tentang Section */}
      <section id="tentang" className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground font-['Inter']">
            Solusi Pencatatan Tambak Langsung dari WhatsApp
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-['Inter']">
            <span className="font-semibold text-primary">Tambakflow</span> adalah{" "}
            <span className="font-medium">agent WhatsApp-first</span> untuk budidaya udang vaname. 
            Kami menyatukan pencatatan harian, pemantauan, dan pelaporan dalam satu alur percakapan yang sederhana—sehingga 
            teknisi tetap fokus pada kolam, sementara data otomatis rapi dan siap dipakai manajer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
              Tebar, Pakan & Sampling
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              Validasi & Jejak Audit
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
              Laporan SR/FCR Otomatis
            </span>
          </div>
        </div>
      </section>

      {/* Mengapa Berbeda Section */}
      <section id="mengapa" className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-['Inter']">
              Mengapa Tambakflow Berbeda?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-['Inter']">
              Dirancang untuk alur kerja tambak yang sesungguhnya, bukan sekadar aplikasi biasa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-100 grid place-items-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground font-['Inter']">WhatsApp‑first</h3>
              <p className="text-sm text-muted-foreground font-['Inter']">
                Tidak perlu aplikasi baru. Format chat yang familiar dan mudah diikuti oleh teknisi di lapangan.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-100 grid place-items-center mx-auto mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground font-['Inter']">Berbasis Peran</h3>
              <p className="text-sm text-muted-foreground font-['Inter']">
                Alur kerja terstruktur untuk teknisi, supervisor, dan manajer agar semua berjalan rapi dan efisien.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100 grid place-items-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground font-['Inter']">Data Andal</h3>
              <p className="text-sm text-muted-foreground font-['Inter']">
                Validasi angka, konsistensi unit, dan jejak audit otomatis untuk menjaga kualitas dan integritas data.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-100 grid place-items-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1 text-foreground font-['Inter']">Siap Laporan</h3>
              <p className="text-sm text-muted-foreground font-['Inter']">
                Rekap SR, FCR, dan kualitas air dibuat otomatis—siap dianalisis untuk pengambilan keputusan strategis.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};