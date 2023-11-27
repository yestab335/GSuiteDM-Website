import Link from "next/link"

export default function Terms() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Privacy Policy Content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section Header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Terms of Use for GSuiteDM
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              GSuiteDM Terms of Use
              <br />
              Effective as of (date)
            </p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Welcome to the GSuiteDM&apos;s Terms of Use agreement. For purposes of this agreement, “Site” refers to the
              Company&apos;s website, which can be accessed at <Link href='/' className="text-blue-700 underline">https://gsuitedm.netlify.app</Link>.
              <br />
              “Service” refers to the Company&apos;s services accessed via the Site, in which users can find general information
              about our browser extension. The terms “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of
              our Site or our Service.
            </p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              The following Terms of Use apply when you view or use the Service via our website located at{" "}
              <Link href='/' className="text-blue-700 underline">https://gsuitedm.netlify.app</Link>.
            </p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Please review the following terms carefully. By accessing or using the Service, you signify your agreement to these
              Terms of Use.
              <strong>
                {" "} If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service
              </strong>.
            </p>

            <p className="text-xl text-gray-600 font-bold mb-8" data-aos="zoom-y-out" data-aos-delay="150">PRIVACY POLICY</p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              The Company respects the privacy of its Service users. Please refer to the Company&apos;s Privacy Policy
              (found here: <Link href='/privacy-policy' className="text-blue-700 underline">https://gsuitedm.netlify.app/privacy-policy</Link>)
              which explains how we collect, use, and disclose information that pertains to your privacy. When you access
              or use the Service, you signify your agreement to the Privacy Policy as well as these Terms of Use.
            </p>

            <p className="text-xl text-gray-600 font-bold mb-8" data-aos="zoom-y-out" data-aos-delay="150">ABOUT THE SERVICE</p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              The Service allows you to explore and find general information about the browser extension GSuiteDM.
            </p>

            <p className="text-xl text-gray-600 font-bold mb-8" data-aos="zoom-y-out" data-aos-delay="150">REGISTRATION; RULES FOR USER CONDUCT AND USE OF THE SERVICE</p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              You need to be at least 13 years old and a resident of the United States to register for and use the
              Service.
              If you are a user who signs up for the Service, you will create a personalized account which includes
              a unique username and a password to access the Service and to receive messages from the Company.
              You agree to notify us immediately of any unauthorized use of your password and/or account.
              The Company will not be responsible for any liabilities, losses, or damages arising out of the unauthorized
              use of your member name, password and/or account.
            </p>

            <p className="text-xl text-gray-600 font-bold mb-8" data-aos="zoom-y-out" data-aos-delay="150">USE RESTRICTIONS</p>
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Your permission to use the Site is conditioned upon the following use, posting and conduct restrictions:
              You agree that you will not under any circumstances:
              <ul className={"list-disc list-inside"}>
                <li>access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service,</li>
                <li>collect or harvest any personal data of any user of the Site or the Service</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
