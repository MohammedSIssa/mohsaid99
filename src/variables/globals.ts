export const API: string = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_API
  : import.meta.env.VITE_PROD_API;

export const ADMIN_ROLE = import.meta.env.VITE_ADMIN_ROLE;

export const MONMON_ROLE = import.meta.env.VITE_MONMON_ROLE;
