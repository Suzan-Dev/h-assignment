export const getBeers = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${pageParam}&per_page=10`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle error here
    console.log("err", err);
  }
};
