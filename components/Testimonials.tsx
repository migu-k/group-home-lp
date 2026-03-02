import { testimonials } from "@/data/testimonials";
import { FiUser, FiUsers } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            グループホームあさひをご利用いただいている
            <br />
            利用者様とご家族様からの声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-warm-200"
            >
              <div className="flex items-center mb-4">
                {testimonial.type === "resident" ? (
                  <FiUser className="w-6 h-6 text-accent-600 mr-3" />
                ) : (
                  <FiUsers className="w-6 h-6 text-accent-600 mr-3" />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  {testimonial.type === "resident" && (
                    <p className="text-sm text-gray-600">
                      {testimonial.gender}・{testimonial.age}歳
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    {testimonial.type === "resident" ? "ご入居者" : "ご家族"}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          <p>
            上記は2024年から2025年に実施したお客様インタビューを一部抜粋しています。
          </p>
        </div>
      </div>
    </section>
  );
}
