import { socials } from "../store/IMAGES";

function Footer() {
  return (
    <footer className="bg-Dark text-white grid place-items-center py-7 gap-5">
      <div className="flex gap-5 place-items-center">
        {socials.map((social) => (
          <a key={social.id} href={social.url} target="_blank">
            <img src={social.icon} alt={`${social.icon} icon`} />
          </a>
        ))}
      </div>
      <p>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
}

export default Footer;
