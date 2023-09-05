//Assets
import { cases } from "../store/IMAGES";

function Cases() {
  return (
    <section className="text-Dark flex flex-col gap-4 place-items-center py-16">
      <p className="text-sm">This is what we do</p>
      <h2 className="text-3xl grid text-center">
        <span>Business</span>
        <span>Cases</span>
      </h2>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <div className="grid gap-2 mt-5">
        {cases.map((item) => (
          <img key={item.id} src={item.image} alt={`image ${item.image}`} />
        ))}
      </div>
    </section>
  );
}

export default Cases;
