import { GitFork } from "lucide-react";
import { GitCompare } from "lucide-react";
import { Code } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { Workflow } from "lucide-react";
import { Accessibility } from "lucide-react";
import { UserSearch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
function Skills() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto" id="skills">
      <ScrollReveal>
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-900">
          My skills
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-lg font-normal mb-4 text-center text-gray-800">
          Proficient and skilled in:
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="flex flex-nowrap justify-center items-center gap-5 md:gap-20 ">
          <div className="size-12">
            <img src="/images/react.png" alt="react" className="w-full" />
          </div>

          <div className="size-12">
            <img src="/images/JS.png" alt="JavaScript" />
          </div>

          <div className="size-12">
            <img
              src="/images/tailwind.png"
              alt="tailwind CSS"
              className="w-full"
            />
          </div>

          <div className="size-12">
            <img src="/images/css.png" alt="CSS" className="w-full" />
          </div>

          <div className="size-12">
            <img src="/images/html.png" alt="html" className="w-full" />
          </div>

          <div className="size-12">
            <img src="/images/github.png" alt="Github" className="w-full" />
          </div>

          <div className="size-12">
            <img src="/images/git.png" alt="git" className="w-full" />
          </div>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 text-gray-800">
        <div className="shadow rounded-md p-4  bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center  bg-slate  rounded px-px ">
              <GitCompare color="#6687eb" className="size-4 font-normal " />

              <p className="text-lg font-normal text-[#6687eb] ">
                Version control
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-left">
              I'm proficient in using control like Git, ensuring efficient
              collabortion and version management in my development.
            </p>
          </ScrollReveal>
        </div>

        <div className="shadow rounded-md p-4 bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center  bg-slate- rounded px-px">
              <Code color="#6687eb" className="size-4 font-normal " />
              <p className="text-lg font-normal text-[#6687eb]">
                Design implementing
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-left">
              I'm skilled in translating design mockups into functional and
              visually appealing web application.
            </p>
          </ScrollReveal>
        </div>

        <div className="shadow rounded-md p-4 bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center  bg-slate rounded px-px">
              <MonitorSmartphone
                color="#6687eb"
                className="size-4 font-normal"
              />
              <p className="text-lg font-normal text-[#6687eb]">
                Responsiveness
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-left">
              I develop responsive web applications that adapt to different
              screen sizes, devices, and orientations, ensuring a great user
              experience.
            </p>
          </ScrollReveal>
        </div>

        <div className="shadow rounded-md p-4 bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center  bg-slate rounded px-px">
              <Workflow color="#6687eb" className="size-4 font-normal " />
              <p className="text-lg font-normal text-[#6687eb]">
                API integration
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-left">
              I'm experience in Integrating APIs, fetch and display data,
              enabling seamless communication between frontend and backend
              system.
            </p>
          </ScrollReveal>
        </div>

        <div className="shadow rounded-md p-4 bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center   rounded px-px">
              <Accessibility color="#6687eb" className="size-4 font-normal " />
              <p className="text-lg font-normal text-[#6687eb]">Accesibility</p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-lefttext-center md:text-left">
              I'm commited to building inclusive and accesible web applications
              that meet the neds of all users, following best practces guideline
              like WCAG2.1
            </p>
          </ScrollReveal>
        </div>

        <div className="shadow rounded-md p-4 bg-white">
          <ScrollReveal>
            <div className="flex gap-1 justify-center md:justify-start items-center rounded px-px">
              <UserSearch color="#6687eb" className="size-4 font-normal " />
              <p className="text-lg font-normal text-[#6687eb] ">
                SEO optimization
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed text-center md:text-left">
              I understand the importance of search engine optimization and
              implement techniques to improve website visibility, drive traffic.
              and rankings.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
export default Skills;
