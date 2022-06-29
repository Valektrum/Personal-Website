//NextJs
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

//React Components
import NavBar from './navbar'
import Logo from "./Logo";

//CSS
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss'

const name = "Patrick Morin - Software developer";
export const siteTitle = 'Nextjs Sample Website';

type LayoutProps = {
  children: React.ReactNode,
  home: boolean
};

export default function Layout({ children, home }: LayoutProps){
  return (
    <>
      <Head>
        <link rel="icon" href="/images/profile2.png"/>
        <meta
          name="Description"
          content="Patrick Morin's website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile2.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <div>
              <Logo src="/images/LinkedIn-Logo.png" url="https://www.linkedin.com/in/patrick-morin-5209b719a/" name="LinkedIn Profil" size={30}/>
              <Logo src="/images/GitHub-Logo.png" url="https://github.com/Valektrum" name="GitHub Profil" size={30}/>
            </div>
          </>
      </header>
      <NavBar/>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}