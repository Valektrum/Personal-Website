import Link from "next/link";

import styles from './navbar.module.scss';

export default function NavBar(){
  return(
    <ul className={styles.navbar}>
      <li><Link href="/">About me</Link></li>
      <li><Link href="/work-experience">Work experience</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  )
}