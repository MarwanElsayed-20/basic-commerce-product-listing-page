const getRandomRating = () => {
  return (Math.random() * (5 - 1) + 1).toFixed(1); // Random float, rounded to 1 decimal
};

export default getRandomRating;
