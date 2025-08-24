// src/pages/Support/Privacy.jsx
import React from "react";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2 font-heading">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: April 14, 2025</p>

      <p className="mb-6">
        This Privacy Policy describes how <strong>CoinFlowAnalysis Ltd</strong> ("we", "us", or
        "our") collects, uses, and discloses your personal information when you
        visit, use our services, or otherwise communicate with us
        (collectively, the "Services").
      </p>

      <p className="mb-6">
        We are committed to protecting your personal information and your right
        to privacy. If you have any questions or concerns about this privacy
        policy or our practices with regard to your personal information, please
        contact us at{" "}
        <a
          href="mailto:privacy@coinflowanalysis.com"
          className="text-blue-600 underline"
        >
          privacy@coinflowanalysis.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold font-heading mt-8 mb-4">Information We Collect</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Personal Information You Disclose to Us
      </h3>
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, participate in
        activities on the Services, or otherwise contact us.
      </p>
      <p className="mb-4">
        The personal information that we collect depends on the context of your
        interactions with us and the Services, the choices you make, and the
        products and features you use. This may include:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Name and contact data (email, phone number, address)</li>
        <li>Credentials (passwords, security questions)</li>
        <li>Payment information (credit card details, billing address)</li>
        <li>Identity verification information (government-issued ID, passport, driver’s license)</li>
        <li>Financial information (bank account details)</li>
        <li>Employment information (job title, employer, income)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Information Automatically Collected
      </h3>
      <p className="mb-6">
        We automatically collect certain information when you visit or use the
        Services. This may include device and usage information, IP address,
        browser type, operating system, language preferences, referring URLs,
        device name, country, location, and data about how and when you use our
        Services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Facilitate account creation and authentication</li>
        <li>Deliver services to the user</li>
        <li>Respond to user inquiries or offer support</li>
        <li>Send administrative information</li>
        <li>Send marketing and promotional communications</li>
        <li>Enforce our terms, conditions, and policies</li>
        <li>Respond to legal requests and prevent harm</li>
        <li>Other business purposes such as data analysis and improving our Services</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Will Your Information Be Shared With Anyone?
      </h2>
      <p className="mb-4">
        We may share or process your information based on consent, legitimate
        interests, performance of a contract, legal obligations, or vital
        interests.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
      <p className="mb-6">
        We may use cookies and similar tracking technologies to access or store
        information. This may include session cookies (expire when browser is
        closed) and persistent cookies (remain until deleted).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
      <p className="mb-6">
        We will only keep your personal information for as long as necessary to
        fulfill the purposes outlined in this policy, unless otherwise required
        by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Keep Your Information Safe</h2>
      <p className="mb-6">
        We use technical and organizational measures to protect your personal
        data, but no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
      <p className="mb-6">
        Depending on your location, you may have rights to request access,
        rectification, deletion, restriction, portability, or object to
        processing of your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Do-Not-Track Features</h2>
      <p className="mb-6">
        We currently do not respond to DNT signals as no uniform standard has
        been adopted.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update this policy from time to time. Updates will be posted on
        this page with a new “Revised” date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:privacy@coinflowanalysis.com"
          className="text-blue-600 underline"
        >
          privacy@coinflowanalysis.com
        </a>
        <br />
        Phone: +1 (202) 345-9999
        <br />
        Address: 350 Fifth Avenue, New York, NY 10118, USA
      </p>
    </div>
  );
}
