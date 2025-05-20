import "./App.css";
import Button from "./Button/Button.jsx";
import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways, describe } from "./date.js";
import { useState } from "react";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{describe[contentType]}</p>;
  // } else {
  //   tabContent = <div>asdsad</div>;
  // }

  return (
    <>
      <Header />
      <main>
        <section>
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
            {/* <WayToTeach title={ways[3].title} description={ways[3].description} />
          <WayToTeach {...ways[0]} />
          <WayToTeach {...ways[1]} />
          <WayToTeach {...ways[2]} /> */}
          </ul>
        </section>

        <section>
          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Конфиденцеальность
          </Button>
          <Button
            isActive={contentType === "program"}
            onClick={() => handleClick("program")}
          >
            Качество
          </Button>

          {/* {contentType ? <p>{describe[contentType]}</p> : <div>asdsad</div>} */}
          {/* 
          {!contentType ? <div>asdsad</div> : null}
          {contentType ? <p>{describe[contentType]}</p> : null} */}

          {!contentType && <div>asdsad</div>}
          {contentType && <p>{describe[contentType]}</p>}
          {/* <p>{tabContent}</p> */}
        </section>
      </main>
    </>
  );
}
