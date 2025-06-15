import { Link } from "react-router-dom";

const baseStyles =
  "text-[1.6rem] inline-block rounded-lg font-semibold transition duration-200 mt-2";

const variants = {
  submit:
    "bg-[#cc3213] px-[1rem] text-[#f5ebdc] hover:bg-[#b82e12] transition-all duration-200 px-6 py-[0.5rem]",
  back: "border border-[#5023143e] px-4 py-2 rounded-[2rem] hover:bg-[#5023143e]",
  update:
    "hover:bg-[#50231442] border border-[#5023143e] duration-200 transition-all font-bold px-6 py-2",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "primary",
  onClick,
  disabled,
}) => {
  const style = `${baseStyles} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
