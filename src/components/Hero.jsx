import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
function Hero() {
  return (
    <div className="bg-white mt-2 ">
      <div className=" flex items-center justify-center gap-10 px-10">
        <div className="max-w-md">
          <img
            src="/images/workspace.png"
            alt="fidelis workspace"
            className="w-full"
          />
        </div>
        <div className="max-w-md">
          <div>
            <p className="text-lg font-normal">Hey there!</p>

            <h1 className="md:text-4xl font-bold leading-tight">
              I'm a specialized-skilled Frontend Developer
            </h1>
          </div>
          <div className="socails flex gap-5 mt-2">
            <div className="size-8 rounded-full bg-[#6574a0] p-2 flex justify-center items-center">
              <Github color="#fff" />
            </div>
            <div className="size-8 rounded-full bg-[#6574a0] p-2 flex justify-center items-center">
              <Twitter color="#fff" />
            </div>
            <div className="size-8 rounded-full bg-[#6574a0] p-2 flex justify-center items-center">
              <Linkedin color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
