import Link from "next/link";
import Head from "next/head";
import React, { createContext, useContext, useEffect, useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card";

const projects: {
  title: string;
  description: string;
  text: string;
  technologies: { name: string; src: string }[];
}[] = [
  {
    title: "Website",
    description: "Personal website",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptates repellat dolores iure reiciendis consequatur beatae, fugiat quis mollitia unde excepturi molestias, id est tenetur eum voluptate quam. Ipsa, eligendi.",
    technologies: [
      {
        name: "Node.js",
        src: "/images/technologies/Nodejs.png",
      },
      {
        name: "Next.js",
        src: "/images/technologies/Nextjs.png",
      },
      {
        name: "React",
        src: "/images/technologies/reactjs.png",
      },
      {
        name: "Sass",
        src: "/images/technologies/Sass.png",
      },
    ],
  },
  {
    title: "V-AI",
    description: "A discord bot",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis minima sequi, quaerat unde soluta temporibus aspernatur asperiores illum enim adipisci voluptas commodi ad consectetur quibusdam amet debitis accusantium in esse quas iure ratione maxime provident blanditiis voluptate. Aspernatur, dicta. Veritatis aspernatur officiis, autem soluta consequatur iste sequi eligendi consectetur fugiat temporibus hic rerum. Eius nisi obcaecati dolorem optio vero dicta.",
    technologies: [
      {
        name: "Node.js",
        src: "/images/technologies/Nodejs.png",
      },
    ],
  },
  {
    title: "League companion app",
    description: "Mobile application",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos iure itaque perspiciatis dolor mollitia nesciunt voluptates facilis adipisci voluptatibus reprehenderit?",
    technologies: [
      {
        name: "Node.js",
        src: "/images/technologies/Nodejs.png",
      },
      {
        name: "Next.js",
        src: "/images/technologies/Nextjs.png",
      },
      {
        name: "React",
        src: "/images/technologies/reactjs.png",
      },
      {
        name: "Sass",
        src: "/images/technologies/Sass.png",
      },
    ],
  },
];

export default function Page() {
  return (
    <Layout home={false}>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Projects</h1>
      <p>
        This is my first page! Aint that cool? What should I be making? A
        personal website? A food blog? IDK I'm just messing around I guess.
      </p>
      {projects.map((project, i) => (
        <Card
          title={project.title}
          description={project.description}
          text={project.text}
          technologies={project.technologies}
          key={i}
        />
      ))}
    </Layout>
  );
}
