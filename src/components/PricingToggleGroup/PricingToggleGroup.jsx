/**
 * @component PricingToggleGroup
 *
 * `PricingToggleGroup` displays a toggleable list of pricing plans along with currency options.
 * It's commonly used in pricing sections to allow users to switch between different plans (e.g., Monthly, Annual)
 * and different currencies (e.g., USD, INR).
 *
 * @param {Object} props - Component props
 * @param {Array} props.plans - List of pricing plan options. Each plan should be an object with:
 * @param {string} props.plans[].label - Label of the pricing plan (e.g., "Monthly").
 * @param {boolean} [props.plans[].highlighted=false] - Whether the plan is highlighted (applies highlight color).
 * @param {string} [props.plans[].badge] - Optional badge text shown next to highlighted plans.
 * @param {Array} props.currencies - List of currency toggle options. Each currency should be an object with:
 * @param {string|JSX.Element} props.currencies[].icon - Icon or symbol for the currency (e.g., "$").
 * @param {string} props.currencies[].label - Label text for the currency (e.g., "USD").
 * @param {boolean} props.currencies[].active - Whether this currency is currently active.
 * @param {string} [props.highlightColor="bg-lime-300"] - Tailwind class for the highlighted plan background.
 * @param {string} [props.badgeBgColor="bg-black"] - Tailwind class for the badge background.
 * @param {string} [props.badgeTextColor="text-lime-300"] - Tailwind class for the badge text color.
 * @param {string} [props.planTextColor="text-white"] - Tailwind text color class for unhighlighted plans.
 * @param {string} [props.activeCurrencyBg="bg-white"] - Tailwind background color class for active currency toggle.
 * @param {string} [props.inactiveCurrencyBg="bg-[#2b2b2b]"] - Tailwind background for currency toggle container.
 * @param {string} [props.activeCurrencyText="text-black"] - Tailwind text color class for active currency.
 * @param {string} [props.inactiveCurrencyText="text-white"] - Tailwind text color class for inactive currency.
 *
 * @returns {JSX.Element} A responsive toggle group UI with plans and currency options.
 */


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
