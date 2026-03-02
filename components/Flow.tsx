import { FiFileText, FiEye, FiCheckCircle, FiHome } from "react-icons/fi";

const flowSteps = [
  {
    step: 1,
    icon: FiFileText,
    title: "資料請求・お問い合わせ",
    description: "まずはお気軽にお問い合わせください。資料のご請求も可能です。",
  },
  {
    step: 2,
    icon: FiEye,
    title: "見学・ご相談",
    description: "施設の見学とご相談を行います。ご希望の日時をお知らせください。",
  },
  {
    step: 3,
    icon: FiCheckCircle,
    title: "入居希望の意思確認",
    description: "見学後、ご入居の意思を確認させていただきます。",
  },
  {
    step: 4,
    icon: FiFileText,
    title: "個別支援計画の作成",
    description: "利用者様の希望や目標、必要な支援を踏まえて個別支援計画を作成します。",
  },
  {
    step: 5,
    icon: FiCheckCircle,
    title: "契約手続き",
    description: "契約書のご説明とご署名をお願いします。",
  },
  {
    step: 6,
    icon: FiHome,
    title: "ご入居",
    description: "ご入居日を迎えます。新しい生活のスタートです。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ご入居までの流れ
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            グループホーム朝日へのご入居までの流れをご説明します。
            <br />
            不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flowSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  {index < flowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-accent-300"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-4 border-l-accent-300 border-b-4 border-b-transparent"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#location"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors text-lg font-semibold shadow-lg inline-block"
          >
            お問い合わせ・資料請求
          </a>
        </div>
      </div>
    </section>
  );
}
