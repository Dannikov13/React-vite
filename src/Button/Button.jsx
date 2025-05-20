import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  let classes = "button";

  if (isActive) classes += " active";

  return (
    <section>
      <button
        className={isActive ? "button active" : "button"}
        onClick={onClick}
      >
        {children}
      </button>
    </section>
  );
}
