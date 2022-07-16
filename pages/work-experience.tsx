import Link from "next/link";
import Head from "next/head";
import React, { createContext, useContext, useEffect, useState } from "react";
import Layout from "../components/layout";
import Timeline from "../components/Timeline/Timeline";

export interface WorkExperience {
  jobTitle: string;
  startYear: string;
  endYear: string;
  duration: string;
  description: string;
}

export const workExperiences: WorkExperience[] = [
  {
    jobTitle: "Développeur logiciel",
    startYear: "2021",
    endYear: " present",
    duration: "",
    description: "that's my job",
  },
  {
    jobTitle: "Programmeur fullstack",
    startYear: "2019",
    endYear: "2020",
    duration: "",
    description: "that was my job",
  },
  {
    jobTitle: "Programmeur fullstack stagiaire",
    startYear: "2019",
    endYear: "2020",
    duration: "2 jours",
    description: "that was my job",
  },
];

export default function Page() {
  return (
    <Layout home={false}>
      <Head>
        <title>Work experience</title>
      </Head>
      <h1>Work experience</h1>
      <Timeline timelineItems={workExperiences}></Timeline>
    </Layout>
  );
}
