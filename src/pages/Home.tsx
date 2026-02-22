// import { content } from "../variables/homeContent";
import { useType } from "../hooks/useType";
import { useFavicon } from "../hooks/useFavicon";
import { useEffect } from "react";

import Socials from "../components/Socials";

export default function Home() {
  const { setType } = useType();

  useEffect(() => {
    setType(null);
  }, [setType]);

  useFavicon("/mohsaid99/favicons/vite.svg");

  return (
    <div className="flex px-5 md:pr-16 flex-col [&>a]:text-(--font-color) items-center pt-20">
      <div dir="rtl">
        <h1 className="text-3xl font-bold mb-4">👋🏻 أهلاً، أنا محمد</h1>
        <p className="mb-4">مرحبا فيك في بيتي على النت 🙂</p>
        <p className="mb-4">
          أنا <strong>مطور Full Stack</strong> ولسا بتعلّم، ومركز هالفترة على
          بناء تطبيقات حديثة، سهلة الاستخدام، وتكون مناسبة لكل الناس.
        </p>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <h2 className="text-2xl font-semibold mb-3">🚀 إيش بتعلّم هالأيام</h2>
        <ul className="list-disc list-inside mb-4">
          <li>TanStack Query</li>
          <li>System Design</li>
          <li>مواضيع متقدمة في الفرونت إند والبك إند</li>
        </ul>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <h2 className="text-2xl font-semibold mb-3">🛠️ الأدوات والتقنيات</h2>
        <ul className="list-disc list-inside mb-4">
          <li>الفرونت إند: HTML، CSS، JavaScript، React</li>
          <li>البك إند: Node.js، Express</li>
          <li>قاعدة البيانات: PostgreSQL</li>
          <li>أدوات ثانية: Git، GitHub، Vite</li>
        </ul>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <h2 className="text-2xl font-semibold mb-3">
          📌 المشاريع اللي شغال عليها
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>موقع حديث أتابع فيه تقدمي، عاداتي، ويومياتي</li>
          <li>مشاريع تنفع تنحط في السيرة الذاتية</li>
        </ul>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <h2 className="text-2xl font-semibold mb-3">🎯 أهدافي</h2>
        <ul className="list-disc list-inside mb-4">
          <li>أبني مشاريع حقيقية تفيدني</li>
          <li>أكتب كود نظيف وسهل ينقري</li>
          <li>أطور مهاراتي في التواصل</li>
          <li>أصير مطور Full Stack واثق من حالي</li>
        </ul>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <h2 className="text-2xl font-semibold mb-3">📬 للتواصل</h2>
        <div className="not-prose">
          <ul className="list-disc list-inside mb-4">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/MohammedSIssa"
                target="_blank"
                rel="noopener noreferrer"
              >
                MohammedSIssa
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:mohammedsissa1999@gmail.com">
                mohammedsissa1999@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-4 border-t-(--border-color) mb-10" />

        <div className="not-prose">
          <blockquote>
            الخطوات الصغيرة كل يوم أفضل من دفعة حماس مرة واحدة.
          </blockquote>
        </div>
      </div>

      <Socials />
    </div>
  );
}
