export const dateFormatter = (date) => {
  return `${date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })} (${date.toLocaleDateString('en-US', { weekday: 'long' })})`;
};
