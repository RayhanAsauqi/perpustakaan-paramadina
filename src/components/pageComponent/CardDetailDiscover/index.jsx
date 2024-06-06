import { Link } from "react-router-dom";

const CardDetailDiscover = () => {
  return (
    <div className="flex mx-[60px] py-[18px] px-[26px] gap-[136px] border rounded-[20px] drop-shadow-2xl shadow-inner">
      <img
        src="../../../public/assets/svg/discover/sejarah-dunia.svg"
        alt="discover detail"
        width={386}
        height={596}
        className=" shadow-bottom-right rounded-xl"
      />
      <div>
        <h1 className="font-sans font-bold text-[40px] w-[613px]">
          Sejarah Dunia Yang Disembunyikan
        </h1>
        <div className="grid pt-3 pb-2">
          <span className="font-medium text-lg font-sans">
            Kode Buku :{" "}
            <span className="font-semibold  text-lg font-sans">123123123</span>
          </span>
          <span className="font-medium text-lg font-sans">
            Penulis :{" "}
            <span className="font-semibold  text-lg font-sans">
              Jonathan Black
            </span>
          </span>
          <span className="font-medium text-lg font-sans">
            Tahun Terbit :{" "}
            <span className="font-semibold  text-lg font-sans">2021</span>
          </span>
        </div>
        <Link
          to="/discover/detail/form-peminjaman"
          className="py-[14px] px-[53.5px] bg-[#006DB3] rounded-[20px] text-white font-sans mt-10 grid w-[169px]"
        >
          Borrow
        </Link>
      </div>
    </div>
  );
};

export default CardDetailDiscover;
