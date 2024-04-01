const index = ({ data: { image, title, description, category, price } }) => {
  return (
    <div className="card shadow-lg w-[300px] border p-[15px] rounded-lg mb-6">
      <img src={image} alt="photo" className="h-[200px] w-[200px] mx-auto" />

      <p className="text-[14px] pt-[20px] mb-4 font-medium text-center w-[250px] mx-auto">
        {title.length > 30 ? title.slice(0, 23) + " ..." : title}
      </p>

      <p className="font-bold text-[16px] ">
        Price:
        <span className="font-semibold text-[16px]"></span> {price}$</p>

      <p className="text-[16px] font-bold mb-1">
        Category:
        <span className="text-lime-600 ml-2">{category.toUpperCase()}</span>
      </p>

      <p className="text-[16px] font-bold">
        Description:{" "}
        <span className="font-bold text-[14px] text-gray-500">
          {description.length > 150
            ? description.slice(0, 130) + " ..."
            : description}
        </span>
      </p>
    </div>
  );
};

export default index;
