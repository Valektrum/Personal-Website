import { WorkExperience } from "../../pages/work-experience";

import styles from "./TimelineItem.module.scss";

interface Props {
  workExperience: WorkExperience;
  index: number;
}

export default function TimelineItem(props: Props) {
  return (
    <div
      className={
        styles.container + " " + (props.index % 2 ? styles.right : styles.left)
      }
    >
      <div className={styles.content}>
        <h2>{props.workExperience.jobTitle}</h2>
        <h3>
          {props.workExperience.startYear} - {props.workExperience.endYear}
        </h3>

        <p>{props.workExperience.description}</p>
      </div>
    </div>
  );
}
