import React from "react";
import StackCard from "../component/StackCard";

export default function AboutPage() {
  return (
    <div className="about-me-box">
      <h2>About Me</h2>
      <p className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        sapiente fuga quam temporibus repudiandae in suscipit atque ducimus
        distinctio fugiat iste tenetur neque voluptatem provident porro quasi
        modi accusantium vero?
      </p>

      <div className="my-stacks">
        <StackCard />

        <StackCard />
        
        <StackCard />
       
      </div>
    </div>
  );
}
