// Organisms
import Header from "../organisms/Header";

// Button and ButtonType
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";

// Assets
import { mobileAssets } from "../store/IMAGES";

const filledButton: ButtonProps = {
  text: "Read More",
  icon: true,
  style: "row-start-5",
  filled: true,
  color: "bg-Green",
};

function Hero() {
  return (
    <section className="relative px-5 pt-5 text-white grid h-fit grid-rows-5 place-items-center mb-16">
      <picture className="absolute inset-0 -z-10">
        <source srcSet={mobileAssets.hero} media="(max-width:320px)" />
        <img alt="Hero section background" />
      </picture>
      <Header />
      <h2 className="font-semibold text-4xl text-center grid gap-2 row-start-3">
        <span>The Sky Is</span>
        <span>The Limit</span>
      </h2>
      <p className="text-xl text-center row-start-4 ">
        We provide world class financial assistance
      </p>
      <Button {...filledButton} />
    </section>
  );
}

export default Hero;
