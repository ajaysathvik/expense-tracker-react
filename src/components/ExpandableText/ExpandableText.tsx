import { useState } from "react";

interface Props {
  children: string;
  textLength?: number;
}

const ExpandableText = ({ children, textLength = 10 }: Props) => {
  if (children.length <= textLength) {
    return <p>{children}</p>;
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, textLength);

  return (
    <>
      <div>
        {text}...
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "less" : "more"}
        </button>
      </div>
      <div>{textLength}</div>
    </>
  );
};

export default ExpandableText;
