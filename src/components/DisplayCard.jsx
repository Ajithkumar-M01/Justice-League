import classNames from "classnames";
import { useProjectStore } from "./ProjectStore";
import superMan from "../assets/superman.jpg";
import batMan from "../assets/batman.jpg";
import wonderWoman from "../assets/wonderwoman.jpg";
import flash from "../assets/flash.jpg";
import aquaMan from "../assets/aquaman.jpg";
import greenLantern from "../assets/greenlantern.jpg";

const DisplayCard = ({ bgColor, children, id }) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  return (
    <div
      className={classNames(
        "h-full w-full rounded-2xl absolute inset-0 transition-opacity p-5",
        bgColor,
        inViewProject === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Project01Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-red-500">
      <div className="relative flex justify-evenly h-80">
        <img
          src={superMan}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-sky-600 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-sky-700 pl-60 py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p>Super Strength</p>
            <p>Flight</p>
            <p>Heat Vision</p>
            <p>X-ray Vision</p>
            <p>Super Speed</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name{" "}
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Clark Kent
          </span>
        </h3>
        <p className="text-center text-base bg-red-300 px-2 py-5 rounded-xl">
          The iconic Man of Steel with superhuman strength, flight, and other
          powers. A symbol of hope and justice.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project02Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-zinc-800">
      <div className="relative flex justify-evenly h-80">
        <img
          src={batMan}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-yellow-500 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-yellow-600 pl-60  py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p>Master Detective</p>
            <p>Martial Arts Master</p>
            <p>Stealth</p>
            <p>Advanced Technology</p>
            <p>Strategic Genius</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Bruce Wayne
          </span>
        </h3>
        <p className="text-center text-base bg-zinc-400 px-2 py-5 rounded-xl">
          The Dark Knight, a master detective and martial artist who fights
          crime in Gotham City.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project03Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-sky-800">
      <div className="relative flex justify-evenly h-80">
        <img
          src={wonderWoman}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-red-500 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-red-600 pl-60 py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p>Super Strength</p>
            <p>Flight</p>
            <p>Combat Skills</p>
            <p>Lasso of Truth</p>
            <p>Bracelets of Submission</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Diana Prince
          </span>
        </h3>
        <p className="text-center text-base bg-sky-300 px-2 py-5 rounded-xl">
          An Amazonian warrior princess with incredible strength and combat
          skills.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project04Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-amber-500">
      <div className="relative flex justify-evenly h-80">
        <img
          src={flash}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-sky-600 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-sky-700 pl-60 py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p> Super Speed</p>
            <p>Accelerated Healing</p>
            <p>Phasing</p>
            <p>Time Travel</p>
            <p>Speed Force Aura</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Barry Allen
          </span>
        </h3>
        <p className="text-center text-base bg-amber-200 px-2 py-5 rounded-xl">
          The fastest man alive, with the ability to move at superhuman speeds.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project05Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-green-500">
      <div className="relative flex justify-evenly h-80">
        <img
          src={greenLantern}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-teal-700 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-teal-800 pl-60 py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p> Power Ring</p>
            <p>Flight</p>
            <p>Energy Projection</p>
            <p>Force Fields</p>
            <p>Universal Translator</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Hal Jordan
          </span>
        </h3>
        <p className="text-center text-base bg-green-200 px-2 py-5 rounded-xl">
          A member of the Green Lantern Corps, wielding a power ring that can
          create constructs based on willpower.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project06Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-blue-500">
      <div className="relative flex justify-evenly h-80">
        <img
          src={aquaMan}
          alt="pokemon website"
          className="absolute rounded-lg w-52 border-8 border-orange-500 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-orange-600 pl-60 py-2 rounded-xl z-0">
          <h3 className="text-xl font-bold">Abilities</h3>
          <div className="text-white w-52">
            <p>Super Strength</p>
            <p>Underwater Breathing</p>
            <p>Marine Telepathy</p>
            <p>Enhanced Swimming Speed</p>
            <p>Trident of Poseidon</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-3">
        <h3 className=" text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Arthur Curry
          </span>
        </h3>
        <p className="text-center text-base bg-blue-200 px-2 py-5 rounded-xl">
          The King of Atlantis with the ability to communicate with marine life
          and control water.
        </p>
      </div>
    </DisplayCard>
  );
};
