import { useState } from "react";

const ListModofication = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const addClick = () => {
    setTags([...tags, "exciting"]);
  };

  const removeClick = () => {
    setTags([...tags.filter((tag) => tag != "happy")]);
  };

  const updateClick = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      <button onClick={addClick}>add exicting</button>
      <button onClick={removeClick}>remove happy</button>
      <button onClick={updateClick}>update happy to happiness</button>
    </div>
  );
};

export default ListModofication;
