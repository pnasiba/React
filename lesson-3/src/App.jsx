import { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(1);
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <div className="card shadow-lg p-6 my-5 rounded-lg w-[500px] mx-auto">
          <div className="p-4 rounded-2xl bg-indigo-500 text-center mx-auto text-white">
            {number}
          </div>

          <div className="flex gap-[40px] justify-center py-4">
            <button
              onClick={() => setNumber(number++)}
              className="px-3 py-2 rounded-2xl focus:ring-2 bg-green-600 text-white my-3"
            >
              INCREMENT
            </button>
            <button
              onClick={() => setNumber(number--)}
              className="px-3 py-2 rounded-2xl focus:ring-2 bg-red-600 text-white my-3"
            >
              DECREMENT
            </button>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="px-6 py-2 rounded-2xl focus:ring-2 bg-blue-600 text-white mb-3 "
          >
            TOGGLE
          </button>

          {toggle && 
          
          (
            <div className="bg-slate-200 p-5 rounded-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              praesentium qui deleniti, tenetur quis laborum quae at itaque
              asperiores alias totam dicta blanditiis quo earum odit dolor
              quidem laboriosam possimus necessitatibus corporis consequatur
              corrupti ex. Doloremque atque quam harum esse unde? Eum pariatur
              optio doloremque perferendis nemo hic reprehenderit nisi explicabo
              error delectus, natus beatae aperiam recusandae libero, quaerat
              quia. Autem laborum minus assumenda beatae saepe facilis voluptas
              nihil provident vel debitis dolorum sequi nostrum ab a vero, hic
              ipsa distinctio non id iusto esse voluptates impedit! Maxime iusto
              laboriosam molestiae autem recusandae aut a fugit ea voluptatum
              nesciunt adipisci velit repellendus sed repudiandae natus
              voluptate officiis fuga, cumque suscipit possimus nulla! Itaque,
              id soluta eveniet laboriosam iste suscipit cumque nam voluptatem
              dolore ipsam corporis quas dolores, rem, architecto eligendi? Esse
              aliquid iste, aspernatur voluptates exercitationem dolore nihil
              laudantium illum accusamus dolorum consequuntur quisquam. Beatae
              quasi illum eveniet asperiores mollitia vel ratione quo culpa,
              tenetur incidunt aperiam corrupti inventore iste tempore, sapiente
              maiores molestias veniam. Molestias culpa exercitationem sint?
              Nostrum, architecto sint alias nisi voluptatum nobis itaque culpa
              labore magni molestias illo magnam voluptates maxime adipisci, vel
              accusantium ducimus iure consequuntur sequi facere, fugit ad?
              Quaerat earum error illo libero architecto sint eveniet similique
              temporibus minus culpa aliquid voluptates nihil numquam quidem,
              doloribus eligendi amet laboriosam a dolor? Laudantium pariatur
              repellendus vero alias quia inventore, consequuntur sit dolorum
              magnam deserunt, magni iusto amet numquam? Molestiae vitae et
              consequatur laudantium nemo eligendi tempore excepturi odio
              tempora incidunt, voluptatum deleniti aspernatur laborum minima
              recusandae error explicabo optio nam. Deleniti sapiente alias quo
              quidem consequatur quos ipsum numquam debitis tenetur, cupiditate
              molestias suscipit veritatis dolore deserunt odio error quaerat?
              Dolorum, hic. Nisi sunt repudiandae itaque expedita quod eligendi,
              odio iusto numquam eius cupiditate in minima vero dolores amet
              facilis ipsam possimus iure eum provident perspiciatis esse magni
              quo nobis. Quas, voluptate odit consectetur quos totam vitae animi
              perspiciatis sapiente tempore veritatis delectus earum consequatur
              assumenda mollitia pariatur dicta itaque reprehenderit modi, dolor
              eaque blanditiis! Est, unde?
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
