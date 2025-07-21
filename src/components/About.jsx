function About() {
  return (
    <div className="bg-white" id="about">
      <div className="grid md:grid-cols-2  items-center gap-10  p-10 max-w-7xl mx-auto">
        <div className="max-w-[600px] order-2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
            About me
          </h2>
          <p className="text-lg font-normal mb-4 text-gray-800">
            Get to know me better
          </p>
          <p className="text-base font-normal leading-relaxed text-gray-800">
            I'm fidelis, a skilled Frontend developer. I specialise in building
            fast, accessible, and user-friendly web applications using React JS
            and Tailwind css, with a strong foundation in HTML, CSS, and
            JavaScript. I craft seamless digital experiences that exceed
            expectations and drive results.
          </p>

          <div className="flex justify-center md:justify-start gap-2 my-4">
            <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold p-2 rounded-md hover:bg-[#90b0ff] transition">
              Contact Me
            </button>
            <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold p-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
              Download CV
            </button>
          </div>
        </div>
        <div className="max-w-[600px] order-1">
          <img
            src="/images/fidelis.png"
            alt="fidelis picture"
            className="w-full rounded-full bg-[#6574a0] "
          />
        </div>
      </div>
    </div>
  );
}
export default About;
