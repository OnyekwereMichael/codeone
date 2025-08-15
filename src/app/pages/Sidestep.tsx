export default function SideSteps() {
  return (
    <div className="relative  flex items-center mt-5">
      {/* Curved background */}
      <div className=" bg-white shadow-inner [clip-path:ellipse(50%_80%_at_0%_50%)]" />

      {/* Steps at extreme left */}
      <div className=" flex flex-col gap-1">
        <div className="w-[110px] h-[25px] border-t-2 border-r-2 border-b-2 border-l-[0] border-[#2ea6b6] rounded-full" />
        <div className="w-[90px] h-[23px] border-t-2 border-r-2 border-b-2 border-l-[0] border-[#2ea6b6] rounded-full" />
        <div className="w-[100px] h-[22px] border-t-2 border-r-2 border-b-2 border-l-[0] border-[#2ea6b6] rounded-full" />
        <div className="w-[80px] h-[20px] border-t-2 border-r-2 border-b-2 border-l-[0] border-[#2ea6b6] rounded-full" />
      </div>
    </div>
  );
}
