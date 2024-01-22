import React from "react";
import Navbar from "./components/Navbar";
import HierarchySection from "./components/HierarchySection";
import HeadingSection from "./components/HeadingSection";
import FeaturesSection from "./components/FeaturesSection";
import FlashcardSection from "./components/FlashcardSection";
import CreateFlashcard from "./components/CreateFlashcard";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <>
      <div className="mx-8 md:mx-20 lg:mx-20">
        <Navbar />
        <HierarchySection />
        <HeadingSection />
        <FeaturesSection />
        <FlashcardSection />
        <CreateFlashcard />
        <FaqSection />
      </div>
    </>
  );
}

export default App;
