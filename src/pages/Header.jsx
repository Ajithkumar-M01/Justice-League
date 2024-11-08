import React from "react";
import justiceLeague from "../assets/justiceLeague.png";
import dc from "../assets/dc.png";

const Header = () => {
  return (
    <div>
      <img src={dc} alt="dc logo" className="w-20 ml-auto mr-auto mt-5" />
      <img src={justiceLeague} className="w-1/4 ml-auto mr-auto mt-5" />
      <p className="w-3/4 text-xl text-center mx-auto mt-5">
        The Justice League is a team of superheroes in the DC Universe, known
        for its impressive roster of powerful and iconic characters. Formed to
        combat threats too great for any single hero to handle, the team
        operates as Earth's first line of defense against intergalactic threats,
        supervillains, and natural disasters.
      </p>
      <h1 className="text-4xl text-center mx-auto mt-5 font-semibold">
        Scroll to explore the Core Members of the Justice League
      </h1>

      <h1 className="text-6xl text-center">&darr;</h1>
    </div>
  );
};

export default Header;
