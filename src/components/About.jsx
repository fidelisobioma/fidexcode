function About() {
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-2  items-center gap-10  p-10 max-w-7xl mx-auto ">
        <div className="max-w-[600px]">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="text-lg font-normal mb-4">Get to know me better</p>
          <p className="text-base font-normal leading-relaxed">
            I'm fidelis, a skilled Frontend developer. I specialise in building
            fast, accessible, and user-friendly web applications using React JS
            and Tailwind css, with a strong foundation in HTML, CSS, and
            JavaScript. I craft seamless digital experiences that exceed
            expectations and drive results.
          </p>

          <div className="flex gap-2 my-4">
            <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md hover:bg-[#90b0ff] transition">
              Contact Me
            </button>
            <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold px-4 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
              Download CV
            </button>
          </div>
          {/* <p className="text-base font-normal leading-relaxed">
            My expertise includes building responsive web applications,
            integrating API, implementing design mockups, and optimising for
            SEO. I'm committed to accessibility and follow best practices to
            ensure inclusive and usable web applications. I'm proficient in
            version control systems like Git, ensuring efficient collaboration
            and version management.
          </p> */}
          {/* <p className="text-base font-normal leading-relaxed">
            I'm passionate about innovation, user-centric design, and
            collaboration. If you're looking for a dedicated frontend developer
            to help bring your vision to life, let's connect! I'm excited to
            work with like-minded individuals and contribute to innovative
            projects that make a difference.
          </p> */}
        </div>
        <div className="max-w-[600px] ">
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
