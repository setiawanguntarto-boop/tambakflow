const LogbookTable = () => {
  const logs = [
    {
      date: "27 Sep, 08:05",
      doc: 42,
      reporter: "Teknisi",
      ph: 6.9,
      feed: 18,
      salinity: 25,
      clarity: 30,
      notes: "Nafsu makan udang sedikit menurun, air agak keruh.",
      isAlert: true
    },
    {
      date: "26 Sep, 08:00",
      doc: 41,
      reporter: "Teknisi",
      ph: 7.9,
      feed: 17.5,
      salinity: 25,
      clarity: 35,
      notes: "",
      isAlert: false
    },
    {
      date: "25 Sep, 07:58",
      doc: 40,
      reporter: "Teknisi",
      ph: 8.2,
      feed: 17.0,
      salinity: 26,
      clarity: 35,
      notes: "",
      isAlert: false
    },
    {
      date: "24 Sep, 08:02",
      doc: 39,
      reporter: "Teknisi",
      ph: 8.0,
      feed: 16.5,
      salinity: 26,
      clarity: 38,
      notes: "",
      isAlert: false
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-foreground">
        Logbook Digital (Data dari WhatsApp)
      </h3>

      <div className="bg-card rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted">
              <tr className="border-b border-border">
                <th className="px-6 py-3 font-semibold text-foreground">Waktu (DOC)</th>
                <th className="px-6 py-3 font-semibold text-foreground">Pelapor</th>
                <th className="px-6 py-3 font-semibold text-foreground">Metrik & Catatan</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr
                  key={index}
                  className={`border-b border-border transition-colors ${
                    log.isAlert ? "bg-destructive/10" : "bg-card hover:bg-accent/50"
                  }`}
                >
                  <td className={`px-6 py-4 align-top font-medium ${
                    log.isAlert ? "text-destructive" : "text-foreground"
                  }`}>
                    {log.date} ({log.doc})
                  </td>
                  <td className={`px-6 py-4 align-top ${
                    log.isAlert ? "text-destructive" : "text-foreground"
                  }`}>
                    {log.reporter}
                  </td>
                  <td className={`px-6 py-4 ${
                    log.isAlert ? "text-destructive" : "text-foreground"
                  }`}>
                    <p className="mb-1">
                      <span className="font-semibold">pH:</span>{" "}
                      <span className={`${
                        log.isAlert ? "text-xl font-extrabold text-destructive" : ""
                      }`}>
                        {log.ph}
                      </span>{" "}
                      | <span className="font-semibold">Pakan:</span> {log.feed} kg{" "}
                      | <span className="font-semibold">Salinitas:</span> {log.salinity} ppt{" "}
                      | <span className="font-semibold">Kecerahan:</span> {log.clarity} cm
                    </p>
                    {log.notes && (
                      <p className="text-xs italic mt-1 pl-2 border-l-2 border-destructive/30">
                        Catatan: {log.notes}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LogbookTable;