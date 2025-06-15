import { NavLink } from "react-router-dom";

const categories = ["burgers", "drinks", "desserts", "ramen"];

const AdminCategoryNav = () => (
  <div className="flex gap-4 mb-6">
    {categories.map((cat) => (
      <NavLink
        key={cat}
        to={`/admin/productlist/${cat}`}
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-bold border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-400"
        }
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </NavLink>
    ))}
  </div>
);
export default AdminCategoryNav;
