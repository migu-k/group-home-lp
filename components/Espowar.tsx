import { espowarData } from "@/data/espowar";
import { FiHome, FiMapPin } from "react-icons/fi";

export default function Espowar() {
  const effectiveRent = espowarData.pricing.rent - espowarData.pricing.rentSubsidy;

  return (
    <section id="espowar" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            系列店のご案内
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            グループホームあさひの系列店として、
            <br />
            より自由度の高い生活スタイルを提供する施設もございます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-accent-200">
            <div className="flex items-center mb-6">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <FiHome className="w-8 h-8 text-accent-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {espowarData.name}
                </h3>
                <p className="text-gray-600">{espowarData.nameEn}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start mb-4">
                <FiMapPin className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">所在地</h4>
                  <p className="text-gray-700">{espowarData.address}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">ご利用料金</h4>
              <div className="space-y-4">
                <div className="bg-warm-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">家賃</span>
                    <span className="font-semibold text-gray-900">
                      {espowarData.pricing.rent.toLocaleString()}円
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>（家賃補助 {espowarData.pricing.rentSubsidy.toLocaleString()}円）</span>
                    <span className="text-accent-600 font-semibold">
                      実質 {effectiveRent.toLocaleString()}円
                    </span>
                  </div>
                </div>

                <div className="bg-warm-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">食費</span>
                    <span className="font-semibold text-gray-900">都度払い</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    朝・昼は希望により利用可能（都度払い）、夕食は実費
                  </p>
                </div>

                <div className="bg-warm-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">水光熱費</span>
                    <span className="font-semibold text-gray-900">
                      {espowarData.pricing.utilities}
                    </span>
                  </div>
                </div>

                <div className="bg-warm-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">日用品費</span>
                    <span className="font-semibold text-gray-900">
                      {espowarData.pricing.dailySupplies}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {espowarData.description}
                <br />
                より自由度の高い生活を希望される方に適した施設です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
