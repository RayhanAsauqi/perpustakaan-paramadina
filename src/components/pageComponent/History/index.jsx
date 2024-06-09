import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../Dropdown";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const History = () => {
  const historyData = [
    {
      id: 1,
      code: "2914440384",
      name: "Sejarah Dunia Yang Disembunyikan",
      borrowDate: "02/06/2024",
      returnDate: "14/06/2024",
      fine: "Rp. 3000",
      status: "Terlambat",
    },
    {
      id: 2,
      code: "4013449971",
      name: "Milk and Honey",
      borrowDate: "12/05/2024",
      returnDate: "18/05/2024",
      fine: "",
      status: "Sudah Kembali",
    },
    {
      id: 3,
      code: "0376094284",
      name: "Grief Psychoteraphy",
      borrowDate: "15/06/2024",
      returnDate: "",
      fine: "",
      status: "Belum Kembali",
    },
    {
      id: 4,
      code: "4562457704",
      name: "So You want to be a Librarian",
      borrowDate: "15/06/2024",
      returnDate: "",
      fine: "",
      status: "Belum Kembali",
    },
    {
      id: 5,
      code: "1794000537",
      name: "Pembelajaran C++ Dasar",
      borrowDate: "26/05/2024",
      returnDate: "02/06/2024",
      fine: "",
      status: "Sudah Kembali",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto bg-white p-4 rounded-3xl shadow-lg mt-[26px] min-h-screen">
        {/* <div className="mt-4 grid  items-center justify-end pr-[84px] gap-[30px]"> */}
        <div className="grid grid-cols-2 mb-[37px]">
          <div>
            <Dropdown />
          </div>
          <div className="flex items-center gap-3 ">
            <div className="relative flex items-center  ">
              <input
                type="text"
                placeholder="Search for history"
                className="px-4 py-2 pr-10 rounded-lg text-black border-[#333333] bg-white outline-none w-[160px] border"
                style={{ fontSize: "0.875rem" }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <p className="text-2xl font-light font-sans">
              Total Denda: Rp. 3000
            </p>
          </div>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-2 font-light text-sm text-[#828282]">No</th>
              <th className="py-2 font-light text-sm text-[#828282]">
                Kode Buku
              </th>
              <th className="py-2 font-light text-sm text-[#828282]">
                Nama Buku
              </th>
              <th className="py-2 font-light text-sm text-[#828282]">
                Tanggal Pinjam
              </th>
              <th className="py-2 font-light text-sm text-[#828282]">
                Tanggal Kembali
              </th>
              <th className="py-2 font-light text-sm text-[#828282]">Denda</th>
              <th className="py-2 font-light text-sm text-[#828282]">Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={item.id}>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {index + 1}
                </td>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {item.code}
                </td>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {item.name}
                </td>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {item.borrowDate}
                </td>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {item.returnDate}
                </td>
                <td className="py-2 text-center text-sm font-light text-[]">
                  {item.fine}
                </td>
                <div className="py-[9px]">
                  <td
                    className={`py-2 px-4 text-center font-medium text-xs rounded-full my-2 ${
                      item.status === "Terlambat"
                        ? "bg-red-100 text-red-500"
                        : item.status === "Sudah Kembali"
                        ? "bg-green-100 text-green-500"
                        : "bg-yellow-100 text-yellow-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
