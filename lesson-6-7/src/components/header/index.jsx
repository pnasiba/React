import "./style.scss";
import { Container } from "@containers";
import logo from "@images/react.svg";

const index = () => {
  return (
    <>
      <header className="bg-slate-900 text-white">
        <Container>
          <nav className="flex justify-between h-[70px] items-center">
            <a href="./index.jsx" className="flex gap-2 items-center">
              <img src={logo} alt="logo" />
              DEMO
            </a>

            <ul className="flex gap-10">
              <li className="hover:text-slate-300 cursor-pointer">Post</li>
              <li className="hover:text-slate-300 cursor-pointer">Users</li>
              <li className="hover:text-slate-300 cursor-pointer">Login</li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default index;
