import Profile from "../../components/pageComponent/Profile";
import History from "../../components/pageComponent/History";
import Layout from "../../Layout";

const HistoryBook = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Layout>
        <div className="relative">
          <div className="bg-[#006DB3] text-white py-4 px-6">
            <h2 className="text-3xl font-semibold lg:ml-[340px] xl:ml-[380px]">History</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 relative z-10">
              <div className="bg-white p-4 rounded-3xl lg:ml-[30px] lg:mr-[35px] mt-[-40px] shadow-lg">
                <Profile />
              </div>
            </div>
            <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
              <div className="bg-[#E3E9FF] w-full lg:w-auto py-2 px-4 lg:px-[12px] text-2xl mt-10 lg:ml-[30px] lg:rounded-3xl">
                <h2 className="text-2xl text-[#6477DB] font-semibold">
                  History Peminjaman Buku
                </h2>
              </div>
              <div className="lg:ml-[30px] mt-4">
                <History />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HistoryBook;
