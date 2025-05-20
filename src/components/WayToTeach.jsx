export default function WayToTeach({ title, description }) {
  return (
    <div>
      <ul>
        <li>
          <p>
            <strong>{title}</strong>
            {description}
          </p>
        </li>
      </ul>
    </div>
  );
}
