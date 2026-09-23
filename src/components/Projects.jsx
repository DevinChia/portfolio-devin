import aureliaResortImage from "../assets/aurelia-resort.png"
import inboundManagementImage from "../assets/inbound-management.png"
import gentlemansCutImage from "../assets/gentlemans-cut.png"
import carCustomizerImage from "../assets/car-customizer.png"
import kopiSenjaImage from "../assets/kopi-senja.png"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Projects
        </h2>

        <ProjectCard
          image={inboundManagementImage}
          title="Inbound Management System"
          tags={["React", "Node.js", "Express", "Prisma", "PostgreSQL"]}
          description="A full-stack web application for managing and monitoring inbound shipment data, with features for dashboards, shipment tracking, search, filtering, and data import."
          githubLink="https://github.com/DevinChia/inbound-management"
        />

        <ProjectCard
          image={carCustomizerImage}
          title="3D Car Customizer"
          tags={["React", "Three.js", "Supabase"]}
          description="A web-based 3D car customization application that allows users to upload GLB models, customize the car's appearance, and save their customizations."
          liveLink="https://3d-car-customizer.vercel.app"
          githubLink="https://github.com/DevinChia/web-based-3d-car-customizer"
        />

        <ProjectCard
          image={aureliaResortImage}
          title="Aurelia Resort Website"
          tags={["React", "Tailwind CSS"]}
          description="A multi-page luxury resort website concept featuring responsive layouts, cinematic visuals, image reveals, parallax effects, and interactive navigation."
          liveLink="https://aurelia-beach-resort.netlify.app"
          githubLink="https://github.com/DevinChia/aurelia-beach-resort-website"
        />

        <ProjectCard
          image={gentlemansCutImage}
          title="Gentleman's Cut Barbershop Website"
          tags={["React", "Tailwind CSS"]}
          description="A modern responsive multi-page business website concept for a barbershop, designed to showcase its services, gallery, location, and contact information."
          liveLink="https://gentlemans-cut-barbershop.vercel.app"
          githubLink="https://github.com/DevinChia/gentlemans-cut-barbershop-website"
        />

        <ProjectCard
          image={kopiSenjaImage}
          title="Kopi Senja Landing Page"
          tags={["React", "Tailwind CSS"]}
          description="A modern responsive landing page concept for a coffee shop, designed to showcase its menu, atmosphere, location, and social media presence."
          liveLink="https://kopi-senja-cafe.vercel.app"
          githubLink="https://github.com/DevinChia/kopi-senja-landing-page"
        />
      </div>
    </section>
  )
}

export default Projects