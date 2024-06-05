const Footer = () => {
  return (
    <section>
      <div className="bg-[#006DB3] h-[500px] pt-[59px] px-[55px] mt-[107px]">
        <div className=" flex justify-between ">
          <h1 className="text-white font-bold text-[42px]">
            Perpustakaan <br /> Paramadina
          </h1>
          <div className="text-white">
            <h1 className="font-bold text-[42px]">Contact Us</h1>
            <img src="../../../public/assets/svg/footer/gmail.svg" alt="gmail" className="pt-[22px]" />
          </div>
        </div>
        <div className="pt-[123px] pb-[17px]">
          <p className="text-white font-bold text-[30px]">
            mari kita bersama-sama menjelajahi <br /> dunia literasi.”
          </p>
        </div>
        <hr />
        <p className="text-gray-300 font-normal text-base pt-[17px]">Copyright © 2024 APBO. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
