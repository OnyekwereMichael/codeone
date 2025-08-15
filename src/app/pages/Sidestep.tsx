export default function SideSteps() {
  const steps = [
    { width: 110, height: 22 },
    { width: 90, height: 20 },
    { width: 100, height: 18 },
    { width: 80, height: 16 },
  ];

  return (
    <div className="relative flex items-center mt-5">
      {/* Curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white shadow-inner [clip-path:ellipse(60%_90%_at_0%_50%)]" />

      {/* Steps at extreme left */}
      <div className="relative z-10 flex flex-col gap-2">
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{ width: step.width, height: step.height }}
            className="border-2 border-blue-500 border-l-0 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/20 shadow-sm hover:shadow-md transition-shadow duration-200"
          />
        ))}
      </div>
    </div>
  );
}
