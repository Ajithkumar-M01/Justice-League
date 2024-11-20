import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-700 text-white text-center p-10">
      <h1 className="font-bold text-2xl mb-2">- CREDITS -</h1>
      <p>
      This project utilizes music and characters from DC Comics solely for educational and project purposes. All rights to the original music and characters are owned by their respective creators and copyright holders. No infringement is intended.        </p>

      <div>
        <h2 className="font-bold text-xl my-2">Characters</h2>
       
        <p>
          Superman created by Jerry Siegel and Joe Shuster. Character property
          of DC Comics.
        </p>
        <p>
          Batman created by Bob Kane and Bill Finger. Character property of DC
          Comics.
        </p>
        <p>
          Wonder Woman created by William Moulton Marston. Character property of
          DC Comics.
        </p>
        <p>
          The Flash created by Robert Kanigher and Carmine Infantino. Character
          property of DC Comics.
        </p>
        <p>
          Green Lantern created by John Broome and Gil Kane. Character property
          of DC Comics.
        </p>
        <p>
          Aquaman created by Mort Weisinger and Paul Norris. Character property
          of DC Comics.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-xl my-2">Music</h2>
        <p>"Flight" by Hans Zimmer.</p>
        <p>"The Batman" by Michael Giacchino.</p>
        <p>"Is She With You?" by Hans Zimmer & Junkie XL.</p>
        <p>"The Flash TV Main Theme" by Blake Neely.</p>
        <p>"Green Lantern: First Flight" by Robert J. Kral.</p>
        <p>"Arthur" by Rupert Gregson-Williams.</p>
      </div>
      </div>
  );
};

export default Footer;
