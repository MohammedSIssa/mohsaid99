export let goals = [
  {
    id: 2,
    meta: {
      duration: "أهداف الربع الثاني",
      summary: "من أبريل لـ يونيو",
      year: "2025",
    },
    goals: [
      {
        name: "اخلص كورس الـFull-Stack Javascript",
      },
      {
        name: "أتمكن من الرياكت",
      },
      {
        name: "أتعلم كل يوم اشي جديد",
      },
    ],
  },
  {
    id: 1,
    meta: {
      duration: "أهداف الربع الأول",
      summary: "من يناير لـ مارس",
      year: "2025",
    },
    goals: [
      {
        name: "أخلص كورس الجافاسكريبت ✅",
        isDone: true,
        // isFailed: true
      },
      {
        name: "أحل أول 25 سؤال في Project Euler ✅",
        isDone: true,
      },
      {
        name: "كل يوم درس عبري ✅",
        isDone: true,
      },
      {
        name: "أتعلم اشي جديد كل يوم ✅",
        isDone: true,
      },
    ],
  },
];

export const latestGoal = goals.length;
