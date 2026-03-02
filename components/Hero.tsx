import Image from "next/image";
import { facilityData } from "@/data/facility";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-50 via-accent-50 to-warm-100 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://as-heim.com/lp/kunitachi/img/mv_bg_pc.jpg"
          alt="グループホーム朝日 背景"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {facilityData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            {facilityData.type}
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {facilityData.location.address}
          </p>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg mb-8 border border-warm-200">
            <p className="text-2xl md:text-3xl font-bold text-accent-600 mb-2">
              居室限定キャンペーン
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              月額利用料 98,000円～（月払い方式の場合）
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              入居一時金 0円～450万円（入居一時金設定方式の場合）
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">24時間サポート</p>
              <p className="text-sm text-gray-600">スタッフ常駐</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">選べる3つの料金プラン</p>
              <p className="text-sm text-gray-600">ご予算に合わせて選択</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <p className="font-semibold text-gray-900">個別支援計画</p>
              <p className="text-sm text-gray-600">一人ひとりに合わせた支援</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#location"
              className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors text-lg font-semibold shadow-lg"
            >
              資料請求
            </a>
            <a
              href="#location"
              className="bg-white text-accent-600 px-8 py-4 rounded-lg hover:bg-warm-50 transition-colors text-lg font-semibold shadow-lg border-2 border-accent-500"
            >
              見学予約
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
