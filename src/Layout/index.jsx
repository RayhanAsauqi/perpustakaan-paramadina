import PropTypes from "prop-types";
import Navbar from "../components/pageComponent/Navbar";
import Footer from "../components/pageComponent/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showDiscover, setDiscover] = useState(false);
  const [categoryText, setCategoryText] = useState("");

  useEffect(() => {
    if (location.pathname === "/discover") {
      setDiscover(true);
      setCategoryText("Discover");
    } else if (location.pathname.startsWith("/category")) {
      setDiscover(true);
      const category = location.pathname.split("/")[2];
      setCategoryText(`Category`);
      return category;
    } else {
      setDiscover(false);
      setCategoryText("");
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {showDiscover && (
        <>
          <div className="flex items-center justify-between px-[60px]">
            <h1 className="font-bold text-[45px] pt-[27px] pb-[26px]">
              {categoryText}
            </h1>
            {location.pathname === "/discover" && (
              <div className="flex items-center relative">
                <input
                  type="text"
                  placeholder="Search Catalogue"
                  className="px-4 py-2 rounded-3xl text-black outline-none border w-[334px] bg-gray-100"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pr-4"
                />
              </div>
            )}
          </div>
          <div className="w-full border-t-[3px] border-[#006DB3] p-1 pb-9"></div>
        </>
      )}
      <div>{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
