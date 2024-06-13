import { useState } from "react";
import Layout from "../../Layout";
import CardDiscover from "../../components/CardDiscover";
import Pagination from "../../components/pageComponent/Pagination";
import { dataBooks } from "./discover.mock";

const Discover = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;
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
