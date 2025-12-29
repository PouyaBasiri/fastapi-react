import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
         رایان توسعه سورین
        </h1>
        <p className="text-lg mb-8">
          بهترین محصولات با طراحی مدرن و تجربه کاربری عالی
        </p>
        <Link
          to="/catalog"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100"
        >
          مشاهده محصولات
        </Link>
      </div>
    </section>
  );
}

