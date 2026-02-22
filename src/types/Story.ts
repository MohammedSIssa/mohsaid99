export type Story = {
  id?: number;
  count: number;
  type: string;
  title: string;
  year: string;
  summary: string;
  special: boolean;
  seen?: boolean;
};
