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

      <div className="w-full max-w-sm mx-auto h-[700px] bg-card rounded-[2.5rem] p-4 border-[10px] border-foreground shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-muted p-3 flex items-center shadow-md flex-shrink-0 -mx-4 -mt-4 rounded-t-[2rem]">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          <div className="w-10 h-10 rounded-full bg-primary border-2 border-white mx-3 flex items-center justify-center font-bold text-primary-foreground text-lg">
            Tf
          </div>
          <div>
            <div className="font-bold text-foreground">Tambakflow</div>
            <div className="text-success text-xs font-semibold">online</div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 my-2 -mx-2"
          style={{ backgroundColor: "hsl(var(--whatsapp-bg))" }}
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
        <div className="p-2 bg-muted flex items-center flex-shrink-0 -mx-4 -mb-4 rounded-b-[2rem]">
          <Smile className="w-6 h-6 text-muted-foreground" />
          <input
            type="text"
            placeholder="Ketik pesan..."
            className="flex-1 mx-2 px-4 py-2 bg-card border border-border rounded-full text-sm"
            disabled
          />
          <div className="w-8 h-8 rounded-full bg-whatsapp-green text-white flex items-center justify-center">
            <Send className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;