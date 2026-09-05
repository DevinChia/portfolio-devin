import carCustomizerImage from "../assets/car-customizer.png"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Projects
        </h2>

        <ProjectCard
          image={carCustomizerImage}
          title="3D Car Customizer"
          tags={["React", "Three.js", "Supabase"]}
          description="A web-based 3D car customization application that allows users to upload GLB models, customize the car's appearance, and save their customizations."
          liveLink="https://3d-car-customizer.vercel.app"
          githubLink="https://github.com/DevinChia/web-based-3d-car-customizer"
        />
      </div>
    </section>
  )
}

export default Projects