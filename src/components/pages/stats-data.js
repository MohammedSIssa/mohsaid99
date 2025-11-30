export const stats = [
  {
    count: 2,
    title: "نوفمبر",
    year: 2025,
    type: "stat",
    doughnut: {
      actual: [
        {
          label: "نوم",
          value: 8,
        },
        {
          label: "شغل",
          value: 8,
        },
        {
          label: "مع الأهل",
          value: 4,
        },
        {
          label: "رياضة",
          value: 1,
        },
        {
          label: "وقت فراغ",
          value: 3,
        },
      ],
    },
    line: {
      data: [
        {
          label: "الأسبوع الأول",
          goal: 24,
          actual: 28,
        },
        {
          label: "الأسبوع الثاني",
          goal: 22,
          actual: 18,
        },
        {
          label: "الأسبوع الثالث",
          goal: 25,
          actual: 32,
        },
        {
          label: "الأسبوع الرابع",
          goal: 23,
          actual: 38,
        },
      ],
    },
  },
  {
    count: 1,
    title: "أكتوبر",
    year: 2025,
    type: "stat",
    summary: "ديمو",
    doughnut: {
      actual: [
        {
          label: "نوم",
          value: 8,
        },
        {
          label: "أكل",
          value: 1,
        },
        {
          label: "دراسة",
          value: 3,
        },
        {
          label: "وقت فراغ",
          value: 8,
        },
        {
          label: "وقت شغل",
          value: 3,
        },
      ],
    },
  },
];

export const latestStat = stats.length ?? 0;
