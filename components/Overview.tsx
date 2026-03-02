import { overviewData } from "@/data/overview";

const overviewItems = [
  { label: "類型", value: overviewData.type },
  { label: "定員", value: overviewData.capacity },
  { label: "居室区分", value: overviewData.roomType },
  { label: "対象利用者", value: overviewData.targetUsers },
  { label: "支援体制", value: overviewData.supportSystem },
  { label: "利用料の支払い方式", value: overviewData.paymentMethod },
  { label: "福祉サービス", value: overviewData.welfareService },
  { label: "事業所番号", value: overviewData.facilityNumber },
  { label: "土地建物の所有形態", value: overviewData.ownership },
  { label: "事業主体", value: overviewData.operator },
];

export default function Overview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            グループホーム朝日 概要
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-warm-50 rounded-lg overflow-hidden shadow-lg border border-warm-200">
            <table className="w-full">
              <tbody>
                {overviewItems.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-warm-50"
                    } border-b border-gray-200`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">
                      {item.label}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
