import "./Button.css";

export default function Button({ children, onClick }) {
  return (
    <section>
      <button onClick={onClick}>{children}</button>
    </section>
  );
}
