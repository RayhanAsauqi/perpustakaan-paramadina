const AboutUs = () => {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="pt-[41px] font-semibold text-[35px]">About Us</h1>
      </div>
      <div className="px-[68px] flex gap-16 items-center pt-[116px]">
        <h1 className="text-xl font-semibold">
          Selamat datang di Perpustakaan Universitas Parmadina. Kami adalah
          jantung intelektualitas di tengah-tengah kampus, tempat di mana
          mahasiswa, dosen, dan staf dapat mengeksplorasi dunia pengetahuan.
          Dengan koleksi yang luas dan layanan yang inovatif, kami berkomitmen
          untuk mendukung pengembangan akademik dan profesional setiap anggota
          komunitas kami. Mari bergabung dengan kami dalam petualangan belajar
          yang tak terbatas!
        </h1>
        <img src="../../../public/assets/svg/about-us.svg" alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
