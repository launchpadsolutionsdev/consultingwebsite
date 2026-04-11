export default function PrivacyPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A2540] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#6B7C93] text-lg">Last updated: April 9, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* Privacy Policy */}
            <div>
              <p className="text-lg text-[#425466] leading-relaxed mb-8">
                Launchpad Solutions Inc. is committed to protecting the privacy and confidentiality of all individuals and organizations we work with, including donors, raffle participants, and nonprofit clients.
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">1. Information We Collect</h2>
              <p className="text-[#425466] leading-relaxed">
                We may collect personal information such as names, email addresses, phone numbers, donation history, and payment information when you engage with our services.
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">2. Use of Information</h2>
              <p className="text-[#425466] leading-relaxed mb-3">We use collected data to:</p>
              <ul className="list-disc pl-6 text-[#425466] space-y-2">
                <li>Administer and operate raffle programs</li>
                <li>Provide customer support</li>
                <li>Send updates and communications</li>
                <li>Improve our services</li>
              </ul>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">3. Donor Confidentiality</h2>
              <p className="text-[#425466] leading-relaxed">
                Donor names, contact information, and donation details are never sold, rented, or shared with third parties without consent. We uphold a strict confidentiality policy in all donor-related interactions.
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">4. Data Security</h2>
              <p className="text-[#425466] leading-relaxed">
                We implement industry-standard safeguards to protect all collected information. Access to donor data is restricted to authorized personnel only, and our systems are regularly monitored for vulnerabilities.
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">5. Third-Party Services</h2>
              <p className="text-[#425466] leading-relaxed">
                We may use third-party platforms for payment processing, email marketing, or hosting. These services are vetted for security and privacy compliance.
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">6. Your Rights</h2>
              <p className="text-[#425466] leading-relaxed">
                You may request to view, correct, or delete your personal information at any time by contacting us at{' '}
                <a href="mailto:info@launchpadsolutions.ca" className="text-[#0570DE] hover:underline">
                  info@launchpadsolutions.ca
                </a>
              </p>

              <h2 className="text-xl font-bold text-[#0A2540] mt-8 mb-3">7. Updates to This Policy</h2>
              <p className="text-[#425466] leading-relaxed">
                Our privacy policy may be updated periodically. All changes will be posted on this page with an updated effective date.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-[#E3E8EE]" />

            {/* Accessibility Statement */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Accessibility Statement</h2>
              <p className="text-sm text-[#6B7C93] mb-6">This statement was last updated on April 9, 2025.</p>

              <div className="space-y-5 text-[#425466] leading-relaxed">
                <p>
                  We at Launchpad Solutions Inc. are working to make our site, www.launchpadsolutions.ca, accessible to people with disabilities.
                </p>
                <p>
                  We are committed to ensuring that all users, regardless of ability, can access the information and services we provide. Our ongoing efforts aim to improve accessibility and usability based on feedback, best practices, and recognized accessibility standards.
                </p>
                <p>
                  Launchpad Solutions Inc. is committed to providing a website experience that is accessible and inclusive for everyone, including individuals with disabilities. We strive to meet or exceed the standards outlined in the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, and we regularly review our digital content to ensure usability for all visitors. Our site is designed with accessibility in mind, including features like clear contrast, screen reader compatibility, and keyboard-friendly navigation.
                </p>
                <p>
                  While some content may not yet be fully optimized, we are actively working to identify and address any accessibility barriers. We welcome feedback from users and are happy to provide support or alternative formats upon request. If you encounter any issues accessing our website or need assistance, please contact us at{' '}
                  <a href="mailto:hello@launchpadsolutions.ca" className="text-[#0570DE] hover:underline">
                    hello@launchpadsolutions.ca
                  </a>{' '}
                  or{' '}
                  <a href="tel:+18076304698" className="text-[#0570DE] hover:underline">
                    1-807-630-4698
                  </a>
                  . Your feedback helps us continue to improve and ensure an inclusive experience for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
