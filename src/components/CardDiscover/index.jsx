import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardDiscover = ({ dataBooks }) => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-x-44 gap-y-9 ">
          {dataBooks.map((item, index) => (
            <div
              key={index}
              className="flex border py-4 w-[572px] px-[30px] gap-5 rounded-[40px] drop-shadow shadow-custom-drop items-center"
            >
              <img src={item.image} alt="" />
              <div>
                <h1 className="font-bold text-[25px] w-[368px] pb-[118px] font-sans">
                  {item.title}
                </h1>
                <div className="flex items-center">
                  <img
                    src="../../../public/assets/svg/discover/profile-author.svg"
                    alt=""
                  />
                  <span className="font-sans">{item.author}</span>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/discover/detail"
                    className="text-white bg-[#006DB3] rounded-[20px] mr-[27px]"
                  >
                    <span className="py-1 px-[19.5px] font-sans">Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CardDiscover.propTypes = {
  dataBooks: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardDiscover;
