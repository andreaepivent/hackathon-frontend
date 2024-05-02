function Trends() {
  return (
    <div
      id="trends"
      className="h-full w-4/12 border-l border-[#2f3943] text-base p-4"
    >
      <h1 className="font-bold mb-4">Trends</h1>

      <div className="bg-[#1d2732] rounded-md text-sm flex flex-col">
        <div className="p-3 rounded-t-md cursor-pointer hover:bg-[#283444]">
          <p className="font-bold mb-2">#hackatweet</p>
          <p className="text-xs text-[#6a7783]">2 tweets</p>
        </div>
        <div className="p-3 cursor-pointer hover:bg-[#283444]">
          <p className="font-bold mb-2">#feminism</p>
          <p className="text-xs text-[#6a7783]">5 tweets</p>
        </div>
        <div className="p-3 rounded-b-md cursor-pointer hover:bg-[#283444]">
          <p className="font-bold mb-2">#tech</p>
          <p className="text-xs text-[#6a7783]">1 tweet</p>
        </div>
      </div>
    </div>
  );
}

export default Trends;
