import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { ToastContainer, toast } from "react-toastify";
import { posts } from "@service";
import { Header, Footer } from "@components";
import { Card } from "@ui";
import { MainSection, Container, GridPostCards, Section } from "@containers";

const App = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuidv4(),
      title: title,
      body: description,
    };

    if (newPost.title.trim().length === 0 || newPost.body.trim().length === 0) {
      alert("Title and description are required");
      return;
    }

    posts.CREATE(newPost).then((res) => {
      console.log(res);
      // toast.success("Succeffully created");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    });
  };

  const deletePost = (id) => {
    posts.DELETE(id).then((res) => {
      console.log(res);
      window.location.href = "/";
    });
  };

  useEffect(() => {
    posts
      .GET()
      .then((res) => {
        setPost(res.data);
        setIsLoading(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(true);
      });
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <Header />
      <MainSection>
        <Section>
          <Container>
            <div className="p-4 shadow-lg border rounded-2xl my-4">
              <h1 className="text-2xl font-semibold mb-3">Create post</h1>
              <form onSubmit={createPost}>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  className="px-3 py-2 mb-4 block border w-full focus:ring-2 ring-green-500 outline-none rounded-md"
                  placeholder="Enter post title"
                />
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  cols="30"
                  rows="4"
                  className="px-3 py-2 block border w-full focus:ring-2 ring-green-500 outline-none rounded-md mb-3"
                ></textarea>

                <button className="bg-green-600 px-3 py-2 rounded-xl hover:bg-green-950 focus:ring-2 uppercase text-white">
                  Add post
                </button>
              </form>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <GridPostCards title="Posts">
              {isLoading ? (
                post.length &&
                post.map((item) => {
                  return (
                    <Card key={item.id} data={item} onDelete={deletePost} />
                  );
                })
              ) : (
                <Loader />
              )}
              {errorMessage && <h1>{errorMessage}</h1>}
            </GridPostCards>
          </Container>
        </Section>
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
