import React from "react";

const Support = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                6ixStores support Policy page
              </h1>
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-700">
                  Home
                </a>
                <span>/</span>
                <span className="text-gray-900">"Support Policy"</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-gray-700 leading-relaxed">
              <span className="text-green-500 font-medium">6ixStores</span>
              <span>
                {" "}
                store is here to stay and guard you as you shop and on{" "}
              </span>
              <span className="text-orange-400 font-medium">
                6ixStores store
              </span>
              <span>
                , let's support you when you are trying to place your orders or
                when you want to your products online in Nigeria, picnod store
                support team number is as follows{" "}
              </span>
              <span className="text-red-500 font-medium">09119225365</span>
              <span>
                , you can chat on whatsapp they are active any day any night for
                your supports.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
