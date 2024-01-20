import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const WorkDetail = ({ workSlides }) => {
  const router = useRouter();
  const workId = router.query.workId || 1;
  const index = workId - 1;

  return (
    <section className="mx-auto w-full xl:h-screen px-4 py-36 flex flex-col xl:flex-row justify-center items-center xl:gap-4">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-center mb-8">
        <div className="max-w-[500px] xl:w-full rounded-lg pb-4">
          <Image
            src={workSlides[index].path}
            width={400}
            height={300}
            alt=""
            className="w-full object-cover rounded-lg aspect-video"
          />
        </div>
        <Link
          href={workSlides[index].link}
          target="_blank"
          className="text-accent hover:text-accent/80 hover:underline hover:-translate-y-1 transition-all duration-300"
        >
          {workSlides[index].link}
          <HiArrowTopRightOnSquare className="pl-2 inline-block" size={24} />
        </Link>
      </div>
      <div className="w-full xl:w-1/2 xl:pr-20 flex flex-col text-center gap-4 xl:text-left xl:text-lg">
        <h2 className="text-xl xl:text-2xl">{workSlides[index].title}</h2>
        <p>{workSlides[index].desc}</p>
        <p>
          Tech stack:
          <br />
          {workSlides[index].tech}
        </p>
      </div>
    </section>
  );
};

export default WorkDetail;

export const getServerSideProps = async () => {
  const url = 'https://helmi-ainun-portfolio.vercel.app/api/work';
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      workSlides: data,
    },
  };
};
