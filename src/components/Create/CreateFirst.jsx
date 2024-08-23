import React, { useContext, useState } from "react";
import { TapeContext } from "../../store/TapeContext";

const CreateFirst = () => {
  const { mixtapeState, mixtapeDispatch } = useContext(TapeContext);
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");

  const handleChange = (e) => {
    console.log("changed");
    e.target.name === "name"
      ? setName(e.target.value)
      : setCreator(e.target.value);
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log("next");
    mixtapeDispatch({ type: "CREATE", payload: { name, creator } });
    console.log(mixtapeState);
  };
  return (
    <div className="first-wrapper">
      <input
        type="text"
        name="name"
        placeholder="Playlist Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="creator"
        placeholder="Creator"
        onChange={handleChange}
        required
      />
      <button className="continue-button" onClick={handleNext}>
        Continue
      </button>
    </div>
  );
};

export default CreateFirst;
