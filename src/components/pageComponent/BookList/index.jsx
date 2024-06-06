import { Link } from "react-router-dom";
import ButtonSeeMore from "../ButtonSeeMore";

// data sementara yang akan di munculkan ketika melakukan get API secara keseluruhan
const DataBook = [
  {
    id: 1,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 1",
  },
  {
    id: 2,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 2",
  },
  {
    id: 3,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 3",
  },
  {
    id: 4,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 4",
  },
  {
    id: 5,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 5",
  },
  {
    id: 6,
    image: "/public/assets/svg/bookList/book1.svg",
    title: "Book 6",
  },
];

const BookList = () => {
  return (
    <section>
      <div className="flex justify-center pt-[139px]">
        <h1 className="font-semibold text-[50px]">Books</h1>
      </div>
      <div className="flex justify-center">
        {/* Card list book */}
        <div className="grid grid-cols-3 gap-x-[60px] gap-y-[63px]">
          {DataBook.map((item, index) => (
            <div
              key={index}
              className="border px-[55px] pt-[37px] rounded-[40px] bg-[#006DB3]"
            >
              <img src={item.image} alt="" className="" />
              <h1 className="text-center text-white">{item.title}</h1>
              <div className="pt-[50px] pb-[14px] flex justify-end">
                <Link
                  to="/discover"
                  className=" py-1 px-[18px] rounded-[20px] bg-white font-bold"
                >
                  Borrow
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonSeeMore to="/books" />
    </section>
  );
};

export default BookList;
