import "./style.scss";
import Button from "@ui/button"

const index = ({changeColor}) => {
    return (
      <div className="bg-red-400 p-5">
        <h1>CARD</h1>
        <Button changeColor={changeColor} />
      </div>
    );
};

export default index;