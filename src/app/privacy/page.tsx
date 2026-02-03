export default function PrivacyPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-white">Privacy Policy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Launchpad Solutions Inc. is committed to protecting the privacy and confidentiality of all individuals and organizations we work with, including donors, raffle participants, and nonprofit clients.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We may collect personal information such as names, email addresses, phone numbers, donation history, and payment information when you engage with our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Use of Information</h2>
            <p className="text-gray-600 mb-4">We use collected data to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Administer and operate raffle programs</li>
              <li>Provide customer support</li>
              <li>Send updates and communications</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Donor Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              Donor names, contact information, and donation details are never sold, rented, or shared with third parties without consent. We uphold a strict confidentiality policy in all donor-related interactions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard safeguards to protect all collected information. Access to donor data is restricted to authorized personnel only, and our systems are regularly monitored for vulnerabilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party platforms for payment processing, email marketing, or hosting. These services are vetted for security and privacy compliance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You may request to view, correct, or delete your personal information at any time by contacting us at{' '}
              <a href="mailto:info@launchpadsolutions.ca" className="text-pink-600 hover:text-pink-700">
                info@launchpadsolutions.ca
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              Our privacy policy may be updated periodically. All changes will be posted on this page with an updated effective date.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
