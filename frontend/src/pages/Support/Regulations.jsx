// src/pages/Support/Regulations.jsx
import React from "react";

export default function Regulations() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 font-heading">Regulations</h1>
      <p className="text-sm text-gray-500 mb-2">Home &gt; Regulations</p>
      <p className="text-sm text-gray-500 mb-6">Last updated: April 14, 2025</p>

      <p className="mb-6">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> is committed to operating in
        compliance with applicable financial regulations and laws. This page
        provides information about our regulatory status and the frameworks
        under which we operate.
      </p>

      <p className="mb-6">
        Trading in financial instruments involves significant risk. Please
        ensure you fully understand the risks involved before trading and seek
        independent advice if necessary.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Regulatory Status</h2>
      <p className="mb-4">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> is registered and authorized to
        provide financial services. Our operations are supervised by the
        following regulatory authorities:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Financial Conduct Authority (FCA) — United Kingdom
          <span className="block text-gray-600">Registration Number: 123456</span>
        </li>
        <li>
          Cyprus Securities and Exchange Commission (CySEC) — European Union
          <span className="block text-gray-600">License Number: CIF 789/12</span>
        </li>
        <li>
          Australian Securities and Investments Commission (ASIC) — Australia
          <span className="block text-gray-600">AFSL Number: 987654</span>
        </li>
      </ul>
      <p className="mb-6">
        These regulatory bodies ensure that we maintain high standards of
        business conduct, have adequate financial resources, and implement
        appropriate risk management procedures.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Client Money Protection</h2>
      <p className="mb-4">
        In accordance with regulatory requirements,{" "}
        <span className="font-semibold">CoinflowAnalysis Ltd</span> maintains client funds in
        segregated accounts with reputable banking institutions. This means that
        client money is kept separate from the company’s operational funds.
      </p>
      <p className="mb-4">Depending on your country of residence, you may be covered by:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Financial Services Compensation Scheme (FSCS) — United Kingdom (up to £85,000)</li>
        <li>Investor Compensation Fund (ICF) — European Union (up to €20,000)</li>
        <li>Australian Financial Claims Scheme — Australia (per Australian regulations)</li>
      </ul>
      <p className="mb-6">
        Compensation schemes do not cover investment losses due to market
        fluctuations or poor investment decisions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Anti-Money Laundering (AML) Compliance
      </h2>
      <p className="mb-4">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> is committed to preventing money
        laundering and terrorist financing. We have implemented robust AML
        procedures in compliance with international standards and local
        regulations. As part of our AML program, we:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Verify the identity of all clients (Know Your Customer — KYC)</li>
        <li>Monitor transactions for suspicious activity</li>
        <li>Report suspicious transactions to relevant authorities</li>
        <li>Maintain records of transactions and client identification</li>
        <li>Conduct regular risk assessments</li>
        <li>Provide staff training on AML procedures</li>
      </ul>
      <p className="mb-6">
        Clients must provide identification documents and source-of-funds
        information, such as government-issued ID, proof of address, and
        source-of-funds documentation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Market Conduct Rules</h2>
      <p className="mb-4">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> adheres to strict market conduct
        rules designed to ensure fair and transparent trading. These rules
        prohibit:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Market manipulation</li>
        <li>Insider trading</li>
        <li>Front-running</li>
        <li>Wash trading</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Client Categorization</h2>
      <p className="mb-4">
        In accordance with regulatory requirements,{" "}
        <span className="font-semibold">CoinflowAnalysis Ltd</span> categorizes clients as:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Retail Clients — highest level of regulatory protection</li>
        <li>Professional Clients — lower protection, additional flexibility</li>
        <li>Eligible Counterparties — institutional level protection</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Best Execution Policy</h2>
      <p className="mb-6">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> is committed to providing best
        execution for client orders. We consider price, costs, speed, likelihood
        of execution/settlement, order size/nature, and market impact. A full
        policy is available upon request.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conflicts of Interest</h2>
      <p className="mb-4">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> maintains a Conflicts of Interest
        Policy to identify, prevent, and manage potential conflicts that may
        arise between us, our employees, and clients. Measures include:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Information barriers (Chinese walls)</li>
        <li>Separate supervision of employees</li>
        <li>Restrictions on employees’ personal trading</li>
        <li>Disclosure of potential conflicts to clients</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Complaints Handling</h2>
      <p className="mb-6">
        If you are dissatisfied with our services, you can submit a complaint:
        <br />
        Email: <a className="text-blue-600" href="mailto:complaints@coinflowanalysis.com">complaints@coinflowanalysis.com</a>
        <br />
        Phone: +1 (202) 345-9999
        <br />
        Mail: Complaints Department,{" "}
        <span className="font-semibold">CoinflowAnalysis Ltd</span>, 350 Fifth Avenue, New York, NY
        10118, USA
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Reporting</h2>
      <p className="mb-6">
        <span className="font-semibold">CoinflowAnalysis Ltd</span> reports transactions, positions,
        and suspicious activity to regulatory authorities as required by law.
        To comply, we may collect and report information about you and your
        transactions (e.g., national ID/passport numbers) in accordance with
        applicable regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
      <p>
        Email:{" "}
        <a className="text-blue-600" href="mailto:compliance@coinflowanalysis.com">
          compliance@coinflowanalysis.com
        </a>
        <br />
        Phone: +1 (202) 345-9999
        <br />
        Mail: Compliance Department,{" "}
        <span className="font-semibold">CoinflowAnalysis Ltd</span>, 350 Fifth Avenue, New York, NY
        10118, USA
      </p>
    </div>
  );
}
