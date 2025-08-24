import React from 'react'


export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 font-heading">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">
        Home / Terms and Conditions
      </p>
      <p className="mb-6 text-gray-700">Last updated: April 14, 2025</p>

      <p className="mb-6">
        Please read these Terms and Conditions ("Terms") carefully before using
        the CoinFlowAnalysis website and trading platform operated by
        CoinFlowAnalysis Ltd.
      </p>

      <p className="mb-6">
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms. These Terms apply to all visitors,
        users, and others who access or use the Service.
      </p>

      <p className="mb-6">
        By accessing or using the Service, you agree to be bound by these Terms.
        If you disagree with any part of the terms, you may not access the
        Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Definitions</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Service</strong> refers to the CoinFlowAnalysis website and
          trading platform.
        </li>
        <li>
          <strong>Company</strong>, <strong>We</strong>, <strong>Us</strong>, or{" "}
          <strong>Our</strong> refers to CoinFlowAnalysis Ltd.
        </li>
        <li>
          <strong>You</strong> refers to the individual accessing or using the
          Service, or the company, or other legal entity on behalf of which
          such individual is accessing or using the Service.
        </li>
        <li>
          <strong>Account</strong> means a unique account created for You to
          access our Service or parts of our Service.
        </li>
        <li>
          <strong>Trading</strong> refers to the buying and selling of financial
          instruments through our platform.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Accounts</h2>
      <p className="mb-6">
        When you create an account with us, you must provide information that is
        accurate, complete, and current at all times. Failure to do so
        constitutes a breach of the Terms, which may result in immediate
        termination of your account.
      </p>
      <p className="mb-6">
        You are responsible for safeguarding your password and for any
        activities or actions under your password, whether with our Service or a
        third-party service. You agree not to disclose your password to any
        third party. Notify us immediately upon becoming aware of any breach of
        security or unauthorized use of your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Trading Risks</h2>
      <p className="mb-6">
        Trading in financial instruments involves significant risk and is not
        suitable for all investors. The high degree of leverage can work against
        you as well as for you. You may sustain a loss of some or all of your
        initial investment. Seek advice from an independent financial advisor if
        needed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Deposits and Withdrawals
      </h2>
      <p className="mb-6">
        We accept deposits and process withdrawals in various currencies and
        payment methods as specified on our platform. Withdrawals will only be
        processed to the same account from which the funds were deposited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
      <p className="mb-6">
        The Service and its original content, features, and functionality are
        the exclusive property of CoinFlowAnalysis Ltd and its licensors. The
        Service is protected by copyright, trademark, and other laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
      <p className="mb-6">
        We may terminate or suspend your account immediately, without prior
        notice or liability, for any reason whatsoever, including if you breach
        the Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Limitation of Liability
      </h2>
      <p className="mb-6">
        In no event shall CoinFlowAnalysis Ltd, nor its directors, employees, or
        affiliates, be liable for any indirect, incidental, special,
        consequential, or punitive damages resulting from your access or use of
        the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
      <p className="mb-6">
        We may update these Terms at our sole discretion. If we make material
        changes, we will notify you by posting a notice on our website or
        contacting you directly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us:
        <p>
        Email:{" "}
        <a
          href="mailto:privacy@coinflowanalysis.com"
          className="text-blue-600 underline"
        >
          privacy@coinflowanalysis.com
        </a>
        </p>
        📞 Phone: +1 (202) 345-9999
        <br />
        📍 Address: 350 Fifth Avenue, New York, NY 10118, USA
      </p>
    </div>
  );
}
