import { Link } from "react-router-dom";
import { Rating } from "./Rating";

const Product = ({ item }) => {
  return (
    <Link to={`/product/${item._id}`} className="inline-block">
      <div className="flex flex-col justify-center px-[1.5rem] max-w-[30rem] h-[32rem] bg-[#fae4c6] shadow-md hover:shadow-2xl transition-all duration-200 mx-auto rounded-lg">
        <div className="flex justify-center items-center">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-3xl w-[20rem] object-contain"
          />
        </div>

        <h1 className="text-[2.2rem] tracking-wide font-bold text-center overflow-hidden text-ellipsis py-2">
          {item.name}
        </h1>
        <div className="flex items-center justify-between">
          <Rating value={item.rating} />
          <span className="text-[1.8rem] mr-[2rem]   font-bold">
            ${item.price}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default Product;
