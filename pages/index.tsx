import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import type { NextPageWithLayout } from './_app'
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, welcome to my first next.js website. Let's hope it works.</p>
        <div>
          You can go to my first post by clicking{' '}
        <Link href="/posts/first-post">
          <a>here!</a>
        </Link>
        </div>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}