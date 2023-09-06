// Organisms
import Header from "../organisms/Header";

// Button and ButtonType
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";

const filledButton: ButtonProps = {
  text: "Read More",
  icon: true,
  style: "hover:bg-light-green transition-colors duration-200 ease-in",
  filled: true,
  color: "bg-dark-green",
};

function Hero() {
  return (
    <section
      id="home"
      className="bg-hero bg-cover bg-no-repeat p-5 text-white h-screen flex flex-col"
    >
      <Header />
      <div className="h-full flex flex-col place-items-center place-content-center gap-5">
        <h2 className="font-semibold text-4xl text-center grid gap-2 md:text-5xl md:flex">
          <span>The Sky Is</span>
          <span>The Limit</span>
        </h2>
        <p className="text-xl text-center grid md:text-3xl lg:flex">
          <span>We provide world</span>
          <span>class financial assistance</span>
        </p>
        <Button {...filledButton} />
      </div>
    </section>
  );
}

export default Hero;
