import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonSeeMore = ({ to }) => {
  return (
    <div className="flex justify-end pr-16 pt-[56px]">
      <Link to={to} className="text-[30px] font-normal text-[#28B7D7]">
        See More...
      </Link>
    </div>
  );
};

ButtonSeeMore.propTypes = {
  to: PropTypes.string.isRequired,
};
export default ButtonSeeMore;
