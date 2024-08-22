export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center">
        <img src={"/assets/blog/authors/carlo.jpg"} className="w-24 h-24 rounded-full mr-4" alt={"Carlo Pane"} />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          CP_Blog.
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Insights into my projects and other interesting things.
      </h4>
    </section>
  );
}
