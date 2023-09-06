// Board and BoardType
import Board from "../atoms/Board";
import { BoardProps } from "../atoms/Board";

// Assets
import { mobileAssets, tabletAssets, desktopAssets } from "../store/IMAGES";

const BoardProp: BoardProps = {
  background: "bg-dark-green",
  subtitle: "What you are looking for",
  title: "We provide bespoke solutions",
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
  text: "Read More",
  style:
    "hover:bg-white hover:border-dark-green hover:text-dark-green transition-colors duration-200 ease-in",
};

function About() {
  return (
    <section id="about" className="md:flex">
      <picture className="flex-1">
        <source
          srcSet={mobileAssets["group-photo-mobile"]}
          media="(max-width:320px)"
        />
        <source
          srcSet={desktopAssets["group-photo-desktop"]}
          media="(max-width:425px)"
        />
        <source
          srcSet={tabletAssets["group-photo-tablet"]}
          media="(max-width:768px)"
        />
        <source
          srcSet={desktopAssets["group-photo-desktop"]}
          media="(min-width:769px)"
        />
        <img alt="Hero section background" />
      </picture>
      <Board {...BoardProp} />
    </section>
  );
}

export default About;
