import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-[#006DB3] flex justify-between items-center px-16 ">
      
      {/* Nav logo  */}
      <img
        src="../../../public/assets/svg/logo-parmadina.svg"
        alt="paramadina"
      />
      {/* Nav Menu */}
      <div className="list-none flex justify-center gap-[30px] py-[18px]">
        <Link to="/" className="py-[18.5px] text-white">
          Home
        </Link>
        <Link to="/discover" className="py-[18.5px] text-white">
          Books
        </Link>
        <Link to="/history" className="py-[18.5px] text-white">
          History
        </Link>
        <Link to="/category" className="py-[18.5px] text-white">
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
