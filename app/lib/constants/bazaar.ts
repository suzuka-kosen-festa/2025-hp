import bazaarData from "@/../contents/bazaar/bazaar.json";

const sortedBazaarData = [...bazaarData].sort((a, b) => {
  const aIs2xx = Math.floor(a.teamNumber / 100) === 2 ? 1 : 0;
  const bIs2xx = Math.floor(b.teamNumber / 100) === 2 ? 1 : 0;
  return bIs2xx - aIs2xx;
});

export default sortedBazaarData;
