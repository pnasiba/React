import "./style.scss";

const index = ({changeColor}) => {
  return (
    <div>
      <button
        className="bg-green-400 border p-3 mt-5"
        onClick={() => changeColor("black")}
      >
        Change Color
      </button>
    </div>
  );
};

export default index;
