import Button from "../Button/Button";
import { useState } from "react";
import { describe } from "../date.js";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
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
  );
}
