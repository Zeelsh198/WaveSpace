import React from "react";

const PricingToggleGroup = ({
  plans = [],
  currencies = [],
  highlightColor = "bg-lime-300",
  badgeBgColor = "bg-black",
  badgeTextColor = "text-lime-300",
  planTextColor = "text-white",
  activeCurrencyBg = "bg-white",
  inactiveCurrencyBg = "bg-[#2b2b2b]",
  activeCurrencyText = "text-black",
  inactiveCurrencyText = "text-white",
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6 flex flex-col gap-4 lg:flex-row md:items-center md:justify-between">
      
      {/* Plan Buttons */}
      <div className="flex justify-center w-full gap-2 sm:gap-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative px-4 py-2 rounded-md text-sm sm:text-base border border-gray-600 flex items-center
              ${plan.highlighted ? `${highlightColor} text-black` : `bg-transparent ${planTextColor}`}
            `}
          >
            {plan.label}

            {/* Badge: hidden on mobile */}
            {plan.badge && (
              <span
                className={`hidden sm:inline-block sm:ml-2 px-1.5 py-0.5 rounded-sm font-medium text-[10px] sm:text-xs
                  ${plan.highlighted ? `${badgeBgColor} ${badgeTextColor}` : "bg-lime-300 text-black"}
                `}
              >
                {plan.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Currency Toggle */}
      <div className={`flex rounded-md overflow-hidden w-max mx-auto md:mx-0 ${inactiveCurrencyBg}`}>
        {currencies.map((currency, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-1 py-2 text-sm sm:text-base font-medium
              ${currency.active ? `${activeCurrencyBg} ${activeCurrencyText}` : `${inactiveCurrencyText}`}
            `}
          >
            <span>{currency.icon}</span>
            <span>{currency.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingToggleGroup;
