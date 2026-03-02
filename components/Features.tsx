import Image from "next/image";
import { facilityData } from "@/data/facility";
import { FiHeart, FiUsers, FiHome, FiActivity } from "react-icons/fi";

const iconMap = {
  support: FiHeart,
  plan: FiUsers,
  community: FiHome,
  life: FiActivity,
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            グループホームあさひで
            <br />
            「望む暮らし」の実現をしませんか
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              地域に根ざした暮らし
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              石川県七尾市に位置する「グループホームあさひ」は、能登半島の自然に囲まれた環境で、ショッピングモールや公園、多くの学校など自然と教育・文化が調和する環境が広がっています。ホームは地上3階建てで、テラスや屋上庭園を備え、ご入居者が思いおもいの時間をお過ごしいただける、癒しの空間をご用意しております。
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/image.png"
                alt="地域の風景"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              グループホームあさひの支援体制
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              「グループホームあさひ」では、専門的な知識と経験を持ったスタッフが配置され、ご入居者のお身体の状態や希望に合わせた個別支援計画をご提案します。生活支援スタッフ他多職種が連携して生活に活きる支援を日常にとりいれ、ADL（日常生活動作）の維持・向上を目指します。
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/image%20copy.png"
                alt="支援体制"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || FiHeart;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-warm-200"
              >
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
