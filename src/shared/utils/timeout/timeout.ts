export const timeout = (delay: number) =>
  new Promise((response) => setTimeout(response, delay));
