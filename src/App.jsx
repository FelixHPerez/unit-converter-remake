import { useState } from "react";
import { options } from "./options";
import Header from "./components/Header";
import UnitCategory from "./components/UnitCategory";

function App() {
  const [amount, setAmount] = useState(1);

  return (
    <>
      <Header amount={amount} setAmount={setAmount} />
      <main className="bg-main-back px-6 py-4 space-y-4">
        {options.map((category) => (
          <UnitCategory
            key={category.type}
            category={category}
            amount={amount}
          />
        ))}
      </main>
    </>
  );
}
export default App;
