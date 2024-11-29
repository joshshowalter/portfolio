import { useRef } from 'react';
import { useSR } from '../hooks/useSR';

export default function Contact() {
  const revealContainer = useRef(null);
  useSR(revealContainer);

  return (
    <section
      className="flex flex-col py-32 sm:items-center"
      ref={revealContainer}
    >
      <h2 className="pb-4 text-4xl font-semibold text-white">Contact Me</h2>
      <div>
        Currently not looking for new opportunities, but my inbox is always open! Feel free to reach out to me at:
        <div className="mt-2 text-lg text-accent sm:text-center">
          <a href="mailto: joshhshowalter@gmail.com">
            joshhshowalter@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
