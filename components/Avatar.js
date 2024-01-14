import Image from 'next/image';

const Avatar = ({ image }) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={image}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full "
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
