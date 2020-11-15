export const clamp = (value: any, lowerBound: any, upperBound: any) => {
  'worklet';
  return Math.min(Math.max(lowerBound, value), upperBound);
};
