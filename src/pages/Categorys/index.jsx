import Layout from "../../Layout";
import CategorysCard from "../../components/pageComponent/CategorysCard";
import { dataScience  } from "./category.mock";

const Categorys = () => {
  return (
    <Layout>
      <CategorysCard data={dataScience} title="Science" />
      <CategorysCard data={dataScience} title="Technology" />
      <CategorysCard data={dataScience} title="Education" />
    </Layout>
  );
};

export default Categorys;
