import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-[#006DB3] flex justify-between items-center px-16 ">
      <img src="../../../public/assets/svg/logo-parmadina.svg" alt="paramadina" />
      <div className="list-none flex justify-center gap-[30px] py-[18px]">
        <li className="py-[18.5px] text-white">Home</li>
        <li className="py-[18.5px] text-white">Aboute Us</li>
        <li className="py-[18.5px] text-white">History</li>
        <li className="py-[18.5px] text-white">Category</li>
      </div>

      <Link to="/login" className="border bg-white rounded-[26px] py-[14.5px] px-[38.5px]">Sign In</Link>
    </section>
  );
};

export default Navbar;
