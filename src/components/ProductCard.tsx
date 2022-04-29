import ReactTooltip from "react-tooltip";
import { ProductCardProps } from "../interfaces/product";
import getIngredients from "../utils/getIngredients";

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="flex shadow-product rounded-md sm:h-40 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-50 hover:shadow-none">
      <div className="underline w-32 py-8 pl-2 sm:pl-5 pr-0">
        <img
          src={props.image_url}
          alt={props.name}
          className="h-28 w-full sm:h-full object-contain"
          data-tip
          data-for="productImg"
        />
        <ReactTooltip
          id="productImg"
          effect="solid"
          className="w-36 text-center"
        >
          <p>{getIngredients(props.ingredients)}</p>
        </ReactTooltip>
      </div>
      <div className="flex flex-col justify-center w-3/4 p-2 sm:p-5">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="text-yellow-600">{props.tagline}</p>
        <p>
          {props.description.length > 105
            ? `${props.description.substring(0, 105)}...`
            : props.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
