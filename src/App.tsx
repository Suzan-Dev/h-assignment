import { useInfiniteQuery } from "react-query";
import { getBeers } from "./apis/product";
import ProductCard from "./components/ProductCard";
import { Beer } from "./interfaces/product";

const App = () => {
  const beersList = useInfiniteQuery<Beer[]>("BEERS", getBeers, {
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  const renderBeers = () => {
    if (beersList.isLoading) {
      return <p>Loading...</p>;
    }

    if (beersList.isError) {
      return <p>Something went wrong. Please, come back later!</p>;
    }

    if (beersList.data) {
      return (
        <div className="grid lg:grid-cols-2 gap-10">
          {beersList.data.pages.flat().map((beer) => (
            <ProductCard
              key={beer.id}
              image_url={beer.image_url}
              description={beer.description}
              name={beer.name}
              tagline={beer.tagline}
              ingredients={beer.ingredients}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto px-3">
      <p className="text-gray-600 font-bold text-lg my-6">Beers</p>
      {renderBeers()}

      {/* Skipped the step to hide this button after all data is fetched */}
      <div className="my-10 text-center">
        {beersList.data?.pages && (
          <button
            className="font-bold text-blue-500 text-sm cursor-pointer"
            onClick={() => {
              beersList.fetchNextPage();
            }}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
