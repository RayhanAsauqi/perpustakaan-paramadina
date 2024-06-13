import PropTypes from "prop-types";

const CategorysCard = ({ data, title }) => {
  const additionalMarginTop =
    title === "Technology" || title === "Education" ? "mt-[96px]" : "";
  return (
    <div>
      <div className="flex items-center justify-between pr-[108px]">
        <h1
          className={`font-sans font-bold text-[22px] ml-20  ${additionalMarginTop}`}
        >
          {title}
        </h1>
        <button className="font-sans text-xl text-[#28B7D7] font-normal">View all</button>
      </div>
      <div className="flex gap-10 justify-center mt-[30px]">
        {data.map((item, index) => (
          <div key={index}>
            <div className=" rounded-xl shadow-custom-drop">
              <div className="py-4 px-[26px]">
                <img src={item.image} alt="science" />
                <h1 className="font-sans font-bold text-base text-center truncate">
                  {item.title}
                </h1>
                <span className="flex justify-center truncate ">
                  {item.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CategorysCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default CategorysCard;
