import React from "react";

const Privacy = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Privacy Policy Page
              </h1>
              <div className="text-sm text-gray-500">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-gray-700">"privacy policy"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-8">
              {/* About this Notice Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  About this Notice
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Notice provides information on how 6ixStores
                  collects and processes your personal data when you visit our
                  website or mobile applications. It sets out what we do with
                  your personal data and how we keep it secure and explains the
                  rights that you have in relation to your personal data.
                </p>
              </div>

              {/* Who We Are Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  2. Who We Are
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    6ixStores is the leading pan-African e-commerce platform.
                    Our platform consists of our marketplace, which connects
                    sellers with consumers, our logistics service, which enables
                    the shipment and delivery of packages from sellers to
                    consumers, and our payment service, which facilitates
                    transactions among participants active on our platform in
                    selected markets.
                  </p>
                  <p>
                    This website is operated by a member of the 6ixStores group
                    of companies, the ultimate holding company of which is
                    6ixStores Technologies. Information on our subsidiaries can
                    be found on our website.
                  </p>
                  <p>
                    Any personal data provided or collected by 6ixStores is
                    controlled by the subsidiary that the website is related to.
                  </p>
                </div>
              </div>

              {/* The Data We Collect Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  3. The Data We Collect About You?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Personal data means any information that can be used to
                  identify directly or indirectly a specific individual. We
                  collect your personal data in order to provide tailored
                  products and services and in order to analyse and continually
                  improve our products and services. We may collect, use, store
                  and transfer different kinds of personal data for marketing
                  and personal data optimization purposes. Jumia also uses
                  Google Digital Marketing to propose targeted offers for
                  certain products and services to our customers. You provide us
                  with your personal data when you register your personal
                  details on our website and mobile platforms and transact with
                  the same. The personal data we collect includes: Information
                  you provide to us:We receive and store the information you
                  provide to us including your identity data, contact data,
                  biometric data, delivery address and financial data. These
                  types of personal data may include: contact details (such as
                  your name, postal addresses, phone numbers and email
                  addresses), demographic information (such as your date of
                  birth, age or age range and gender), online registration
                  information (such as your password and other authentication
                  information), payment information (such as your credit card
                  information and billing address), information provided as part
                  of online questionnaires (such as responses to any customer
                  satisfaction surveys or market research), competition
                  entries/submissions, and in certain cases your marketing
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
