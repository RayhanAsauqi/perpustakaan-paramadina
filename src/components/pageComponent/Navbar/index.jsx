import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (paths) => {
    return paths.includes(location.pathname)
      ? "py-[18.5px] text-black"
      : "py-[18.5px] text-white";
  };

  return (
    <section className="bg-[#006DB3] flex justify-between items-center px-16 ">
      {/* Nav logo  */}
      <img
        src="../../../public/assets/svg/logo-parmadina.svg"
        alt="paramadina"
      />
      {/* Nav Menu */}
      <div className="list-none flex justify-center gap-[30px] py-[18px]">
        <Link to="/" className={getLinkClass(["/"])}>
          Home
        </Link>
        <Link
          to="/discover"
          className={getLinkClass([
            "/discover",
            "/discover/detail",
            "/discover/detail/form-peminjaman",
          ])}
        >
          Books
        </Link>

        <Link to="/history" className={getLinkClass(["/history"])}>
          History
        </Link>
        <Link to="/category" className={getLinkClass(["/category"])}>
          Category
        </Link>
      </div>
      {/* Nav button sign  */}
      <Link
        to="/login"
        className="border bg-white rounded-[26px] py-[14.5px] px-[38.5px]"
      >
        Sign In
      </Link>
    </section>
  );
};

export default Navbar;
