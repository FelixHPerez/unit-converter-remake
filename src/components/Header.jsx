function Header({ amount, setAmount }) {
  return (
    <header className="bg-header-back p-4 text-center space-y-6 lg:space-y-10 lg:py-10 transition-[margin,_padding]">
      <h1 className="font-black text-2xl lg:text-5xl transition-[font-size]">
        Metric / Imperial Unit Conversion
      </h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-transparent border border-category-title text-4xl font-semibold w-2/4 max-w-[200px] text-center rounded-md p-4 lg:text-5xl lg:py-6 transition-[font-size,_padding]"
      />
    </header>
  );
}
export default Header;
