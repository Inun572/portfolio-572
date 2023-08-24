import Link from 'next/link';

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiDiscordLine,
  RiLinkedinLine,
  RiGoogleLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.youtube.com/channel/UCV6lZ1qluM95bZCnxl6_lmg'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={'https://www.instagram.com/helmiainun/'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://linkedin.com/in/helmiainunnaim'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://github.com/Inun572'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'mailto:<nowiki>helmi.ainun@gmail.com'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiGoogleLine />
      </Link>
      <Link
        href={'https://discord.com/helmiainun'}
        target="_blank"
        className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
    </div>
  );
};

export default Socials;
