import { useEffect, useState } from "react";
import { req } from "@axios";
import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    req.get("/posts").then((response) => {
      setData(response)
    });
  }, []);

  return (
    <>
      <Header />
      <MainSection>
        <section className="intro">
          <Container>
            <div className="grid grid-cols-4 gap-4 my-4">
            {data?.data.map((val) => (
                <div className="card w-[300px] bg-white shadow-lg p-3">
                  <h5 className="font-semibold mb-4">
                    Title: {val.title}
                  </h5>

                  <p>
                    Body: {val.body}
                  </p>
                </div>
            ))}
            </div>
          </Container>
        </section>
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
