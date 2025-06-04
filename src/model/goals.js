export let goals = [
  {
    id: 1,
    meta: {
      duration: "أهداف السنة",
      summary: "مبرمج مواقع full-stack",
      year: "2025",
    },
    events: [
      {
        t: "h1",
        c: "أهداف الربع الثاني",
        g: [
          {
            name: "اخلص كورس الـFull-Stack",
          },
          {
            name: "أتمكن من الرياكت",
            isDone: true,
          },
          {
            name: "أتعلم كل يوم اشي جديد",
          },
        ],
      },
      {
        t: "h1",
        c: "أهداف الربع الأول",
        g: [
          {
            name: "أخلص كورس الـJavaScript",
            isDone: true,
            // isFailed: true
          },
          {
            name: "أحل أول 25 سؤال في Project Euler",
            isDone: true,
          },
          {
            name: "كل يوم درس عبري",
            isDone: true,
          },
          {
            name: "أتعلم اشي جديد كل يوم",
            isDone: true,
          },
        ],
      },
    ],
  },
];

export const latestGoal = goals.length;
