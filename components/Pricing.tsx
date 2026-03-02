import { pricingPlans, additionalFees } from "@/data/pricing";
import { FiCheck } from "react-icons/fi";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ご利用料金
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            「グループホームあさひ」のご利用料金をご案内します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg p-6 border-2 border-warm-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">月額合計</p>
                <p className="text-3xl font-bold text-accent-600">
                  {plan.total.toLocaleString()}円
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  内訳：
                </p>
                <ul className="space-y-2">
                  {plan.breakdown.map((item, index) => (
                    <li key={index} className="flex items-start justify-between">
                      <div className="flex items-start">
                        <FiCheck className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm text-gray-700">{item.item}</span>
                          {item.note && (
                            <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.amount.toLocaleString()}{item.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-warm-50 rounded-lg p-8 max-w-4xl mx-auto border border-warm-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {additionalFees.title}
          </h3>
          <div className="space-y-4">
            {additionalFees.items.map((item, index) => (
              <div key={index} className="border-b border-warm-200 pb-4 last:border-0">
                <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
