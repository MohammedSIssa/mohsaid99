export type Story = {
  id?: number;
  count: number;
  type?: string | number;
  title: string;
  summary?: string;
  year: string | number;
  special?: boolean | null;
  seen?: boolean | null;
};
