import Extra from "@component/extra/extra.jsx";
import { useState }  from "react"



const App = () => {

  let [color, setColor] = useState('white')

  return (
    <div className="container mx-auto">
      <div className="card shadow my-3 p-5" style={{background:color}}>
        <h1>APP</h1>
        <Extra changeColor={setColor} />
      </div>
    </div>
  );
};

export default App;