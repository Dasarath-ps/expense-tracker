import React from "react";
import Input from "../layout/Input";
import { useState } from "react";
import { TfiGallery } from "react-icons/tfi";
const BarChart = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const showIncomeForm = () => {
    setIsButtonClicked(!isButtonClicked);
    return;
  };
  return (
    <div className="flex justify-center items-center h-screen">
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
    <div className="bg-primary-alt px-8 py-20 border-2 w-[550px] rounded-2xl border-tertiary relative">
      <form action="" className="">
        <div className="text-tertiary text-2xl flex justify-center items-center gap-2.5">
          <TfiGallery />
          <p className="text-xl text-secondary">Pick Icon</p>
        </div>
        <Input
          label={"Income Source"}
          placeholder="Freelancer"
          type={"text"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          label={"Amount"}
          placeholder="12000"
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          label={"Date"}
          placeholder="dd/mm/yy"
          type={"date"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="absolute right-5 bottom-5 text-secondary font-bold border-2 border-tertiary py-2 px-2 shadow-2xl rounded-2xl">
          Add Income
        </button>
      </form>
    </div>
  );
};
