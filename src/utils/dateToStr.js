export const dateToStr = (date) => {
  return date.toISOString().substring(0, 10);
  //doesn't work with timezones
};
