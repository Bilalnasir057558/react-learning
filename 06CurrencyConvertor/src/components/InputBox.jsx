import React, {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  currencySelect = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

    const inputElementId = useId();

  return (
    <div className={`flex bg-white p-3 rounded-xl text-sm ${className}`}>
      <div className="w-1/2">

        <label 
        htmlFor={inputElementId}
        className="text-black font-bold mb-2 inline-block">{label}
        </label>
        <input
         id={inputElementId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-700 font-bold mb-2 w-full">Currency</p>
        <select 
        className="rounded-xl px-0 py-2 bg-gray-100 cursor-pointer outline-none" 
        disabled={currencyDisable}
        value={currencySelect}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
        >
            
            {currencyOptions.map((currency) => 
                <option key={currency} value={currency}>
                    {currency}
                </option>
            )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
