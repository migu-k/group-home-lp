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
            「グループホーム朝日」ではご入居者の年齢や
            <br />
            身体状況などに合わせて
            <br />
            選べる3つの料金プランを
            <br />
            ご用意しております。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
                plan.campaign
                  ? "border-accent-500 relative"
                  : "border-warm-200"
              }`}
            >
              {plan.campaign && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    キャンペーン価格
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">
                {plan.name}
              </h3>
              {plan.campaign && (
                <p className="text-accent-600 font-semibold mb-2">
                  {plan.campaignPrice}
                </p>
              )}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">入居一時金</p>
                <p className="text-2xl font-bold text-gray-900">
                  {plan.deposit}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">月額利用料</p>
                <p className="text-lg font-semibold text-gray-900">
                  標準: {plan.monthlyFee.standard}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  プレミアム: {plan.monthlyFee.premium}
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  月額利用料に含まれるもの：
                </p>
                <ul className="space-y-2">
                  {plan.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.notes && (
                <p className="text-xs text-gray-500 mt-4">{plan.notes}</p>
              )}
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
