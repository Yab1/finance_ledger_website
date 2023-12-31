import { logo } from "../store/IMAGES";

function Header() {
  return (
    <header className="grid grid-cols-6 gap-y-4 md:grid-cols-12 w-full">
      <div className="col-span-full col-start-1 flex items-end gap-2 md:col-span-5">
        <img src={logo} alt="finance ledger logo" />
        <h2 className="text-dark-green text-2xl md:text-3xl">
          Finance <span className="text-white">Ledger</span>
        </h2>
      </div>
      <nav className="col-span-full md:col-span-5 md:col-start-8 self-center lg:col-start-10">
        <ul className="grid grid-cols-5 text-sm md:text-base justify-items-center">
          <li className="hover:text-light-green transition-colors duration-200 ease-in">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-light-green transition-colors duration-200 ease-in">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-light-green transition-colors duration-200 ease-in">
            <a href="#cases">Cases</a>
          </li>
          <li className="hover:text-light-green transition-colors duration-200 ease-in">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:text-light-green transition-colors duration-200 ease-in">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
