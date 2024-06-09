import Profile from "../../components/pageComponent/Profile";
import History from "../../components/pageComponent/History";
import Layout from "../../Layout";

function HistoryBook() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Layout>
        <div className="relative">
          <div className="bg-[#006DB3] text-white py-4 px-6">
            <h2 className="text-3xl font-semibold ml-[340px]">History</h2>
          </div>
          <div className="flex ">
            <div className="w-1/4 relative z-10  ">
              <div className="bg-white p-4 rounded-3xl ml-[30px] mr-[35px] mt-[-40px] shadow-lg">
                <Profile />
              </div>
            </div>

            <div className="w-2/3 ">
              <div className="bg-[#E3E9FF] w-[340px] py-2 px-[12px] text-2xl mt-10 rounded-3xl">
                <h2 className="text-2xl text-[#6477DB] font-semibold ">
                  History Peminjaman Buku
                </h2>
              </div>
              <History />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HistoryBook;
