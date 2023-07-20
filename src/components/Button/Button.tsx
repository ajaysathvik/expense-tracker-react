import { BsHeart, BsHeartbreakFill } from "react-icons/bs";
import { useState } from "react";

const Like = () => {
  const [status, setstatus] = useState(true);

  if (status)
    return (
      <BsHeart
        color="#ff6b81"
        onClick={() => {
          setstatus(false);
        }}
      />
    );
  return (
    <BsHeartbreakFill
      color="#ff6b81"
      onClick={() => {
        setstatus(true);
      }}
    />
  );
};

export default Like;
