import { workExperiences, WorkExperience } from "../../pages/work-experience";
import TimelineItem from "./TimelineItem";

import styles from "./Timeline.module.scss";

interface Props {
  timelineItems: WorkExperience[];
}

export default function Timeline(props: Props) {
  return (
    <div className={styles.timeline}>
      {workExperiences.map((item, i) => (
        <TimelineItem workExperience={item} index={i} key={i}></TimelineItem>
      ))}
    </div>
  );
}
