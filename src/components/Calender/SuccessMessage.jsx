import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <div className="text-center">
      <div className="bg-[#006DB3] rounded-full flex justify-center items-center w-40 h-40 mx-auto">
        <img
          src="../../../public/assets/svg/success/success-message.svg"
          alt="check success"
          className="w-20 h-20"
        />
      </div>
      <h2 className="text-[39.99px] font-semibold   mt-6">Form Successfuly</h2>
      <p className="mt-4 text-[#656565] text-xl font-sans font-normal">
        Silahkan mengambil buku di perpustakaan Universitas Paramadina.
      </p>

      <div className="mt-10">
        <Link
          to="/"
          className="py-3 px-5 rounded-full bg-[#006DB3] text-white "
        >
          Return Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
