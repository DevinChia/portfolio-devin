import profileImage from "../assets/foto-devin.jpg"

function Hero() {
  return (
    <section
      id="profile"
      className="px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center md:flex-row-reverse md:justify-between md:text-left">

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Devin"
          className="h-48 w-48 rounded-full object-cover object-[center_20%] md:h-72 md:w-72"
        />

        {/* Hero Content */}
        <div className="mt-8 md:mt-0 md:max-w-2xl">

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I am Devin,
            <br />
            Frontend Web Developer
          </h1>

          <p className="mt-6 max-w-md leading-relaxed text-gray-600">
            I build responsive and interactive websites with React and 
            modern web technologies, focusing on clean and user-friendly 
            experiences.
          </p>

          <a
            href="/CV-Devin.pdf"
            download
            className="mt-7 inline-block rounded-lg bg-[#FF6464] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#e95757]"
          >
            Download CV
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero