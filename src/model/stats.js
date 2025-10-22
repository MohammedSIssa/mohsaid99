export const stats = [
  {
    id: 1,
    meta: {
      duration: "أكتوبر",
      year: 2025,
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
          label: "وقت فراع",
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
          label: "وقت فراع",
          value: 3,
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
