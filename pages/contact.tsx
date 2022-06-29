import Link from 'next/link';
import Head from 'next/head';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Layout from '../components/layout';

export default function FirstPost(){
  return (
    <Layout home={false}>
      <Head>
        <title>Contact</title>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Head>
      <h1>Contact</h1>
      <p>This is my first page! Aint that cool? What should I be making? A personal website? A food blog? IDK I'm just messing around I guess.</p>
      <div className="badge-base LI-profile-badge" 
        data-locale="en_US" 
        data-size="large" 
        data-theme="light" 
        data-type="HORIZONTAL" 
        data-vanity="patrick-morin-5209b719a" 
        data-version="v1">
        <a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/patrick-morin-5209b719a?trk=profile-badge"/>
      </div>
              
    </Layout>
  );
}
