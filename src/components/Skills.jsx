import htmlIcon from "../assets/html.svg"
import cssIcon from "../assets/css.svg"
import javascriptIcon from "../assets/javascript.svg"
import reactIcon from "../assets/react.png"
import tailwindIcon from "../assets/tailwind.svg"
import gitIcon from "../assets/git.svg"
import threeIcon from "../assets/threejs.png"

function Skills() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Git", icon: gitIcon },
    { name: "Three.js", icon: threeIcon },
  ]

  return (
    <section
      id="skills"
      className="bg-[#EDF7FA] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Skills
        </h2>

        <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
          Technologies and tools I use to build responsive and interactive
          web applications.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex w-[calc(50%-0.5rem)] flex-col items-center justify-center rounded-lg bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md md:w-[calc(25%-0.75rem)]"
            >
              <img
                src={skill.icon}
                alt=""
                className="h-9 w-9 md:h-12 md:w-12"
              />

              <p className="mt-3 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills