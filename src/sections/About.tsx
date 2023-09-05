// Board and BoardType
import Board from "../atoms/Board";
import { BoardProps } from "../atoms/Board";

// Assets
import { mobileAssets } from "../store/IMAGES";

const BoardProp: BoardProps = {
  background: "bg-Green",
  subtitle: "What you are looking for",
  title: "We provide bespoke solutions",
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
  text: "Read More",
};

function About() {
  return (
    <section>
      <picture>
        <source
          srcSet={mobileAssets["group-photo"]}
          media="(max-width:320px)"
        />
        <img alt="Hero section background" />
      </picture>
      <Board {...BoardProp} />
    </section>
  );
}

export default About;
