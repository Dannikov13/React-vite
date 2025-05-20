import WayToTeach from "./components/WayToTeach";
import { ways } from "./date";

export default function TeachingSection() {
  return (
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
  );
}
