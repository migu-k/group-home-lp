import Image from "next/image";
import { FiUsers, FiClock, FiHeart, FiShield } from "react-icons/fi";

const systemItems = [
  {
    icon: FiUsers,
    title: "専門スタッフ体制",
    description: "生活支援員、看護師、相談員など、専門的な知識と経験を持ったスタッフが配置されています。",
  },
  {
    icon: FiClock,
    title: "24時間サポート",
    description: "24時間体制でスタッフが常駐し、夜間も含めて安心して生活できる環境を整えています。",
  },
  {
    icon: FiHeart,
    title: "個別支援計画",
    description: "利用者様一人ひとりの希望や目標、必要な支援を踏まえて作成する個別支援計画に基づいた支援を提供します。",
  },
  {
    icon: FiShield,
    title: "安全・安心の環境",
    description: "バリアフリー設計、防災設備、セキュリティシステムなど、安全で安心して生活できる環境を整備しています。",
  },
];

export default function System() {
  return (
    <section id="system" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            受け入れ体制
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            グループホーム朝日では、利用者様が安心して生活できるよう、
            <br />
            充実した受け入れ体制を整えています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=800&q=80"
              alt="スタッフ体制"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              充実したスタッフ体制
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              グループホーム朝日では、生活支援員を中心に、看護師、相談員、機能訓練指導員など、多職種のスタッフが連携して支援を行っています。定期的な研修や勉強会を通じて、スタッフのスキル向上にも取り組んでいます。
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md border border-warm-200">
              <h4 className="font-semibold text-gray-900 mb-3">スタッフ体制</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 生活支援員（24時間体制）</li>
                <li>• 看護師（常勤・非常勤）</li>
                <li>• 相談員（常勤）</li>
                <li>• 機能訓練指導員（非常勤）</li>
                <li>• 管理栄養士（非常勤）</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-warm-200"
              >
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
