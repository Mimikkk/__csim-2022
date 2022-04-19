export const createApiUrl = (
  proxy: string,
  prefix: string = import.meta.env.VITE_PROXY
) => `${prefix}/${proxy}`;
