export const stats = [
  {
    id: 2,
    meta: {
      duration: "نوفمبر",
      year: 2025,
    },
    doughnut: {
      goal: [
        {
          label: "نوم",
          value: "8",
        },
        {
          label: "برمجة",
          value: "3",
        },
        {
          label: "رياضة",
          value: "2",
        },
        {
          label: "قراءة",
          value: "2",
        },
        {
          label: "مع العيلة",
          value: "4",
        },
        {
          label: "شغل",
          value: "3",
        },
        {
          label: "فراغ",
          value: "2",
        },
      ],
      actual: [],
    },
    line: {
      data: [
        {
          label: "الأسبوع الأول",
          goal: 15,
          actual: 13,
        },
        {
          label: "الأسبوع الثاني",
          goal: 17,
          actual: 19,
        },
        {
          label: "الأسبوع الثالث",
          goal: 15,
          actual: 16,
        },
        {
          label: "الأسبوع الرابع",
          goal: 18,
          actual: 16,
        },
      ],
    },
  },
  {
    id: 1,
    meta: {
      duration: "أكتوبر",
      year: 2025,
      summary: "ديمو",
    },
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
      goal: [
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
          value: 8,
        },
        {
          label: "قراءة",
          value: 1,
        },
        {
          label: "رياضة",
          value: 2,
        },
        {
          label: "وقت شغل",
          value: 4,
        },
      ],
    },
  },
];

export const latestStat = stats.length ?? 0;
