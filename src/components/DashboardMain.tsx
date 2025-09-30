import { useState } from "react";
import { BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PondCard from "./PondCard";
import PhChart from "./PhChart";
import LogbookTable from "./LogbookTable";

const DashboardMain = () => {
  const [currentView, setCurrentView] = useState<"summary" | "detail">("summary");
  const [selectedPond, setSelectedPond] = useState<string>("");

  const ponds = [
    {
      name: "Tambak Mutiara - A1",
      status: "stable" as const,
      doc: 75,
      sr: 95.0,
      abw: 15.1,
      fcr: 1.45
    },
    {
      name: "Jaya Makmur - A2",
      status: "attention" as const,
      doc: 42,
      sr: 92.3,
      abw: 8.7,
      phMorning: 6.9
    },
    {
      name: "Bintang Timur - B1",
      status: "stable" as const,
      doc: 55,
      sr: 94.2,
      abw: 12.3,
      fcr: 1.51
    }
  ];

  const handleViewDetail = (pondName: string) => {
    setSelectedPond(pondName);
    setCurrentView("detail");
  };

  const handleBackToSummary = () => {
    setCurrentView("summary");
    setSelectedPond("");
  };

  if (currentView === "detail") {
    return (
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={handleBackToSummary}
          className="text-primary hover:text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Rangkuman
        </Button>

        {/* Detail Header */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Detail Riwayat <span className="text-primary">{selectedPond}</span>
          </h2>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="text-sm font-bold text-muted-foreground mb-3">Status Siklus</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Umur:</span> 42 Hari</p>
              <p><span className="font-semibold">Populasi Awal:</span> 8.000 Ekor</p>
              <p><span className="font-semibold">Deplesi:</span> 620 Ekor (7.75%)</p>
              <p><span className="font-semibold">SR:</span> 92.25 %</p>
              <p><span className="font-semibold">Populasi Kini:</span> 7.380 Ekor</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="text-sm font-bold text-muted-foreground mb-3">Performa Panen</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Total Pakan:</span> 550 kg</p>
              <p><span className="font-semibold">ABW:</span> 8.7 gr</p>
              <p><span className="font-semibold">Estimasi Biomassa:</span> 64.2 kg</p>
            </div>
          </div>

          <div className="bg-info/10 p-6 rounded-lg shadow-md">
            <h4 className="text-sm font-bold text-info mb-3">Indikator Kunci</h4>
            <div className="space-y-2 text-sm">
              <p className="text-info"><span className="font-semibold">FCR:</span> 1.62</p>
              <p className="text-info"><span className="font-semibold">IP:</span> 320</p>
            </div>
          </div>
        </div>

        {/* pH Chart */}
        <PhChart />

        {/* Logbook Table */}
        <LogbookTable />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Rangkuman Siklus Tambak</h2>
        <p className="text-muted-foreground">Monitor semua tambak dan siklus produksi dalam satu dashboard</p>
      </div>

      <div className="space-y-6">
        {ponds.map((pond, index) => (
          <PondCard
            key={index}
            name={pond.name}
            status={pond.status}
            doc={pond.doc}
            sr={pond.sr}
            abw={pond.abw}
            fcr={pond.fcr}
            phMorning={pond.phMorning}
            onViewDetail={handleViewDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardMain;