import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useProjectStore } from './ProjectStore';
import superMan from '../assets/superman.jpg';
import batMan from '../assets/batman.jpg';
import wonderWoman from '../assets/wonderwoman.jpg';

import sample from '../assets/sample.mp3';
import sample2 from '../assets/sample2.mp3';
import sample3 from '../assets/sample3.mp3';

const DisplayCard = ({ bgColor, children, id, audioSrc }) => {
  const { inViewProject, setInViewProject } = useProjectStore();
  const audioRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handlePlayAudio = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewProject(id);
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayAudio, options);
    const cardElement = document.getElementById(id);

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [id, setInViewProject]);

  useEffect(() => {
    if (inViewProject === id) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play the audio:', error);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [inViewProject, id]);

  return (
    <div
      id={id}
      className={classNames(
        'h-full w-full rounded-2xl absolute inset-0 transition-opacity p-5',
        bgColor,
        inViewProject === id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
      <audio ref={audioRef} src={audioSrc} preload="auto" style={{ display: 'none' }} />
    </div>
  );
};

export const Project01Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-red-500" audioSrc={sample3}>
      <div className="relative flex justify-evenly h-80">
        <img
          src={superMan}
          alt="superman"
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
        <h3 className="text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Clark Kent
          </span>
        </h3>
        <p className="text-center text-base bg-red-300 px-2 py-5 rounded-xl">
          The iconic Man of Steel with superhuman strength, flight, and other powers. A symbol of hope and justice.
        </p>
          </div>
    </DisplayCard>
  );
};

export const Project02Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-zinc-800" audioSrc={sample2}>
      <div className="relative flex justify-evenly h-80">
        <img
          src={batMan}
          alt="batman"
          className="absolute rounded-lg w-52 border-8 border-yellow-500 z-10 -ml-40"
        />
        <div className="absolute text-center mt-20 bg-yellow-600 pl-60 py-2 rounded-xl z-0">
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
        <h3 className="text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Bruce Wayne
          </span>
        </h3>
        <p className="text-center text-base bg-zinc-400 px-2 py-5 rounded-xl">
          The Dark Knight, a master detective and martial artist who fights crime in Gotham City.
        </p>
      </div>
    </DisplayCard>
  );
};

export const Project03Card = ({ id }) => {
  return (
    <DisplayCard id={id} bgColor="bg-sky-800" audioSrc={sample}>
      <div className="relative flex justify-evenly h-80">
        <img
          src={wonderWoman}
          alt="wonderwoman"
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
        <h3 className="text-white text-center text-xl font-bold bg-zinc-600 px-5 py-2 rounded-xl mx-auto">
          Original Name
          <span className="text-black bg-zinc-100 px-3 py-1 rounded-lg ml-2">
            Diana Prince
          </span>
        </h3>
        <p className="text-center text-base bg-sky-300 px-2 py-5 rounded-xl">
          An Amazonian warrior princess with incredible strength and combat skills.
        </p>
      </div>
    </DisplayCard>
  );
};
