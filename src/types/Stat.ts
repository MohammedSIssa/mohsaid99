export type Stat = {
  count: number;
  title: string;
  year: number;
  type: string;
  workout?: StatData;
  doughnut?: StatData;
  line?: StatData;
  seen?: boolean | null;
  summary?: string | null;
};

type StatData = {
  data: Data[];
};

type Data = {
  label: string;
  value: number | null;
};
