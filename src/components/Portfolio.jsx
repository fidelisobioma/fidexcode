function Portfolio() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">My portfolio</h2>
      <p className="text-lg font-normal mb-4 text-center">
        Some of my awesome project
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="shadow rounded-md">
          <div>
            <img
              src="/images/countries_app.jpg"
              alt="countries"
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="p-2 ">
            <p className="text-lg font-bold">Countries App</p>
            <p className="text-base font-normal leading-relaxed">
              Countries App is a website that display countries around the world
              with their informations and details.
            </p>
            <div className="flex gap-4 items-center my-2">
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
            <div className="flex gap-2 ">
              <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold px-2  rounded-md hover:bg-[#90b0ff] transition">
                preview
              </button>
              <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold px-4 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                code
              </button>
            </div>
          </div>
        </div>
        <div className="shadow  rounded-md">
          <div>
            <img
              src="/images/space_tourism.jpg"
              alt="space_tourism"
              className="w-full  h-[200px] object-cover"
            />
          </div>
          <div className="p-2 ">
            <p className="text-lg font-bold">Space tourism</p>
            <p className="text-base font-normal leading-relaxed">
              Space tourism is a multi-page website with interactive elements
              and accessibility features
            </p>
            <div className="flex gap-4 items-center my-2">
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
            <div className="flex gap-2 ">
              <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md hover:bg-[#90b0ff] transition">
                preview
              </button>
              <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold px-4 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                code
              </button>
            </div>
          </div>
        </div>
        <div className="shadow  rounded-md">
          <div>
            <img
              src="/images/rps.jpg"
              alt="rock-paer-scissors"
              className="w-full  h-[200px] object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-lg font-bold">Rock-paper-scissors game</p>
            <p className="text-base font-normal leading-relaxed">
              A responsive Rock-paper-scissors-lizard-spock game with a rule
              modal
            </p>
            <div className="flex gap-4 items-center my-2">
              <div>
                <img src="/images/JS.png" alt="JavaScript" className="size-8" />
              </div>
              <div>
                <img src="/images/css.png" alt="CSS" className="size-8" />
              </div>
            </div>
            <div className="flex gap-2 ">
              <button className="bg-[#6574a0] text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md hover:bg-[#90b0ff] transition">
                preview
              </button>
              <button className="bg-white border text-[#6574a0] text-sm md:text-base font-semibold px-4 py-2 rounded-lg hover:bg-[#90b0ff] hover:text-white transition">
                code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
