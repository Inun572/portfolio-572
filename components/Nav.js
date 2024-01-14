// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from 'react-icons/hi2';

import Link from 'next/link';
import { useRouter } from 'next/router';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser />,
  },
  {
    name: 'work',
    path: '/work',
    icon: <HiViewColumns />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center gap-y-4 w-full h-max bottom-0 top-0 mt-auto z-50 xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen fixed">
      {/* {inner} */}
      <div className="flex w-full h-[80px] justify-evenly items-center xl:flex-col xl:justify-center gap-y-10 px-4 py-8 text-3xl md:px-40 xl:px-0 xl:h-max xl:text-xl xl:rounded-full bg-secondary/10 backdrop-blur-sm ">
        {navData.map((link, index) => {
          return (
            <Link
              className={` ${
                link.path === pathname && '!text-accent'
              } relative flex items-center group text-black/60 hover:text-accent`}
              key={index}
              href={link.path}
              title={link.name}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="relative flex bg-accent text-white items center py-[6px] px-3 rounded-r-sm rounded-l-md">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-accent border-l-8 border-y-transparent border-y-[12px] border-r-0 absolute -right-2 top-0"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
