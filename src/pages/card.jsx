function Card() {
  return (
    <div className="bg-primary rounded flex overflow-hidden flex-col gap-4 shadow cursor-pointer hover:shadow-lg">
      <img src={`/src/assets/Flag_of_Germany.png`} alt="" />
      <div className="flex flex-col gap-4 px-6 py-4">
        <h2 className="text-xl font-semibold">name</h2>
        <div className="space-y-2">
          <div className="flex gap-2">
            <p className="capitalize">population:</p>
            <span className="text-Text">population</span>
          </div>
          <div className="flex gap-2">
            <p className="capitalize">Region:</p>
            <span className="text-Text">region</span>
          </div>
          <div className="flex gap-2">
            <p className="capitalize">Capital:</p>
            <span className="text-Text">capital</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
