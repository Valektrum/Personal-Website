import Image from "next/image";

import styles from "./card.module.scss";

interface cardProps {
  title: string;
  description: string;
  text: string;
  technologies: Array<itemProp>;
}

interface itemProp {
  name: string;
  src: string;
}

export default function Card(props: cardProps) {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <p>{props.text}</p>
      <div className={styles.itemList}>
        {props.technologies.map((tech, i) => (
          <Items key={i} name={tech.name} src={tech.src}></Items>
        ))}
      </div>
    </div>
  );
}

function Items(props: itemProp) {
  return (
    <div className={styles.item}>
      <Image
        priority
        src={props.src}
        alt={props.name}
        width={50}
        height={50}
      ></Image>
    </div>
  );
}
