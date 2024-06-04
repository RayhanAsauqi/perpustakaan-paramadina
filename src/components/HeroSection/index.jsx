import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <>
      {/* set bg-hero-section */}
      <div className="relative bg-hero-section bg-cover bg-center h-full min-h-screen">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          {/* hero section content */}
          <h1 className="text-4xl font-bold">PERPUSTAKAAN PARAMADINA</h1>
          <p className="mt-4 text-lg font-bold text-[25px] px-[87px]">
            &quot;Selamat datang di perpustakaan online Universitas Paramadina,
            mari kita bersama-sama
            <br />
            menjelajahi dunia literasi! &quot;
          </p>
          <button className="mt-6 px-6 py-3 bg-[#006DB3] hover:bg-blue-500 text-white font-semibold rounded-lg shadow-inner">
            Borrow
          </button>
        </div>
        {/* Input search catalogue dan Books */}
        <div className="absolute top-0 right-0 mt-6 flex justify-end pr-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search Catalogue"
              className="px-4 py-2 pr-10 rounded-lg text-black bg-white"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="relative flex items-center ml-4">
            <input
              type="text"
              placeholder="Search Book"
              className="px-4 py-2 pr-10 rounded-lg text-black bg-white"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
