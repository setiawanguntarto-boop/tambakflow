import { BarChart3, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import DashboardMain from "@/components/DashboardMain";
const Dashboard = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="p-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="text-primary hover:text-primary hover:bg-primary/10">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Button>
      </div>

      {/* Header */}
      <header className="text-center py-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          
          <h1 className="text-4xl font-extrabold text-foreground">Dasbor Aplikasi Tambakflow</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sistem monitoring tambak terintegrasi - dari laporan WhatsApp teknisi hingga dashboard monitoring manajer
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: WhatsApp Mockup */}
          <div className="lg:w-1/3 w-full flex-shrink-0">
            <WhatsAppMockup />
          </div>

          {/* Right Side: Web Dashboard */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-card rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-foreground mb-2">Sisi Manajer (Web Dashboard)</h2>
                <p className="text-sm text-muted-foreground">
                  Manajer memantau semua siklus dan bisa klik untuk melihat detail.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg min-h-[600px]">
                {/* Dashboard Header */}
                <header className="bg-card shadow-sm sticky top-0 z-10 rounded-lg mb-6">
                  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      
                      <h1 className="text-xl font-bold text-foreground">Dasbor Monitoring</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </header>

                {/* Dashboard Content */}
                <main>
                  <DashboardMain />
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;