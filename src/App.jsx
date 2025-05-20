import "./App.css";

import Header from "./components/Header";

import TeachingSection from "./TeachingSection.jsx";
import DifferencesSection from "./components/DeffirencesSection.jsx";

export default function App() {
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
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}
