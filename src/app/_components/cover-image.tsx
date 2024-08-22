import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  height?: string;
};

const CoverImage = ({ title, src, slug, height = "h-full" }: Props) => {
  const image = (
    <Image
      className={cn(`w-full ${height} object-cover mb-8 md:mb-16 flex justify-center shadow-sm`, {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      src={src}
      alt={`Cover Image for ${title}`}
      width={400}
      height={300}
      priority
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
