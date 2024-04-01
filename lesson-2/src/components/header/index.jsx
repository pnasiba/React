import logo from "@img/react.svg"

function index() {
  return <>
    <header className="bg-slate-700 py-6 fixed top-0 w-full">
        <div className="container mx-auto">
            <nav className="flex justify-between">
                <img src={logo} alt="logo" />

                <ul className="flex gap-[30px] text-white cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </nav>
        </div>
    </header>
  </>
}

export default index;
