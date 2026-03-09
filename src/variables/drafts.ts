export const setDraft = (key: string, draft: string): void => {
  localStorage.setItem(key, draft);
};

export const getDraft = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const delDraft = (key: string): void => localStorage.removeItem(key);
