function UnitCategory({ category, amount }) {
  const {
    type,
    primaryUnit,
    secondaryUnit,
    formulaToSecondary,
    formulaToPrimary,
  } = category;

  return (
    <section className="bg-category-back text-center px-4 py-6 rounded-md space-y-2 w-full lg:w-3/4 mx-auto transition-[width]">
      <h2 className="text-category-title font-semibold text-lg lg:text-2xl transition-[font-size]">
        {type}
      </h2>
      <div className="px-2 lg:text-lg transition-[font-size]">
        <p className="">
          {amount ? amount : 0} {primaryUnit} ={" "}
          <span className="text-green-300">
            {(amount * formulaToSecondary).toFixed(2)}
          </span>{" "}
          {secondaryUnit}
        </p>
        <p className="">
          {amount ? amount : 0} {secondaryUnit} ={" "}
          <span className="text-green-300">
            {(amount * formulaToPrimary).toFixed(2)}
          </span>{" "}
          {primaryUnit}
        </p>
      </div>
    </section>
  );
}
export default UnitCategory;
