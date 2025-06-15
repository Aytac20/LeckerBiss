import React from "react";
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { GiFrenchFries } from "react-icons/gi";
const categories = [
  <>
    <GiHamburger className="inline mr-1" /> Burger
  </>,
  <>
    <RiDrinks2Fill className="inline mr-1" /> Drinks
  </>,
  <>
    <LuDessert className="inline mr-1" /> Desserts
  </>,
  <>
    <GiFrenchFries className="inline mr-1" /> Sides
  </>,
];

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    pages > 1 && (
      <nav
        aria-label="Page navigation example"
        className="w-full flex justify-center !my-[2rem]"
      >
        <ul className="pagination flex space-x-2 gap-4">
          {[...Array(pages).keys()].map((x) => (
            <li key={x + 1} className="page-item">
              <Link
                className={`page-link px-4 py-2 !rounded-lg !text-[1.5em] !flex !items-center !border-1 !border-[#50231433] gap-2 shadow-md !transition-all !duration-300 tracking-wide  ${
                  x + 1 === page
                    ? "!bg-[#502314] text-white"
                    : "!bg-[#fae4c6] text-[#502314] !hover:bg-[#50231446]"
                }`}
                to={!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
              >
                {categories[x] || x + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Paginate;
