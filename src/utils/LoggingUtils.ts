export const logApiError = (message: string, error: string) =>
  console.log('%c%s', 'color: #FF1010;', `${message}: ${error}`);

export const logApiSuccess = (message: string) =>
  console.log('%c%s', 'color: #10FF10;', `${message}`);

export const logMultipleItems = (items: []) => {
  items.map((item: any, index: number) =>
    console.log(`Item ${index}:\n\t${item}\n`),
  );
};
