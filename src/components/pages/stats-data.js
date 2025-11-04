export const stats = [
  {
    count: 2,
    title: "نوفمبر",
    year: 2025,
    type: "stat",
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
      actual: [
        {
          label: "نوم",
          value: "8",
        },
        {
          label: "برمجة",
          value: "6",
        },
        {
          label: "رياضة",
          value: "1",
        },
        {
          label: "قراءة",
          value: "1",
        },
        {
          label: "مع العيلة",
          value: "4",
        },
        {
          label: "فراغ",
          value: "4",
        },
      ],
    },
    line: {
      data: [
        {
          label: "الأسبوع الأول",
          goal: 15,
          actual: 28,
        },
        {
          label: "الأسبوع الثاني",
          goal: 17,
          actual: null,
        },
        {
          label: "الأسبوع الثالث",
          goal: 15,
          actual: null,
        },
        {
          label: "الأسبوع الرابع",
          goal: 18,
          actual: null,
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
