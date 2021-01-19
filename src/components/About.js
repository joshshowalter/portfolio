import josh_headshot from '../assets/josh_headshot.JPG';

export default function About() {
  return (
    <div className="p-4">
      <div className="max-w-lg mx-auto flex sm:bg-white rounded-xl shadow-md overflow-hidden">
        <img className="h-48 w-auto" src={josh_headshot} alt="headshot" />
        This is a card
      </div>
    </div>
  );
}