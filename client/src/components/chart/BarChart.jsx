import React, { useState } from "react";
import Input from "../layout/Input";
import { TfiGallery } from "react-icons/tfi";
import EmojiPicker from "emoji-picker-react";
const BarChart = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const showIncomeForm = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="relative">
      <button
        className="text-secondary font-bold border-2 border-tertiary py-2 px-2 shadow-2xl rounded-2xl"
        onClick={showIncomeForm}
      >
        + Add Income
      </button>

      {isButtonClicked && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <IncomeForm onClose={() => setIsButtonClicked(false)} />
        </div>
      )}
    </div>
  );
};

export default BarChart;
const IncomeForm = ({ onClose }) => {
  const [incomeSource, setIncomeSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();
  const [showPicker, setShowPicker] = useState("false");
  const [chooseEmoji, setChooseEmoji] = useState(null);
  const handleEmojiClick = (emojiData) => {
    setChooseEmoji(emojiData.emoji);
    setShowPicker(false);
  };
  return (
    <div className="bg-primary-alt px-8 py-20 border-2 w-[550px] rounded-2xl border-tertiary relative shadow-2xl">
      <form className="flex flex-col justify-center content-center">
        <button
          className="text-tertiary text-2xl flex justify-center items-center gap-2.5 mb-6"
          type="button"
          onClick={() => setShowPicker(!showPicker)}
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} />
          <p className="text-xl text-secondary">
            {chooseEmoji || "Pick Emoji"}
          </p>
        </button>

        <Input
          value={incomeSource}
          label={"Income Source"}
          placeholder="Freelancer"
          type={"text"}
          onChange={(e) => setIncomeSource(e.target.value)}
        />
        <Input
          value={amount}
          label={"Amount"}
          placeholder="12000"
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          value={date}
          label={"Date"}
          placeholder="dd/mm/yy"
          type={"date"}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <button
            className="text-secondary font-bold border-2 border-tertiary py-2 px-4 rounded-2xl"
            type="submit"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
};
