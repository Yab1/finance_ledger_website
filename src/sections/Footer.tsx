// Bootstrap Icons
import { Facebook, Twitter, Linkedin, Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="bg-Dark text-white grid place-items-center py-7 gap-5">
      <div className="flex gap-5 place-items-center">
        <a
          href="#"
          target="_blank"
          className="hover:text-dark-green transition-colors duration-200 ease-in"
        >
          <Facebook size={30} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-dark-green transition-colors duration-200 ease-in"
        >
          <Twitter size={30} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-dark-green transition-colors duration-200 ease-in"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-dark-green transition-colors duration-200 ease-in"
        >
          <Youtube size={30} />
        </a>
      </div>
      <p>Copyright © 2023 - FinanceLedger</p>
    </footer>
  );
}

export default Footer;
