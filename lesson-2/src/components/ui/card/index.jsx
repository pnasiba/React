const index = ({ data: {image, title, description, price} }) => {



  return (
    <div className="card shadow-lg w-[300px] border p-[10px] rounded-lg mb-4">
      <img src={image} alt="photo" className="h-[200px] w-[200px] mx-auto"/>

      <p className="text-[14px] pt-[20px] mb-4 font-medium text-center w-[250px] mx-auto">
        {title}
      </p>

      <p>
        <span className="font-bold text-[16px]">Price:</span> {price}
      </p>

      <p className="text-[15px] h-[430px]">
        <span className="font-bold text-[16px]">Description: </span>{description}
      </p>
    </div>

    
  );
};

export default index;
