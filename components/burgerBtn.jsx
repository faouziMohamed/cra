import { IncludeIf } from "./mainLayout";

export default function LeftBurgerButton({ isArticle }) {
  return (
    <IncludeIf condition={isArticle}>
      <label className="burger-wrapper">
        <input className="burger-check hidden" type="checkbox" />
        <div className="burger-menu"></div>
      </label>
    </IncludeIf>
  );
}
