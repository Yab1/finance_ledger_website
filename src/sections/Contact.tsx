// Button and ButtonType
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";

// Bootstrap Icons
import { Facebook, Twitter, Linkedin, Youtube } from "react-bootstrap-icons";

//Assets
import { desktopAssets, professionals, tabletAssets } from "../store/IMAGES";
import { mobileAssets } from "../store/IMAGES";

const filledButton: ButtonProps = {
  text: "Send",
  icon: false,
  style: "text-white px-14 py-4 justify-self-start md:px-10 md:py-2",
  filled: true,
  color: "bg-Green",
};

function Contact() {
  return (
    <section
      id="contact"
      className="text-Dark flex flex-col gap-4 place-persons-center pt-16 text-center"
    >
      <p className="text-sm md:text-base">Who we are</p>
      <h2 className="text-3xl md:text-4xl grid">
        <span>Our Professional</span>
        <span>Team</span>
      </h2>
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <div className="grid gap-3 mt-5 w-full md:grid-cols-3 px-5">
        {professionals.map((person) => (
          <div className="flex flex-col" key={person.id}>
            <button className="relative scale-y group before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Dark before:opacity-50 before:origin-top  before:transition-transform before:duration-500 hover:before:origin-bottom hover:transition-transform hover:duration-500">
              <img
                src={person.image}
                alt={`image ${person.image}`}
                className="w-full"
              />
              <div className="flex gap-5 place-items-center justify-center text-white absolute w-full inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
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
            </button>
            <h3 className="text-xl text-center mt-3 mb-1">{person.name}</h3>
            <p className="text-center mb-5">{person.position}</p>
          </div>
        ))}
      </div>
      <div className="bg-Creme mt-10 pb-10 flex flex-col gap-6 md:flex-row md:gap-0 md:pb-0">
        <picture className="flex-1">
          <source
            srcSet={mobileAssets["contact-mobile"]}
            media="(max-width:320px)"
          />
          <source
            srcSet={desktopAssets["contact-desktop"]}
            media="(max-width:425px)"
          />
          <source
            srcSet={tabletAssets["contact-tablet"]}
            media="(max-width:768px)"
          />
          <source
            srcSet={desktopAssets["contact-desktop"]}
            media="(min-width:769px)"
          />
          <img alt="Hero section background" />
        </picture>
        <div className="mx-5 flex-1 flex flex-col place-content-center md:mx-7 gap-10">
          <h2 className="text-3xl text-start">Request Callback</h2>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="px-5 py-4 rounded w-full"
            />
            <input
              required
              type="text"
              placeholder="Enter email*"
              className="px-5 py-4 rounded"
            />
            <Button {...filledButton} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
