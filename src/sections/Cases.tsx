import { useState } from "react";

// organisms
import Carousel from "../organisms/Carousel";

//Assets
import { cases } from "../store/IMAGES";

function Cases() {
  const [open, setOpen] = useState(false);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  function handleVisibility() {
    setOpen(!open);
  }

  function handleCarousel(id: number) {
    handleVisibility();
    setCurrentCarousel(id);
  }

  function next() {
    switch (currentCarousel) {
      case 5:
        setCurrentCarousel(1);
        break;
      default:
        setCurrentCarousel((prev) => prev + 1);
    }
  }
  function previous(): void {
    switch (currentCarousel) {
      case 1:
        setCurrentCarousel(5);
        break;
      default:
        setCurrentCarousel((prev) => prev - 1);
    }
  }

  return (
    <section
      id="cases"
      className="text-Dark flex flex-col gap-4 place-items-center py-16 px-5 text-center"
    >
      <p className="text-sm md:text-base">This is what we do</p>
      <h2 className="text-3xl md:text-4xl grid md:flex md:gap-2">
        <span>Business</span>
        <span>Cases</span>
      </h2>
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <div className="grid gap-3 mt-5 w-full md:grid-cols-3">
        {cases.map((item) => (
          <button
            key={item.id}
            onClick={() => handleCarousel(item.id)}
            className="shadow-xl hover:scale-95 transition-transform duration-200 ease-in"
          >
            <img
              src={item.image}
              alt={`image ${item.image}`}
              className="w-full"
            />
          </button>
        ))}
      </div>
      <Carousel
        open={open}
        currentCarousel={currentCarousel}
        handleVisibility={handleVisibility}
        next={next}
        prev={previous}
      />
    </section>
  );
}

export default Cases;
