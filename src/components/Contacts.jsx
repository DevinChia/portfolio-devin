import whatsappIcon from "../assets/whatsapp.svg"
import instagramIcon from "../assets/instagram.svg"
import linkedinIcon from "../assets/linkedin.svg"
import emailIcon from "../assets/email.png"

function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:px-10 md:py-24 bg-[#EDF7FA]">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

        <h2 className="text-3xl font-bold md:text-4xl">
          Let's Connect
        </h2>

        <p className="mt-4 max-w-md leading-relaxed text-gray-600">
          Feel free to reach out or connect with me through my social
          platforms.
        </p>

        <div className="mt-8 flex items-center gap-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281219630222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform hover:-translate-y-1"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="h-7 w-7"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/chiadevin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:-translate-y-1"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="h-7 w-7"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/devin-chia-586359251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:-translate-y-1"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-7 w-7"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:devinchia777@gmail.com"
            aria-label="Email"
            className="transition-transform hover:-translate-y-1"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="h-7 w-7"
            />
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact