import { useState } from "react";
import Layout from "../../Layout";
import CardDiscover from "../../components/CardDiscover";
import Pagination from "../../components/pageComponent/Pagination";
// import Pagination from "../../src/components/pageComponent/index.jsx";

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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <Layout>
      <CardDiscover dataBooks={dataBooks} />
      <div className="flex justify-end pr-20">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
};

export default Discover;
