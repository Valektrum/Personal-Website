import Link from "next/link";
import Image from "next/image";

//CSS
import styles from './logo.module.scss';

interface LogoProps{
  src: string,
  url: string,
  name: string,
  size: number
}

export default function Logo(props: LogoProps){
  return(
    <div className={styles.logo}>
      <a href={props.url} target="_blank">
        <img
          className="svg"
          src={props.src}
          height={props.size}
          width={props.size}
          alt={props.name}/>
      </a>
    </div>
    
  )
  
}