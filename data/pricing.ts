export const pricingPlans = [
  {
    id: "plan-a",
    name: "プランA（月払い方式）",
    campaign: true,
    campaignPrice: "月額利用料 98,000円～",
    deposit: "0円（ご契約時に敷金30万円をお預かりいたします）",
    monthlyFee: {
      standard: "98,000円",
      premium: "128,000円",
    },
    includes: [
      "家賃（非課税）",
      "管理費（非課税）",
      "水光熱費",
      "食費",
      "日常生活支援費",
    ],
    notes: "※月額利用料は居室タイプにより異なります",
  },
  {
    id: "plan-b",
    name: "プランB（入居一時金設定方式）",
    campaign: false,
    deposit: "210万円",
    monthlyFee: {
      standard: "68,000円",
      premium: "88,000円",
    },
    includes: [
      "家賃（非課税）",
      "管理費（非課税）",
      "水光熱費",
      "食費",
      "日常生活支援費",
    ],
    notes: "※入居一時金は非課税で、退去時に返還制度があります",
  },
  {
    id: "plan-c",
    name: "プランC（入居一時金設定方式）",
    campaign: false,
    deposit: "450万円",
    monthlyFee: {
      standard: "48,000円",
      premium: "68,000円",
    },
    includes: [
      "家賃（非課税）",
      "管理費（非課税）",
      "水光熱費",
      "食費",
      "日常生活支援費",
    ],
    notes: "※入居一時金は非課税で、退去時に返還制度があります",
  },
];

export const additionalFees = {
  title: "その他の費用",
  items: [
    {
      name: "障害者総合支援法による利用者負担額",
      description: "所得に応じて1割負担（上限あり）",
    },
    {
      name: "日常生活費",
      description: "お小遣い、日用品購入費など（実費）",
    },
    {
      name: "医療費",
      description: "通院費、薬代など（実費・保険適用）",
    },
  ],
};
