import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img src={"/assets/blog/authors/carlo.jpg"} className="h-[1em] md:h-[2em] w-[1em] md:w-[2em] rounded-full mr-4" alt={"Carlo Pane"} />
        </div>
        <Link href="/" className="hover:underline">
          CP_Blog
        </Link>
      </div>
      .
    </h2>
  );
};

export default Header;
