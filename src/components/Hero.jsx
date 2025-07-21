import ScrollReveal from "./ScrollReveal";
function Hero() {
  return (
    <div className="bg-white snap-y">
      <div
        className="max-w-7xl p-10 md:h-96 grid justify-center items-center mx-auto text-gray-900 scroll-mt-[300px]"
        id="home"
      >
        <div className="leading-loose">
          <ScrollReveal>
            <h1 className="text-xl md:text-4xl font-bold  text-center">
              Hey, I'm Frontend Developer
            </h1>
            <h1 className="text-xl md:text-4xl font-bold   text-center">
              Building friendly user interface
            </h1>
            <h1 className="text-xl md:text-4xl font-bold  text-center">
              PSD to HTML!
            </h1>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
export default Hero;
