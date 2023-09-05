//Assets
import { cases } from "../store/IMAGES";

function Cases() {
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
          <button key={item.id}>
            <img
              src={item.image}
              alt={`image ${item.image}`}
              className="w-full"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Cases;
