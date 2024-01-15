import Hero from "@/components/hero";
import Question from "@/components/question";
import Service from "@/components/service";
import Testinomial from "@/components/testinomial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Testinomial />
      <Service/>
      <Question/>
    </div>
  );
}
