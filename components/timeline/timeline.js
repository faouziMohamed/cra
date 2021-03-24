import style from "./timeline.module.css";

export default function TimeLine({ content }) {
  const data = content.map((d) => ({
    title: d.data.pageTitle,
    author: d.data.authors,
    description: d.data.description,
    date: d.data.formationDate,
  }));

  let direction = "";
  return (
    <>
      <div className={`${style.timeline}`}>
        {data.map((bloc, index) => {
          direction =
            direction === `${style.left}` ? `${style.right}` : `${style.left}`;
          return <TimeLineBloc data={bloc} direction={direction} key={index} />;
        })}
      </div>
    </>
  );
}

function TimeLineBloc({ data, direction }) {
  return (
    <div className={`${style.container} ${direction}`}>
      <article className={`${style.content_container}`}>
        <h2 className={`${style.title}`}>{data.title}</h2>
        <small>
          <time dateTime={data.date} className={`${style.date}`}>
            {data.date}
          </time>
        </small>
        <p className={`${style.content}`}>{data.description}</p>
        <address className={`${style.author}`}>{data.author}</address>
      </article>
    </div>
  );
}
