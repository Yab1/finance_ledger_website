// Board and BoardType
import Board from "../atoms/Board";
import { BoardProps } from "../atoms/Board";

// Assets
import { desktopAssets, mobileAssets, tabletAssets } from "../store/IMAGES";

const BoardProp: BoardProps = {
  background: "bg-Blue",
  subtitle: "April 16 2020",
  title: "Blog Post One",
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
  body2:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
  text: "Read Our Blog",
  text2: "Hide",
  style:
    "hover:bg-white hover:border-Blue hover:text-Blue transition-colors duration-200 ease-in",
};

function Blog() {
  return (
    <section id="blog" className="md:flex md:flex-row-reverse">
      <picture>
        <source
          srcSet={mobileAssets["blog-post-mobile"]}
          media="(max-width:320px)"
        />
        <source
          srcSet={desktopAssets["blog-post-desktop"]}
          media="(max-width:425px)"
        />
        <source
          srcSet={tabletAssets["blog-post-tablet"]}
          media="(min-width:321px) and (max-width:768px)"
        />
        <source
          srcSet={desktopAssets["blog-post-desktop"]}
          media="(min-width:769px)"
        />
        <img alt="Hero section background" />
      </picture>
      <Board {...BoardProp} />
    </section>
  );
}

export default Blog;
