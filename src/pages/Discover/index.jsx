import Layout from "../../Layout";
import CardDiscover from "../../components/CardDiscover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const dataBooks = [
  {
    id: 1,
    title: "Sejarah Dunia Yang Disembunyikan",
    author: "Jonathan Black",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
  {
    id: 2,
    title: "Sejarah Dunia Yang Disembunyikan",
    author: "Jonathan Black",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
  {
    id: 3,
    title: "Grief Psychotheraphy",
    author: "Totok S. Wiryasaputra",
    image: "/public/assets/svg/discover/grief.svg",
  },
  {
    id: 4,
    title: "Grief Psychotheraphy",
    author: "Totok S. Wiryasaputra",
    image: "/public/assets/svg/discover/grief.svg",
  },
  {
    id: 5,
    title: "So You Want to Be a Librarian",
    author: "Lauren Pressley",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
  {
    id: 6,
    title: "So You Want to Be a Librarian",
    author: "Lauren Pressley",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
  {
    id: 7,
    title: "Sejarah Dunia Yang Disembunyikan",
    author: "Jonathan Black",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
  {
    id: 8,
    title: "Sejarah Dunia Yang Disembunyikan",
    author: "Jonathan Black",
    image: "/public/assets/svg/discover/sejarah-dunia.svg",
  },
];

const Discover = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between px-[60px]">
        <h1 className="font-bold text-[45px] pt-[27px] pb-[26px]">Discover</h1>
        <div className=" flex items-center relative ">
          <input
            type="text"
            placeholder="Search Catalogue"
            className="px-4 py-2  rounded-3xl text-black  outline-none border w-[334px] bg-gray-100"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pr-4"
          />
        </div>
      </div>
      <div className="w-full border-t-[3px] border-[#006DB3] p-1 pb-9"></div>
      <CardDiscover dataBooks={dataBooks} />
    </Layout>
  );
};

export default Discover;
