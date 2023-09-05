// Board and BoardType
import Board from "../atoms/Board";
import { BoardProps } from "../atoms/Board";

// Assets
import { mobileAssets } from "../store/IMAGES";

const BoardProp: BoardProps = {
  background: "bg-Blue",
  subtitle: "April 16 2020",
  title: "Blog Post One",
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
  text: "Read Our Blog",
};

function Blog() {
  return (
    <section>
      <picture>
        <source srcSet={mobileAssets["blog-post"]} media="(max-width:320px)" />
        <img alt="Hero section background" />
      </picture>
      <Board {...BoardProp} />
    </section>
  );
}

export default Blog;
