// Bootstrap Icons
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

//Assets
import { cases } from "../store/IMAGES";

type CarouselProps = {
  currentCarousel: number;
  open: boolean;
  handleVisibility: () => void;
  next: () => void;
  previous: () => void;
};

function Carousel({
  currentCarousel,
  open,
  handleVisibility,
  next,
  previous,
}: CarouselProps) {
  return open ? (
    <div className="fixed inset-0 bg-backdrop text-white z-20 grid grid-cols-8 place-items-center">
      <button className="col-start-1 md:col-start-2" onClick={previous}>
        <ChevronLeft className="w-10 h-10" />
      </button>
      <img
        src={cases[currentCarousel].image}
        alt="cases[currentCarousel].image"
        className="w-full col-start-2 col-span-6 rounded shadow-2xl md:col-start-3 md:col-span-4 transition-transform duration-500 transform hover:scale-105 cursor-pointer"
        onClick={handleVisibility}
      />
      <button className="col-start-8 md:col-start-7" onClick={next}>
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  ) : null;
}

export default Carousel;
