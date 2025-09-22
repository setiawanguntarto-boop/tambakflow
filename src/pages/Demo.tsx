import React, { useEffect, useState, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Message {
  text: string;
  type: 'bot' | 'user';
  delay?: number;
}

const Demo = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Main menu text for reuse
  const mainMenu = "Selamat datang, Supervisor! Silakan pilih menu:<br>1. Daftarkan Plasma<br>2. Daftarkan Siklus<br>3. Input Sampling Mingguan<br>4. Rekap Data Historis Siklus<br>5. Tutup Siklus<br>6. Tanya Tambaksmart<br>0. Kembali";

  // Define the complete conversation flow
  const supervisorJourneyFlow: Message[] = [
    // Main Menu
    { text: mainMenu, type: 'bot' },
    // Flow 1: Daftarkan Plasma
    { text: "1", type: 'user', delay: 1500 },
    { text: "Baik, silakan input nama plasma yang akan mengelola siklus:", type: 'bot', delay: 2000 },
    { text: "Budi", type: 'user', delay: 2000 },
    { text: "✅ Plasma Budi berhasil didaftarkan.<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2500 },
    { text: "0", type: 'user', delay: 1000 },
    
    // Back to Main Menu
    { text: mainMenu, type: 'bot', delay: 1500 },
    // Flow 2: Daftarkan Siklus
    { text: "2", type: 'user', delay: 1500 },
    { text: "Berikut adalah ringkasan siklus yang sedang berjalan:<br><br><b>1. Siklus A (Kolam A01)</b><br>DOC: 28 hari<br>Biomassa Estimasi: 1,080 kg<br>Plasma: Budi<br><br><b>2. Siklus B (Kolam A02)</b><br>DOC: 15 hari<br>Biomassa Estimasi: 650 kg<br>Plasma: Sita<br><br><b>3. Siklus C (Kolam B01)</b><br>DOC: 5 hari<br>Biomassa Estimasi: 120 kg<br>Plasma: Budi", type: 'bot', delay: 2000 },
    { text: "Apakah Anda ingin membuka siklus baru? Ketik 'ya' atau 'tidak'.", type: 'bot', delay: 1500 },
    { text: "ya", type: 'user', delay: 1000 },
    { text: "Silakan pilih plasma yang akan mengelola siklus baru:<br>1. Budi<br>2. Sita<br>3. Doni", type: 'bot', delay: 1500 },
    { text: "1", type: 'user', delay: 1000 },
    { text: "Baik, siklus akan dikelola oleh **Budi**. Silakan input detail siklus dengan format:<br><b>Kolam, Jumlah Tebar (ekor), DOC (hari)</b><br><br>Contoh:<br>A03, 95000, 1", type: 'bot', delay: 2000 },
    { text: "A03, 95000, 1", type: 'user', delay: 2000 },
    { text: "✅ Siklus baru untuk Kolam A03 dengan tebar 95.000 ekor berhasil didaftarkan. Siklus ini akan dikelola oleh **Budi**.<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2500 },
    { text: "0", type: 'user', delay: 1000 },

    // Back to Main Menu
    { text: mainMenu, type: 'bot', delay: 1500 },
    // Flow 3: Input Sampling Mingguan
    { text: "3", type: 'user', delay: 1500 },
    { text: "Baik, silakan input data sampling mingguan untuk kolam A01 dengan format:<br><b>ABW (gram), Jumlah Sampel, Catatan</b><br><br>Contoh:<br>12.0, 100, Pakan naik signifikan", type: 'bot', delay: 2000 },
    { text: "12.0, 100, Pakan naik signifikan", type: 'user', delay: 2000 },
    { text: "✅ Laporan sampling berhasil disimpan.<br>ADG: 0.71 g/hari<br>Biomassa Estimasi: 1,080 kg<br><br>Notifikasi update feeding plan dikirim ke Farm Manager.<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2500 },
    { text: "0", type: 'user', delay: 1000 },

    // Back to Main Menu
    { text: mainMenu, type: 'bot', delay: 1500 },
    // Flow 4: Rekap Data Historis Siklus
    { text: "4", type: 'user', delay: 1500 },
    { text: "Berikut rekap data historis dari siklus sebelumnya:<br><br><b>Siklus #1 (Kolam A01)</b><br>Tebar: 100.000 ekor<br>Panen: 1.500 kg<br>FCR: 1.2<br>SR: 90%<br><br><b>Siklus #2 (Kolam A02)</b><br>Tebar: 80.000 ekor<br>Panen: 1.100 kg<br>FCR: 1.3<br>SR: 92%<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2000 },
    { text: "0", type: 'user', delay: 1000 },

    // Back to Main Menu
    { text: mainMenu, type: 'bot', delay: 1500 },
    // Flow 5: Tutup Siklus
    { text: "5", type: 'user', delay: 1500 },
    { text: "Anda akan menutup siklus. Mohon input data panen:<br><b>Total Panen (kg), Size (gr), Catatan</b><br>Contoh: 1200, 18, Panen parsial", type: 'bot', delay: 2000 },
    { text: "1550, 20, Panen total, FCR 1.2", type: 'user', delay: 3000 },
    { text: "✅ Data panen berhasil disimpan. Ringkasan siklus dikirim ke manajer. Terima kasih!<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2000 },
    { text: "0", type: 'user', delay: 1000 },

    // Back to Main Menu
    { text: mainMenu, type: 'bot', delay: 1500 },
    // Flow 6: Tanya Tambaksmart
    { text: "6", type: 'user', delay: 1500 },
    { text: "Halo, saya Tambaksmart, asisten virtual Anda. Ada yang bisa saya bantu terkait budidaya tambak Anda?", type: 'bot', delay: 2000 },
    { text: "Bagaimana cara mengatasi lumut di kolam?", type: 'user', delay: 2000 },
    { text: "Untuk mengatasi lumut di kolam, Anda bisa:<br>1. Mengurangi intensitas cahaya matahari.<br>2. Mengatur kepadatan tebar benur.<br>3. Menggunakan bahan kimia yang dianjurkan (misalnya, klorin dengan dosis tertentu) setelah berkonsultasi dengan ahli.<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 2500 },
    { text: "0", type: 'user', delay: 1000 },

    // Final message to loop the conversation
    { text: "Sampai jumpa di siklus berikutnya!", type: 'bot', delay: 1000 }
  ];

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const playConversation = () => {
    if (currentMessageIndex >= supervisorJourneyFlow.length) {
      setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 5000);
      return;
    }

    const currentMessage = supervisorJourneyFlow[currentMessageIndex];
    setTimeout(() => {
      addMessage(currentMessage);
      setCurrentMessageIndex(prev => prev + 1);
    }, currentMessage.delay || 1500);
  };

  useEffect(() => {
    playConversation();
  }, [currentMessageIndex]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">Demo WhatsApp Bot</h1>
            <p className="text-muted-foreground">Simulasi interaksi supervisor dengan Tambakflow</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="max-w-md mx-auto">
          <div className="bg-background rounded-3xl shadow-ocean overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-ocean text-primary-foreground p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">T</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Tambakflow</h3>
                  <p className="text-xs text-accent-light">Bot Supervisor</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={chatBodyRef}
              className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/10"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed animate-in slide-in-from-bottom-2 duration-500 ${
                    message.type === 'bot'
                      ? 'bg-success/20 text-foreground self-start'
                      : 'bg-primary text-primary-foreground self-end ml-auto'
                  }`}
                  style={{
                    alignSelf: message.type === 'bot' ? 'flex-start' : 'flex-end'
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: message.text }} />
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-muted/30 flex gap-2">
              <input
                type="text"
                placeholder="Ketik pesan..."
                disabled
                className="flex-1 p-3 rounded-full border bg-background text-foreground disabled:opacity-50"
              />
              <Button 
                size="icon" 
                variant="default"
                disabled
                className="rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Ini adalah demo otomatis yang menunjukkan alur kerja supervisor dengan Tambakflow bot.
              Percakapan akan berulang setiap 5 detik setelah selesai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;