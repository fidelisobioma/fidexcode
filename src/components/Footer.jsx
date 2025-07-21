import ScrollReveal from "./ScrollReveal";

function Footer() {
  return (
    <footer className="max-w-7xl p-10 mx-auto text-gray-800">
      <ScrollReveal>
        <p className="text-base font-normal mb-4 text-center">
          &copy; 2025 | All rights reserved
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-base font-normal mb-4 text-center">
          Developed by fidexcode
        </p>
      </ScrollReveal>
    </footer>
  );
}
export default Footer;
