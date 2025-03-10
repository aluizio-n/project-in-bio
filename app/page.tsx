import Hero from "./components/landing-page/hero";
import Header from "./components/landing-page/header";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <Hero />
      {/*
      <VideoExplantion />
      <Pricing />
      <FQA /> 
       */}
    </div>
  );  
}
