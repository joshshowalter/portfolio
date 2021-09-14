import josh_headshot from '../assets/josh_headshot.JPG';
import Card from './Card';

export default function About() {
  return (
    <Card>
      <img className="h-48 w-auto" src={josh_headshot} alt="headshot" />
      <p className="p-4">My name is Josh Showalter - I'm a technical architect</p>
    </Card>
  );
}