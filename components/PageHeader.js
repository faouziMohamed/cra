export default function PageHeader({ titles }) {
  return (
    <header className="main-header">
      <h1 className="main-title">{titles.pageTitle}</h1>
      <p className="main-sub-title">{titles.pageSubtitle}</p>
    </header>
  );
}
