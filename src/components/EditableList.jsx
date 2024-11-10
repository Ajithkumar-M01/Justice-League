import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card, Strong, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  LuClipboardEdit,
  LuUserCircle,
  LuUpload,
  LuTrash2,
} from "react-icons/lu";

const API_URL = "https://superhero-mongo-db.vercel.app/api/superheroes";

const EditableList = () => {
  const [heroes, setHeroes] = useState([]);
  const [superheroName, setSuperheroName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [abilities, setAbilities] = useState("");
  const [weakness, setWeakness] = useState("");
  const [backstory, setBackstory] = useState("");
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [contributor, setContributor] = useState("");
  const [editedHeroId, setEditedHeroId] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [createMessage, setCreateMessage] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const formRef = useRef(null);

  const fetchHeroes = async () => {
    try {
      const response = await axios.get(API_URL);
      setHeroes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const createHero = async () => {
    if (!superheroName || !originalName || !contributor) {
      setValidationMessage(
        "Required Fields: 'Superhero Name', 'Original Name' and 'Contributor'"
      );
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        superheroName,
        originalName,
        abilities,
        weakness,
        backstory,
        reason,
        comment,
        contributor,
      });

      setHeroes([...heroes, response.data]);
      setSuperheroName("");
      setOriginalName("");
      setAbilities("");
      setWeakness("");
      setBackstory("");
      setReason("");
      setComment("");
      setContributor("");
      setValidationMessage("");
      setCreateMessage("Thanks! Your post is successfully added below.");
      setTimeout(() => {
        setCreateMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error occured in posting", error);
    }
  };

  const updateHero = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        superheroName,
        originalName,
        abilities,
        weakness,
        backstory,
        reason,
        comment,
        contributor,
      });
      setHeroes(heroes.map((hero) => (hero._id === id ? response.data : hero)));
      setEditedHeroId(null);
      setSuperheroName("");
      setOriginalName("");
      setAbilities("");
      setWeakness("");
      setBackstory("");
      setReason("");
      setComment("");
      setContributor("");
      setEditMessage("Thanks! The post is successfully updated.");
      setTimeout(() => {
        setEditMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error occured in updating", error);
    }
  };

  const deleteHero = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setHeroes(heroes.filter((hero) => hero._id !== id));
      setDeleteMessage("The post is successfully deleted.");
        setTimeout(() => {
      setDeleteMessage("");
        }, 3000);
    } catch (error) {
      console.error("Error occured in deleting", error);
    }
  };
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center mx-auto mt-5 font-semibold">
        Unleash the hero in you!
      </h1>
      <p className="text-2xl text-center mx-auto mt-5">
        Add your favorite superheroes to our growing roster and be a part of our
        super-powered community.
      </p>
      <p className="text-2xl text-center mx-auto mt-5 font-light">
        🌟 Your contributions make our hero universe even more epic!
      </p>

      <div
        ref={formRef}
        className="w-[80%] mx-auto bg-[#c3c3c3] border-4 border-[#00a2e8] py-5 flex flex-col gap-5 rounded-xl mt-5"
      >
        <div className="flex justify-evenly">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="superheroName" className="font-semibold">
              Superhero Name <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Batman"
              value={superheroName}
              onChange={(e) => setSuperheroName(e.target.value)}
              id="superheroName"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="originalName" className="font-semibold">
              Original Name / Alter Ego{" "}
              <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Bruce Wayne"
              value={originalName}
              onChange={(e) => setOriginalName(e.target.value)}
              id="originalName"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="abilities" className="font-semibold">
              Abilities
            </label>
            <input
              type="text"
              placeholder="e.g., Master Detective, Martial Arts Master, ..."
              value={abilities}
              onChange={(e) => setAbilities(e.target.value)}
              id="abilities"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="weakness" className="font-semibold">
              Weakness
            </label>
            <input
              type="text"
              placeholder="e.g., Human Limitations, Isolation, ..."
              value={weakness}
              onChange={(e) => setWeakness(e.target.value)}
              id="weakness"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="backstory" className="font-semibold">
              Backstory (for your own superhero)
            </label>
            <textarea
              name="backstory"
              placeholder="Origin Story / Backstory of your own superhero"
              value={backstory}
              onChange={(e) => setBackstory(e.target.value)}
              id="backstory"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            ></textarea>
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="reason" className="font-semibold">
              Inspire Factor (for existing superhero)
            </label>
            <textarea
              name="reason"
              placeholder="Reason for choosing this Superhero"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              id="reason"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="comment" className="font-semibold">
              Comment
            </label>
            <input
              type="text"
              placeholder="comment your thoughts on my webpage"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="comment"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="contributor" className="font-semibold">
              Contributor <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              placeholder="please enter your name"
              value={contributor}
              onChange={(e) => setContributor(e.target.value)}
              id="contributor"
              className="border-[0.05em] border-zinc-700 rounded-lg px-2 py-1"
            />
          </div>
        </div>

        {validationMessage && (
          <p className="text-red-600 text-center">{validationMessage}</p>
        )}
        {createMessage && (
          <div className="z-50 text-[#03C03C] text-center fixed top-4 right-4 bg-green-100 border-4 border-[#03C03C] px-4 py-2 rounded-xl font-semibold flex items-center gap-x-2">
            {createMessage}
            <LuUpload className="text-4xl" />
          </div>
        )}
        {editMessage && (
          <div className="z-50 text-amber-600 text-center fixed top-4 right-4 bg-yellow-100 border-4 border-[#FFBF00] px-4 py-2 rounded-xl font-semibold flex items-center gap-x-2">
            {editMessage}
            <LuClipboardEdit className="text-4xl" />
          </div>
        )}
        {deleteMessage && (
          <div className="z-50 text-[#FF0800] text-center fixed top-4 right-4 bg-red-100 border-4 border-[#FF0800] px-4 py-2 rounded-xl font-semibold flex items-center gap-x-2">
            {deleteMessage}
            <LuTrash2 className="text-4xl" />
          </div>
        )}

        {/* <button type="submit">Create new ToDo</button>

        {editTodoId && (
          <button onClick={() => updateTodo(editTodoId)}>Update ToDo</button>
        )} */}

        {editedHeroId ? (
          <button
            onClick={() => updateHero(editedHeroId)}
            className="w-1/3 font-semibold block mx-auto hover:text-white bg-[#e63946] hover:bg-black px-2 py-1 rounded-lg border-2 border-black hover:border-2 hover:border-[#00a2e8]"
          >
            Update Post
          </button>
        ) : (
          <button
            onClick={createHero}
            className="w-1/3 font-semibold block mx-auto hover:text-white bg-[#00a2e8] hover:bg-[#1d3557] px-2 py-1 rounded-lg border-2 border-black hover:border-2 hover:border-[#00a2e8]"
          >
            Create Post
          </button>
        )}
      </div>

      <p className="text-2xl text-center mx-auto mt-5">
        Your Heroes, Your Story!
      </p>
      <p className="text-2xl text-center mx-auto mt-5 font-light">
        You can also share your own Superhero ideas if there's any and let's
        make our universe even more epic!
      </p>

      <h1 className="text-4xl text-center mx-auto mt-5 font-semibold">
        Roster of Super Heroes in our Universe
      </h1>
      <div className="w-[90%] mx-auto my-5">
        <ol className="flex flex-wrap gap-5">
          {heroes.map((hero) => (
            <li key={hero._id}>
              <Card.Root width="320px" className="bg-[#1d3557] min-h-full">
                <Card.Body className="flex flex-col gap-y-1">
                  <div className="bg-zinc-600 px-2 py-2 rounded-lg">
                    <Text className="flex justify-between font-bold text-white">
                      <span>{hero.superheroName}</span>
                      <span className="bg-zinc-100 text-black px-2 py-1 rounded-md font-semibold">
                        {hero.originalName}
                      </span>
                    </Text>
                  </div>
                  <div className="flex gap-x-1">
                    <Card.Description className="bg-[#a8dadc] rounded-md px-2 py-1 flex-1 text-black">
                      <div className="flex flex-col">
                        <Strong className="text-center">Abilities</Strong>
                        {hero.abilities}
                      </div>
                    </Card.Description>
                    <Card.Description className="bg-[#a8dadc] rounded-md px-2 py-1 flex-1 text-black">
                      <div className="flex flex-col">
                        <Strong className="text-center">Weakness</Strong>
                        {hero.weakness}
                      </div>
                    </Card.Description>
                  </div>
                  <Card.Description className="bg-[#457b9d] rounded-md px-2 py-1 text-black">
                    <Strong>Backstory : </Strong>
                    {hero.backstory}
                  </Card.Description>
                  <Card.Description className="bg-[#457b9d] rounded-md px-2 py-1 text-black">
                    <Strong>Inspire Factor : </Strong>
                    {hero.reason}
                  </Card.Description>
                  <Card.Description className="bg-[#a8dadc] rounded-md px-2 py-1 text-black">
                    <Strong>Comment : </Strong>
                    {hero.comment}
                  </Card.Description>
                  <Card.Description className="flex justify-end items-center gap-x-1">
                    <LuUserCircle className="text-white" />
                    <span className="text-[#a8dadc]"> {hero.contributor}</span>
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button
                    flex="1"
                    onClick={() => {
                      setEditedHeroId(hero._id);
                      setSuperheroName(hero.superheroName);
                      setOriginalName(hero.originalName);
                      setAbilities(hero.abilities);
                      setWeakness(hero.weakness);
                      setBackstory(hero.backstory);
                      setReason(hero.reason);
                      setComment(hero.comment);
                      setContributor(hero.contributor);
                      formRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#f1faee]"
                  >
                    <LuClipboardEdit />
                    Edit
                  </Button>
                  <Button
                    flex="1"
                    onClick={() => deleteHero(hero._id)}
                    className="bg-[#e63946]"
                  >
                    <LuTrash2 />
                    Delete
                  </Button>
                </Card.Footer>
              </Card.Root>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default EditableList;
