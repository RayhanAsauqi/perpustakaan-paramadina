const Profile = () =>  {
  return (
    <div className="text-center">
      <img
        className=" rounded-full mx-auto"
        src="https://via.placeholder.com/150"
        alt="User Profile"
      />
      <h2 className="text-xl font-semibold mt-4">M Dipo Kusumo</h2>
      <p className="text-gray-500">Teknik Informatika</p>
      <p className="text-gray-500">Mahasiswa</p>
      <p className="text-blue-500 mt-2 PX-[29PX]">rizki.pratama@students.edu</p>
      <div className="flex justify-center">
        <div className="relative w-[120px] flex justify-center">
          <div className="absolute inset-0 bg-[#6FCF97] opacity-20 rounded-lg"></div>
          <div className="relative ">
            <span className="text-blue-700 ">Mahasiswa</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="flex items-center  border py-[6px] pl-[13px] pr-[147px] gap-[17px] rounded-full bg-[#E3E9FF] mt-[179px] mb-[405px]">
          <img
            src="../../../../public/assets/svg/history/file-icon.svg"
            alt=""
          />
          <span className="text-[#6477DB]">History</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
