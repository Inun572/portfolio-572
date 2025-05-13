"use client"

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

const WorkDetail = () => {
  const [work, setWork] = useState({})
  const router = useRouter();
  const slug = router.query.slug ?? "";

  useEffect(() => {
    const fetchData =async () => {
      const req = await fetch(`/api/works/${slug}`)
      const data = await req.json();
      setWork(data)
    }

    if (slug) {
      fetchData();
    }
  }, [])

  return (
    <section className="mx-auto w-full xl:h-screen px-4 py-36 flex flex-col xl:flex-row justify-center items-center xl:gap-4">
      {work?.title && 
        (
          <>
            <div className="w-full xl:w-1/2 flex flex-col justify-center items-center mb-8">
              <motion.div 
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[500px] xl:w-full rounded-lg pb-4">
                <Image
                  src={work.path ?? ''}
                  width={400}
                  height={300}
                  alt=""
                  className="w-full object-cover rounded-lg aspect-video"
                 />
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                <Link
                  href={work.link ?? ""}
                  target="_blank"
                  className="text-accent hover:text-accent/80 hover:underline hover:-translate-y-1 transition-all duration-300"
                >
                  {work.link}
                  <HiArrowTopRightOnSquare className="pl-2 inline-block" size={24} />
                </Link>
              </motion.div>
            </div>
            <motion.div 
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:w-1/2 xl:pr-20 flex flex-col text-center gap-4 xl:text-left xl:text-lg">
              <h2 className="text-xl xl:text-2xl">{work.title ?? ''}</h2>
              <p>{work.desc ?? ''}</p>
              <p>
                Tech stack:
                <br />
                {work.tech ?? ''}
              </p>
            </motion.div>
          </>
        )
      }
    </section>
  );
};

export default WorkDetail;

// export const getServerSideProps = async () => {
//   const url = `https://helmi-ainun-portfolio.vercel.app/api/works/${}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return {
//     props: {
//       workSlides: data,
//     },
//   };
// };
