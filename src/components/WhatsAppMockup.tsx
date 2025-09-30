import { useState, useEffect } from "react";
import { ArrowLeft, Send, Smile } from "lucide-react";

const WhatsAppMockup = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    { type: "received", text: "Selamat pagi! Mau lapor untuk tambak mana?\n1. Tambak Mutiara - A1\n2. Jaya Makmur - A2\n3. Bintang Timur - B1", time: "08:01" },
    { type: "sent", text: "2", time: "08:01" },
    { type: "received", text: "Tambak A2. Silakan isi data:\n1. pH Pagi:\n2. Pakan (kg):\n3. Salinitas (ppt):\n4. Kecerahan (cm):\n5. Catatan:", time: "08:02" },
    { type: "sent", text: "1. 6.9\n2. 18\n3. 25\n4. 30\n5. Nafsu makan udang sedikit menurun, air agak keruh.", time: "08:05" },
    { type: "received", text: "Oke, data diterima. Terima kasih! Laporan untuk Jaya Makmur - A2 telah diperbarui di dasbor.", time: "08:06" }
  ];

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, messages.length]);

  return (
    <div className="bg-card rounded-2xl shadow-lg p-6 sticky top-8">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Sisi Teknisi Lapangan (Ponsel)</h2>
        <p className="text-sm text-muted-foreground">
          Teknisi melaporkan data harian untuk tambak <span className="font-bold text-destructive">Jaya Makmur - A2</span> via WhatsApp.
        </p>
      </div>

      <div className="w-full max-w-sm mx-auto h-[700px] bg-white rounded-[2.5rem] p-1 border-2 border-gray-800 shadow-[0_0_0_2px_#000,0_0_0_6px_#333,0_20px_40px_rgba(0,0,0,0.4)] flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #1f1f1f 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
        {/* Phone bezel and notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600 rounded-full z-20"></div>
        
        {/* Screen content */}
        <div className="bg-white rounded-[2.2rem] flex-1 flex flex-col overflow-hidden m-1">
        
        {/* Header */}
        <div className="bg-[#075E54] p-3 flex items-center shadow-md flex-shrink-0 rounded-t-[2rem]">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          <div className="w-10 h-10 rounded-full bg-primary border-2 border-white mx-3 flex items-center justify-center font-bold text-primary-foreground text-lg">
            Tf
          </div>
          <div>
            <div className="font-bold text-white">Tambakflow</div>
            <div className="text-success text-xs font-semibold">online</div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 my-2 -mx-2"
          style={{ 
            background: "linear-gradient(to bottom, #e5ddd5 0%, #d2d0ce 100%)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="self-center text-xs bg-info/20 text-info px-2 py-1 rounded-full shadow-sm">
            Hari ini
          </div>

          {messages.slice(0, currentMessageIndex).map((message, index) => (
            <div
              key={index}
              className={`max-w-[85%] p-2 rounded-lg text-sm animate-in slide-in-from-bottom-2 duration-500 ${
                message.type === "sent"
                  ? "bg-whatsapp-sent self-end"
                  : "bg-whatsapp-bubble self-start shadow-sm"
              }`}
            >
              <span className="break-words whitespace-pre-line">
                {message.text.includes("6.9") ? (
                  message.text.split("6.9").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && <span className="font-bold text-destructive">6.9</span>}
                    </span>
                  ))
                ) : message.text.includes("Jaya Makmur - A2") ? (
                  message.text.split("Jaya Makmur - A2").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && <span className="font-bold">Jaya Makmur - A2</span>}
                    </span>
                  ))
                ) : (
                  message.text
                )}
              </span>
              <div className="text-[0.65rem] text-muted-foreground mt-1 text-right">
                {message.time}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-[#f0f0f0] flex items-center flex-shrink-0 rounded-b-[2rem] border-t border-gray-200">
          <Smile className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Ketik pesan..."
            className="flex-1 mx-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm"
            disabled
          />
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
            <Send className="w-4 h-4" />
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;