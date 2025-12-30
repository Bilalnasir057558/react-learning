import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
               label="From"
               amount={amount}
               currencyOptions={options}
               currencySelect={from}
               onAmountChange={(amount) => setAmount(amount)}
               onCurrencyChange={(currency) => {
                setFrom(currency)
                convert();
               }}
               />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-green-800 text-white px-4 py-1 font-bold cursor-pointer"
                onClick={swap}
              >
                Swap
              </button>

            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
               amount={convertedAmount}
               currencyOptions={options}
               currencySelect={to}
               onAmountChange={(amount) => setAmount(amount)}
               onCurrencyChange={(currency) => {
                setTo(currency)
                convert();
               }

               }
              />
               
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-bold cursor-pointer"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
