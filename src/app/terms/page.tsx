export default function TermsPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A2540] mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-[#6B7C93] text-lg">Last updated: April 9, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* Legal Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">A Legal Disclaimer</h2>
              <p className="text-[#425466] leading-relaxed">
                Launchpad Solutions Inc. (&ldquo;Launchpad&rdquo;) provides fundraising and raffle management services to registered nonprofit organizations. All information provided on this website is for general informational purposes only and does not constitute legal, financial, or professional advice. While we strive to keep the information accurate and up to date, Launchpad makes no representations or warranties of any kind regarding the completeness, accuracy, reliability, or availability of the website or any information, products, services, or graphics contained herein. Any reliance you place on such information is strictly at your own risk. Launchpad is not responsible for the actions, terms, or conduct of third-party organizations we serve or are affiliated with. Clients are solely responsible for compliance with all applicable laws and regulations in their respective jurisdictions.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-[#E3E8EE]" />

            {/* Terms and Conditions */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Terms and Conditions of Use</h2>
              <p className="text-[#425466] leading-relaxed mb-8">
                Welcome to Launchpad Solutions Inc. (&ldquo;Launchpad&rdquo;). By accessing or using our website, services, or software, you agree to be bound by the following terms and conditions.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">1. Eligibility</h3>
              <p className="text-[#425466] leading-relaxed">
                You must be at least 18 years old and legally capable of entering into binding contracts to use our services.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">2. Use of Services</h3>
              <p className="text-[#425466] leading-relaxed">
                Launchpad provides digital tools and services for the management of charitable raffles and fundraising initiatives. Use of our services must comply with all applicable local, provincial, and federal laws.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">3. Intellectual Property</h3>
              <p className="text-[#425466] leading-relaxed">
                All content on this website, including logos, branding, copy, and technology, is the property of Launchpad unless otherwise stated. Unauthorized use is prohibited.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">4. Limitation of Liability</h3>
              <p className="text-[#425466] leading-relaxed">
                Launchpad is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to lost data, lost revenue, or reputational harm.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">5. Termination</h3>
              <p className="text-[#425466] leading-relaxed">
                We reserve the right to terminate or suspend access to our services for any reason, including breach of these terms.
              </p>

              <h3 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">6. Changes to Terms</h3>
              <p className="text-[#425466] leading-relaxed">
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
