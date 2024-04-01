import Header from "@cm/header";
import Footer from "@cm/footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="main">
          <div className="container">
            <h1 className="bg-red-600">Home page</h1>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
