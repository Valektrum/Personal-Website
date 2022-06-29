import Link from 'next/link';
import Head from 'next/head';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Layout from '../components/layout';

export default function FirstPost(){
  return (
    <Layout home={false}>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Projects</h1>
      <p>This is my first page! Aint that cool? What should I be making? A personal website? A food blog? IDK I'm just messing around I guess.</p>
    </Layout>
  );
}
