import { useState } from "react";
import styles from './ListGroup.module.css';

interface Props {
    item: string[];
    heading :string;
}
function ListGroup(props:Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className={[styles.container,styles.listGroup].join(' ')}>{props.heading}</h1>
      <ul>
        {props.item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
