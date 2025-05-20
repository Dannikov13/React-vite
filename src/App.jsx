import "./App.css";
import Button from "./Button/Button.jsx";
import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways } from "./date.js";

export default function App() {
  let content = "Нажми на кнопку";

  function handleClick(type) {
    console.log("Clicked", type);
  }

  return (
    <>
      <Header />
      <main>
        <WayToTeach {...ways[0]} />
        <WayToTeach {...ways[1]} />
        <WayToTeach {...ways[2]} />
      </main>
      <section>
        <Button onClick={() => handleClick("way")}>Доступность</Button>
        <Button onClick={() => handleClick("easy")}>Конфиденцеальность</Button>
        <Button onClick={() => handleClick("program")}>Качество</Button>
      </section>
      <p>{content}</p>
    </>
  );
}
