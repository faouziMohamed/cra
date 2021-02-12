export default function LeftBurgerButton() {
    return (
        <label className="burger-wrapper">
            <input className="burger-check hidden" type="checkbox" />
            <div className="burger-menu"></div>
        </label>
    );
}
