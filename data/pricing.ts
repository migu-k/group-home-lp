export const monthlyFees = {
  rent: 37000, // 家賃
  meals: {
    breakfast: 350, // 朝食
    lunch: 550, // 昼食
    dinner: 550, // 夕食
    daily: 1450, // 1日合計
    monthly: 43500, // 月額（30日換算）
  },
  utilities: {
    standard: 8500, // 通常の光熱費
    seasonal: 10000, // 夏季・冬季の光熱費（+1,500円）
  },
  dailySupplies: "都度", // 日用品費
};

export const pricingPlans = [
  {
    id: "plan-standard",
    name: "通常月の料金",
    description: "春・秋の料金",
    monthlyTotal: monthlyFees.rent + monthlyFees.meals.monthly + monthlyFees.utilities.standard,
    breakdown: [
      { item: "家賃", amount: monthlyFees.rent, unit: "円" },
      { item: "食費（月額）", amount: monthlyFees.meals.monthly, unit: "円", note: "朝350円・昼550円・夕550円" },
      { item: "光熱費", amount: monthlyFees.utilities.standard, unit: "円" },
    ],
    total: monthlyFees.rent + monthlyFees.meals.monthly + monthlyFees.utilities.standard,
  },
  {
    id: "plan-seasonal",
    name: "夏季・冬季の料金",
    description: "夏季・冬季は光熱費が追加",
    monthlyTotal: monthlyFees.rent + monthlyFees.meals.monthly + monthlyFees.utilities.seasonal,
    breakdown: [
      { item: "家賃", amount: monthlyFees.rent, unit: "円" },
      { item: "食費（月額）", amount: monthlyFees.meals.monthly, unit: "円", note: "朝350円・昼550円・夕550円" },
      { item: "光熱費", amount: monthlyFees.utilities.seasonal, unit: "円", note: "通常より+1,500円" },
    ],
    total: monthlyFees.rent + monthlyFees.meals.monthly + monthlyFees.utilities.seasonal,
  },
];

export const additionalFees = {
  title: "その他の費用",
  items: [
    {
      name: "日用品費",
      description: "都度（実費）",
    },
    {
      name: "障害者総合支援法による利用者負担額",
      description: "所得に応じて1割負担（上限あり）",
    },
    {
      name: "日常生活費",
      description: "お小遣いなど（実費）",
    },
    {
      name: "医療費",
      description: "通院費、薬代など（実費・保険適用）",
    },
  ],
};
