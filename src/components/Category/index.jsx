import ButtonSeeMore from "../ButtonSeeMore";

const dataCategoryBook = [
  {
    id: 1,
    image: "/public/assets/svg/category/category-book.svg",
    title: "Science",
  },
  {
    id: 2,
    image: "/public/assets/svg/category/category-book.svg",
    title: "Physics",
  },
  {
    id: 2,
    image: "/public/assets/svg/category/category-book.svg",
    title: "Technology",
  },
];

const Category = () => {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="pt-[41px] font-semibold text-[35px]">Category</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-[60px] gap-y-[63px]">
          {dataCategoryBook.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="categoryScience" />
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <ButtonSeeMore to="/category" />
    </section>
  );
};

export default Category;
