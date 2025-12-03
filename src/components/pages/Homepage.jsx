const Homepage = () => {
  const currentlyLearning = "Supabase";
  return (
    <div className="flex flex-col h-dvh items-center justify-center p-10 text-center [&_p]:mb-2 sm:[&_p]:font-bold [&_p]:text-sm [&_p]:md:text-lg [&_p]:max-w-[600px]">
      <h1 className="text-2xl md:text-5xl font-bold mb-10">أهلا 👋🏻</h1>
      <p>أنا محمد وهذا مكاني الخاص لتوثيق رحلتي ✏️</p>
      <p>هنا بتلاقي يومياتي، شوية صور من الحياة، أهدافي لكل فترة</p>
      <p className="mb-5"></p>
      <p>
        أنا الآن أتعلم <span className="italic currently-learning">{currentlyLearning}،</span> بتقدر تتابع تقدمي من
        صفحة اليوميات
      </p>
    </div>
  );
};

export default Homepage;
