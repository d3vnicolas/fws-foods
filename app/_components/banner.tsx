import Image from "next/image";

interface BannerItemProps {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: BannerItemProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={0}
      width={0}
      className="h-auto w-full object-contain py-5"
      sizes="100vw"
      quality={100}
    />
  );
};

export default Banner;
