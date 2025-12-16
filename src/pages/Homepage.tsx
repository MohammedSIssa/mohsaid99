import HelloHand from "../assets/wave-hello.svg";

export default function Homepage() {
  return (
    <div className="relative flex flex-col items-center pt-30 md:pt-0">
      <h1 className="animation-fade-in mb-2 w-[200px] text-right text-2xl font-bold">
        مرحبا،
      </h1>
      <div className="animation-wave mb-5">
        <img src={HelloHand} className="mt-5 w-[165px] md:w-[230px]" />
      </div>
      <div>
        <h1 className="typing mt-15 font-bold">
          أنا محمد وهذا مكاني الخاص لتوثيق رحلتي
        </h1>
      </div>
    </div>
  );
}
