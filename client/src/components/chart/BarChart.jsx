import React from "react";
import Input from "../layout/Input";
import { useState } from "react";
const BarChart = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const showIncomeForm = () => {
    setIsButtonClicked(!isButtonClicked);
    return;
  };
  return (
    <div>
      <button
        className="text-secondary absolute right-3 top-3 font-bold border-2 border-tertiary py-2 px-2 shadow-2xl rounded-2xl"
        onClick={showIncomeForm}
      >
        + Add Income
      </button>
      {isButtonClicked ? <IncomeForm /> : null}
    </div>
  );
};

export default BarChart;

const IncomeForm = () => {
  return (
    <div className="px-10 py-10 border-2 w-[600px] rounded-2xl border-tertiary">
      <form action="">
        <Input
          label={"icon"}
          placeholder="12000"
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
    </div>
  );
};
