import { GitFork } from "lucide-react";
import { GitCompare } from "lucide-react";
import { Code } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { Workflow } from "lucide-react";
import { Accessibility } from "lucide-react";
import { UserSearch } from "lucide-react";
function Skills() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">My skills</h2>
      <p className="text-lg font-normal mb-4 text-center">
        Proficient and skilled in:
      </p>
      <div className="flex flex-nowrap justify-center items-center gap-20 ">
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
      <div className="grid grid-cols-3 gap-10 mt-4">
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <GitCompare color="#6687eb" className="size-4 font-normal " />
            <p className="text-lg font-normal text-[#6687eb]">
              Version control
            </p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I'm proficient in using control like Git, ensuring efficient
            collabortion and version management in my development.
          </p>
        </div>
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <Code color="#6687eb" className="size-4 font-normal " />
            <p className="text-lg font-normal text-[#6687eb]">
              Design implementing
            </p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I'm skilled in translating design mockups into functional and
            visually appealing web application.
          </p>
        </div>
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <MonitorSmartphone
              color="#6687eb"
              className="size-4 font-normal "
            />
            <p className="text-lg font-normal text-[#6687eb]">Responsiveness</p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I develop responsive web applications that adapt to different screen
            sizes, devices, and orientations, ensuring a great user experience.
          </p>
        </div>
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <Workflow color="#6687eb" className="size-4 font-normal " />
            <p className="text-lg font-normal text-[#6687eb]">
              API integration
            </p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I'm experience in Integrating APIs, fetch and display data, enabling
            seamless communication between frontend and backend system.
          </p>
        </div>
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <Accessibility color="#6687eb" className="size-4 font-normal " />
            <p className="text-lg font-normal text-[#6687eb]">Accesibility</p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I'm commited to building inclusive and accesible web applications
            that meet the neds of all users, following best practces guideline
            like WCAG2.1
          </p>
        </div>
        <div className="shadow rounded-md px-4 py-2 bg-white">
          <div className="flex gap-1 justify-start items-center  bg-slate-50 w-fit rounded px-px">
            <UserSearch color="#6687eb" className="size-4 font-normal " />
            <p className="text-lg font-normal text-[#6687eb]">
              SEO optimization
            </p>
          </div>
          <p className="text-base font-normal leading-relaxed">
            I understand the importance of search engine optimization and
            implement techniques to improve website visibility, drive traffic.
            and rankings.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
