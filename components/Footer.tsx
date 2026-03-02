import { facilityData } from "@/data/facility";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{facilityData.name}</h3>
            <p className="text-gray-400 text-sm">
              {facilityData.type}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">所在地</h4>
            <p className="text-gray-400 text-sm mb-2">
              {facilityData.location.address}
            </p>
            <p className="text-gray-400 text-sm">
              {facilityData.location.access.train}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 text-sm mb-2">
              フリーコール: {facilityData.phone}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors text-sm"
              >
                資料請求
              </a>
              <a
                href="#"
                className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors text-sm"
              >
                見学予約
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>COPYRIGHT © {new Date().getFullYear()} {facilityData.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
