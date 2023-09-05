import { logo } from "../store/IMAGES";

function Header() {
  return (
    <header className="grid grid-cols-6 gap-y-4">
      <div className="col-span-full flex items-end gap-2">
        <img src={logo} alt="finance ledger logo" />
        <h2 className="text-Green text-2xl">
          Finance <span className="text-white">Ledger</span>
        </h2>
      </div>
      <nav className="col-span-full">
        <ul className="grid grid-cols-5 text-sm">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#cases">Cases</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
