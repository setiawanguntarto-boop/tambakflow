const PhChart = () => {
  const data = [
    { day: 38, ph: 8.1, color: "bg-info" },
    { day: 39, ph: 8.0, color: "bg-info" },
    { day: 40, ph: 8.2, color: "bg-info" },
    { day: 41, ph: 7.9, color: "bg-info" },
    { day: 42, ph: 6.9, color: "bg-destructive", isAlert: true }
  ];

  // Calculate height based on pH scale (6.0 - 9.0)
  const getHeight = (ph: number) => {
    const minPh = 6.0;
    const maxPh = 9.0;
    return ((ph - minPh) / (maxPh - minPh)) * 100;
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-foreground mb-4">
        Grafik Fluktuasi pH Pagi (5 Hari Terakhir)
      </h3>

      <div className="w-full h-72 flex items-end space-x-4 border-l border-b border-border p-4 relative">
        {/* Y-Axis Labels */}
        <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground py-2">
          <span>9.0</span>
          <span>8.5</span>
          <span>8.0</span>
          <span>7.5</span>
          <span>7.0</span>
          <span>6.5</span>
          <span>6.0</span>
        </div>

        {/* Reference Lines */}
        <div className="absolute left-0 w-full border-t border-dashed border-success" style={{ bottom: "83.33%" }}>
          <span className="absolute -right-16 text-xs text-success bg-card px-2 rounded">
            Batas Atas (8.5)
          </span>
        </div>
        <div className="absolute left-0 w-full border-t border-dashed border-destructive" style={{ bottom: "50%" }}>
          <span className="absolute -right-16 text-xs text-destructive bg-card px-2 rounded">
            Batas Bawah (7.5)
          </span>
        </div>

        {/* Bar Data */}
        {data.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`mx-auto w-1/2 ${item.color} rounded-t transition-all duration-500 ${
                item.isAlert ? "animate-pulse" : ""
              }`}
              style={{ height: `${getHeight(item.ph)}%` }}
            />
            <p className={`text-xs mt-2 ${item.isAlert ? "font-bold text-destructive" : ""}`}>
              {item.day}
            </p>
            <p className={`text-xs font-bold ${item.isAlert ? "text-destructive" : ""}`}>
              {item.ph}
            </p>
          </div>
        ))}

        <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-semibold">
          Hari Pemeliharaan (DOC)
        </p>
      </div>
    </div>
  );
};

export default PhChart;