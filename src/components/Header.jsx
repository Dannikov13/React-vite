import { useState } from "react";

export default function Header() {
  const [Now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <div>
      <h1>Time:{Now.toLocaleString()}</h1>
    </div>
  );
}
