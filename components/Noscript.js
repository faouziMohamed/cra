export default function Noscript() {
  return (
    <noscript>
      <div className="noscript-layout">
        <p className="no-script-text">
          <i className="fas fa-exclamation-triangle"></i>
          <span>La page web fonctionne bien avec javascript activé</span>
        </p>
      </div>
    </noscript>
  );
}
