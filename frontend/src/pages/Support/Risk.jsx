// src/pages/Support/Risk.jsx
import React from "react";

export default function Risk() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Risk Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-8">
          Home / Risk Disclaimer
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: April 14, 2025
        </p>

        <section className="space-y-6">
          <p>
            Trading in financial instruments carries a high level of risk to your capital
            with the possibility of losing more than your initial investment. Trading in
            financial instruments may not be suitable for all investors, and is only
            intended for people over 18. Please ensure that you are fully aware of the
            risks involved and, if necessary, seek independent financial advice.
          </p>
          <p>
            The information on this website is not directed at residents of countries
            where its distribution, or use by any person, would be contrary to local law
            or regulation.
          </p>

          <h2 className="text-2xl font-semibold">General Risk Warning</h2>
          <p>
            The value of investments can go down as well as up, and you may get back less
            than your original investment. Past performance is not a reliable indicator of
            future results. Tax treatment depends on individual circumstances and may be
            subject to change in the future.
          </p>
          <p>
            CoinFlowAnalysis provides this website for information purposes only. We do
            not provide investment advice, and nothing on this website should be construed
            as investment advice. The information provided is not intended for
            distribution to, or use by, any person in any country or jurisdiction where
            such distribution or use would be contrary to local law or regulation.
          </p>
          <p>
            Before deciding to trade, you should carefully consider your investment
            objectives, level of experience, and risk appetite. You could sustain a loss
            of some or all of your initial investment and should not invest money you
            cannot afford to lose.
          </p>

          <h2 className="text-2xl font-semibold">Forex Trading Risks</h2>
          <p>
            Trading foreign exchange on margin carries a high level of risk. The high
            degree of leverage can work against you as well as for you. Consider your
            investment objectives, experience, and risk appetite carefully.
          </p>
          <ul className="list-disc list-inside">
            <li>Economic indicators and events</li>
            <li>Political events and policy changes</li>
            <li>Market sentiment and speculation</li>
            <li>Interest rate changes and monetary policy</li>
          </ul>

          <h2 className="text-2xl font-semibold">Cryptocurrency CFD Risks</h2>
          <p>
            Cryptocurrency CFDs are complex instruments with high risk due to leverage and
            volatility. Ensure you understand how they work before trading.
          </p>
          <ul className="list-disc list-inside">
            <li>Regulatory changes and government policies</li>
            <li>Technological advancements or failures</li>
            <li>Market sentiment and media coverage</li>
            <li>Security breaches and hacking incidents</li>
            <li>Limited liquidity in certain markets</li>
          </ul>

          <h2 className="text-2xl font-semibold">Share CFD Risks</h2>
          <p>
            Share CFDs involve high risk due to leverage. You do not own the underlying
            shares. Factors include market volatility, company performance, industry
            trends, economic events, and interest rate changes.
          </p>

          <h2 className="text-2xl font-semibold">Commodities Trading Risks</h2>
          <p>
            Commodities trading involves significant risk. Volatility may be driven by:
          </p>
          <ul className="list-disc list-inside">
            <li>Supply and demand imbalances</li>
            <li>Weather conditions and natural disasters</li>
            <li>Geopolitical events</li>
            <li>Changes in production costs</li>
            <li>Currency fluctuations</li>
            <li>Government regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold">Leverage and Margin Risks</h2>
          <p>
            Leverage magnifies both potential profits and losses. A small price movement
            can have a large impact on your capital. You may be required to deposit
            additional funds at short notice or risk having your positions liquidated.
          </p>

          <h2 className="text-2xl font-semibold">Technical Risks</h2>
          <p>
            CoinFlowAnalysis is not responsible for technical failures, malfunctions, or
            outages. These may include internet issues, software failures, hardware
            malfunctions, or security breaches.
          </p>

          <h2 className="text-2xl font-semibold">No Guarantee of Profit</h2>
          <p>
            We do not guarantee profits or protection from losses. Trading involves
            substantial risk and past performance is not indicative of future results.
          </p>

          <h2 className="text-2xl font-semibold">Acknowledgment of Risk</h2>
          <p>
            By using CoinFlowAnalysis services, you acknowledge that you understand and
            accept the risks of trading. Do not trade with funds you cannot afford to lose.
          </p>

          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>
            If you have questions about this Risk Disclaimer, contact us:
            <br />
            <p>
        Email:{" "}
        <a
          href="mailto:privacy@coinflowanalysis.com"
          className="text-blue-600 underline"
        >
          privacy@coinflowanalysis.com
        </a>
        </p>
            <br />
            <strong>Phone:</strong> +1 (202) 345-9999
            <br />
            <strong>Mail:</strong> 350 Fifth Avenue, New York, NY 10118, USA
          </p>
        </section>
      </div>
    </div>
  );
}
