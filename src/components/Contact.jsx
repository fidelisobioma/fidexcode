import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
function Contact() {
  return (
    <div className="bg-white p-10  max-w-7xl m-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact me</h2>
      <p className="text-lg font-normal mb-4 text-center">
        Have any opportunities? reach out to me.
      </p>
      <div>
        <div className="flex justify-center gap-2 ">
          <Mail />
          <div>
            <p className="text-lg font-normal mb-4 text-center">
              mbamfidelisobioma1@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 ">
          <Phone />
          <div>
            <p className="text-lg font-normal mb-4 text-center">
              +2348132034923
            </p>
          </div>
        </div>
        <div className="flex justify-center  gap-2 ">
          <div>
            <MapPin />
          </div>
          <div>
            <p className="text-lg font-normal mb-4 text-center">
              Abakaliki, Nigeria
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <Github />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
