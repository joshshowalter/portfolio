import Card from "../components/card";

export default function About() {
  return (
    <div className="flex bg-base-200 h-screen px-24 gap-8">
      <div className="">
        <img src="/headshot.PNG" height="400" width="200"></img>
      </div>
      <div className="card bg-base-100 shadow-md h-64 w-full">
        <div className="card-body">
          I'm Josh, senior software engineer at Brag House. 
        </div>
      </div>
    </div>
  );
}