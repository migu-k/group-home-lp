import Image from "next/image";
import { facilityData } from "@/data/facility";
import { FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            所在地
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-warm-200">
              <div className="flex items-start mb-4">
                <FiMapPin className="w-6 h-6 text-accent-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">所在地</h3>
                  <p className="text-gray-700">{facilityData.location.address}</p>
                  <a
                    href={facilityData.location.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-600 text-sm mt-2 inline-block"
                  >
                    Googleマップで見る
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <FiNavigation className="w-6 h-6 text-accent-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">交通</h3>
                  <p className="text-gray-700 mb-1">
                    {facilityData.location.access.train}
                  </p>
                  <p className="text-gray-700">
                    {facilityData.location.access.bus}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiPhone className="w-6 h-6 text-accent-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">フリーコール</h3>
                  <a
                    href={`tel:${facilityData.phone.replace(/-/g, "")}`}
                    className="text-accent-500 hover:text-accent-600 text-xl font-semibold"
                  >
                    {facilityData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-warm-200">
              <h3 className="font-semibold text-gray-900 mb-4">空室状況</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">個室</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    残り{facilityData.capacity.available}室以上
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2人部屋</span>
                  <span className="text-gray-500 text-sm">ー お取扱なし</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://enyama.jp/senjuen/wp/wp-content/uploads/2013/05/img_yakushi_01.jpg"
              alt="グループホームあさひ 施設外観"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
