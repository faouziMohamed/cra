import { Capitalize, CapitalizeAll } from "../../lib/utils";
import DateComponent from "../date";
import style from "./timeline.module.css";

export default function TimeLine({ content }) {
  const data = content.map((d) => ({
    title: d.data.pageTitle,
    author: d.data.authors,
    description: d.data.description,
    date: d.data.formationDate,
    time: d.data.time || "14h30",
  }));

  let direction = "";
  return (
    <>
      <div className={`${style.timeline}`}>
        {data.map((bloc, index) => {
          direction =
            direction === `${style.left}` ? `${style.right}` : `${style.left}`;
          return (
            <TimeLineBlock data={bloc} direction={direction} key={index} />
          );
        })}
      </div>
    </>
  );
}

function TimeLineBlock({ data, direction }) {
  return (
    <div className={`${style.container} ${direction}`}>
      <article className={`${style.content_container}`}>
        <h2 className={`${style.title}`}>
          <Capitalize>{data.title}</Capitalize>
        </h2>
        <small>
          <time dateTime={data.date} className={`${style.date}`}>
            <DateComponent
              dateString={data.date}
              timeString={data.time}
              capitalize={true}
            />
          </time>
        </small>
        <p className={`${style.content}`}>
          <Capitalize>{data.description}</Capitalize>
        </p>
        <address className={`${style.author}`}>
          <CapitalizeAll>{data.author}</CapitalizeAll>
        </address>
      </article>
    </div>
  );
}
