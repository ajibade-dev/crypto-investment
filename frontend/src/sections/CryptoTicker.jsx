// CryptoTicker.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import FadeInMotion from "./FadeinMotion";

const CryptoTicker = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Refresh every 60 sec
    return () => clearInterval(interval);
  }, []);

  // Repeat coins to make it seamless
  const repeatedCoins = [...coins, ...coins];

  return (
    <FadeInMotion>
    <div className="overflow-hidden bg-gray-100 border-y border-gray-200">
      <div className="marquee-container whitespace-nowrap">
        <div className="animate-marquee flex w-max">
          {repeatedCoins.map((coin, index) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            return (
              <span
                key={coin.id + "-" + index}
                className="px-6 py-2 text-sm text-gray-800 flex-shrink-0"
              >
                <strong className="capitalize">{coin.name}</strong>{" "}
                ${coin.current_price.toLocaleString()}{" "}
                <span className={isPositive ? "text-green-500" : "text-red-500"}>
                  {isPositive ? "+" : ""}
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
    </FadeInMotion>
  );
};

export default CryptoTicker;
