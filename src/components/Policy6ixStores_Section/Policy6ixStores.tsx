import React from "react";
import { FileText, RotateCcw, Settings, AlertCircle } from "lucide-react";

interface PolicyLink {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
}

const policyLinks: PolicyLink[] = [
  {
    id: 1,
    title: "Terms & conditions",
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    href: "/terms-conditions",
  },
  {
    id: 2,
    title: "return policy",
    icon: <RotateCcw className="w-8 h-8 text-orange-500" />,
    href: "/return-policy",
  },
  {
    id: 3,
    title: "Support Policy",
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    href: "/support-policy",
  },
  {
    id: 4,
    title: "privacy policy",
    icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
    href: "/privacy-policy",
  },
];

const PolicyLinkCard: React.FC<{ link: PolicyLink }> = ({ link }) => {
  return (
    <a
      href={link.href}
      className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer min-h-[120px]"
    >
      {/* Icon */}
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {link.icon}
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-600 transition-colors duration-300">
        {link.title}
      </h3>
    </a>
  );
};

const PolicyLinksSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {policyLinks.map((link) => (
            <PolicyLinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
          {policyLinks.map((link) => (
            <PolicyLinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Mobile Layout - 1 column */}
        <div className="grid sm:hidden grid-cols-1 gap-4 max-w-sm mx-auto">
          {policyLinks.map((link) => (
            <PolicyLinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Alternative layout with responsive grid (simpler approach)
const PolicyLinksSectionAlt: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      {/* Responsive Grid - automatically adjusts columns */}

      {policyLinks.map((link) => (
        <PolicyLinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};

// Demo component to show both approaches
const PolicyLinksDemo: React.FC = () => {
  const [approach, setApproach] = React.useState<"explicit" | "responsive">(
    "responsive"
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toggle Controls */}

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"></div>

        {/* Responsive Info b(blue) background before policy */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            {/* <strong>Current approach:</strong>{" "} */}
            {/* {approach === "responsive"
              ? "Responsive Grid"
              : "Explicit Breakpoints"} */}
          </p>
        </div>
      </div>

      {/* Policy Links Section */}
      {approach === "responsive" ? (
        <PolicyLinksSectionAlt />
      ) : (
        <PolicyLinksSection />
      )}
    </div>
  );
};

export default PolicyLinksDemo;
