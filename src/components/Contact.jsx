import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
function Contact() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto" id="contact">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-center text-gray-900">
        Contact me
      </h2>
      <p className="text-lg font-normal mb-4 text-center text-gray-800">
        Have any opportunities? reach out to me.
      </p>
      <div className="text-gray-800">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div>
            <Mail color="#6574a0" />
          </div>
          <div>
            <p className="text-base font-normal  text-center">
              mbamfidelisobioma1@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <Phone color="#6574a0" />
          <div>
            <p className="text-base font-normal  text-center">+2348132034923</p>
          </div>
        </div>
        <div className="flex justify-center items gap-2 mb-4">
          <div>
            <MapPin color="#6574a0" />
          </div>
          <div>
            <p className="text-base font-normal text-center">
              Abakaliki, Nigeria
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className=" flex items-center justify-center size-10 rounded-full bg-[#6574a0] text-white  hover:bg-[#90b0ff] transition">
            <Github />
          </div>
          <div className=" flex items-center justify-center size-10 rounded-full bg-[#6574a0] text-white  hover:bg-[#90b0ff] transition">
            <Twitter />
          </div>
          <div className=" flex items-center justify-center size-10 rounded-full bg-[#6574a0] text-white  hover:bg-[#90b0ff] transition">
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
