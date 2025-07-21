import ScrollReveal from "./ScrollReveal";

function Portfolio() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto" id="portfolio">
      <ScrollReveal>
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900">
          My portfolio
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-lg font-normal mb-4 text-center text-gray-800">
          Some of my awesome project
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-800">
        <div className="shadow rounded-md flex flex-col ">
          <ScrollReveal>
            <div>
              <img
                src="/images/countries_app.jpg"
                alt="countries"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </ScrollReveal>
          <div className="flex-1 p-4 grid text-center md:text-left">
            <ScrollReveal>
              <p className="text-lg font-bold text-gray-900">Countries App</p>
              <p className="text-base font-normal leading-relaxed">
                Countries App is a website that display countries around the
                world with their informations and details.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex gap-4 justify-center md:justify-start items-center my-4">
                <div>
                  <img src="/images/react.png" alt="react" className="size-8" />
                </div>
                <div>
                  <img
                    src="/images/tailwind.png"
                    alt="tailwind"
                    className="size-8"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex justify-center md:justify-start gap-4 ">
                <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold p-2  rounded-md hover:bg-[#90b0ff] transition">
                  Live preview
                </button>
                <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold p-2 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                  Source code
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="shadow rounded-md flex flex-col ">
          <ScrollReveal>
            <div>
              <img
                src="/images/space_tourism.jpg"
                alt="space_tourism"
                className="w-full  h-[200px] object-cover"
              />
            </div>
          </ScrollReveal>
          <div className="flex-1 p-4 grid text-center md:text-left ">
            <ScrollReveal>
              <p className="text-lg font-bold">Space tourism</p>
              <p className="text-base font-normal leading-relaxed">
                Space tourism is a multi-page website with interactive elements
                and accessibility features
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex justify-center md:justify-start gap-4 items-center my-4">
                <div>
                  <img src="/images/react.png" alt="react" className="size-8" />
                </div>
                <div>
                  <img
                    src="/images/tailwind.png"
                    alt="tailwind"
                    className="size-8"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex justify-center md:justify-start gap-4 ">
                <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold p-2  rounded-md hover:bg-[#90b0ff] transition">
                  Live preview
                </button>
                <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold p-2 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                  Source code
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="shadow rounded-md flex flex-col ">
          <ScrollReveal>
            <div>
              <img
                src="/images/rps.jpg"
                alt="rock-paer-scissors"
                className="w-full  h-[200px] object-cover"
              />
            </div>
          </ScrollReveal>
          <div className="flex-1 p-4 grid text-center md:text-left">
            <ScrollReveal>
              <p className="text-lg font-bold">Rock-paper-scissors game</p>
              <p className="text-base font-normal leading-relaxed">
                A responsive Rock-paper-scissors-lizard-spock game with a rule
                modal
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex gap-4 justify-center md:justify-start items-center my-4">
                <div>
                  <img
                    src="/images/JS.png"
                    alt="JavaScript"
                    className="size-8"
                  />
                </div>
                <div>
                  <img src="/images/css.png" alt="CSS" className="size-8" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold p-2  rounded-md hover:bg-[#90b0ff] transition">
                  Live preview
                </button>
                <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold p-2 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                  Source code
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
