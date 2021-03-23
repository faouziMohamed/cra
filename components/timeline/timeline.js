import style from "./timeline.module.css";

// const datas = [
//   {
//     title: "Insertion professionelle",
//     content:
//       "ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
//         mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
//         elitvoluptua dignissim per, habeo iusto primis ea eam.",
//   },
//   {
//     title: "Git et GitHub",
//     content:
//       "ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
//         mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
//         elitvoluptua dignissim per, habeo iusto primis ea eam.",
//   },
//   {
//     title: "Microsoft PowerPoint",
//     content:
//       "ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
//         mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
//         elitvoluptua dignissim per, habeo iusto primis ea eam.",
//   },
//   {
//     title: "Entrepreneuriat",
//     content:
//       "ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
//         mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
//         elitvoluptua dignissim per, habeo iusto primis ea eam.",
//   },
//   {
//     title: "Workshop",
//     content:
//       "ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
//         mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
//         elitvoluptua dignissim per, habeo iusto primis ea eam.",
//   },
// ];

export default function TimeLine({ data }) {
  const assets = data.map((d) => ({
    title: d.data.pageTitle,
    author: d.data.authors,
    description: d.data.description,
    date: d.data.formationDate,
  }));

  console.log(assets);
  let direction = "";
  return (
    <>
      <div className={`${style.timeline}`}>
        {assets.map((bloc, index) => {
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
