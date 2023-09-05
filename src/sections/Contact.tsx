// Button and ButtonType
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";

//Assets
import { professionals } from "../store/IMAGES";
import { mobileAssets } from "../store/IMAGES";

const filledButton: ButtonProps = {
  text: "Send",
  icon: false,
  style: "text-white px-14 py-4 justify-self-start",
  filled: true,
  color: "bg-Green",
};

function Contact() {
  return (
    <section className="text-Dark flex flex-col gap-4 place-items-center pt-16">
      <p className="text-sm">This is what we do</p>
      <h2 className="text-3xl grid text-center">
        <span>Business</span>
        <span>Cases</span>
      </h2>
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <div className="grid gap-10 mt-5">
        {professionals.map((person) => (
          <div
            key={person.id}
            className="flex flex-col place-items-center gap-2"
          >
            <img
              src={person.image}
              alt={`${person.name} photo`}
              className="mb-3"
            />
            <h3 className="text-xl">{person.name}</h3>
            <p>{person.position}</p>
          </div>
        ))}
      </div>
      <div className="bg-Creme mt-10 grid gap-6">
        <img src={mobileAssets.contact} alt="contact cover" />
        <h2 className="text-3xl py-10 mx-5">Request Callback</h2>
        <form action="" className="grid mx-5 gap-5 pb-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-5 py-4 rounded"
          />
          <input
            required
            type="text"
            placeholder="Enter email*"
            className="px-5 py-4 rounded"
          />
          <Button {...filledButton} />
        </form>
      </div>
    </section>
  );
}

export default Contact;
