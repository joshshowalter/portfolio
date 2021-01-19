const siteUrl = "https://redditreact.netlify.app";

export default function Reddit() {
  return (
    <iframe className="w-full h-full" src={siteUrl} title="Reddit"></iframe>
  );
}