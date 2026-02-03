export default function TermsPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-white">Terms and Conditions</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Launchpad Solutions Inc. (&ldquo;Launchpad&rdquo;). By accessing or using our website, services, or software, you agree to be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Eligibility</h2>
            <p className="text-gray-600 mb-6">
              You must be at least 18 years old and legally capable of entering into binding contracts to use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Use of Services</h2>
            <p className="text-gray-600 mb-6">
              Launchpad provides digital tools and services for the management of charitable raffles and fundraising initiatives. Use of our services must comply with all applicable local, provincial, and federal laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including logos, branding, copy, and technology, is the property of Launchpad unless otherwise stated. Unauthorized use is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Launchpad is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to lost data, lost revenue, or reputational harm.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Termination</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to terminate or suspend access to our services for any reason, including breach of these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
