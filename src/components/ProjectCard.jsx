function ProjectCard({ image, title, tags, description, liveLink, githubLink }) {
  return (
    <div className="mt-10 flex flex-col gap-8 border-b border-gray-300 pb-10 md:flex-row md:items-center md:gap-12">
      <img
        src={image}
        alt={title}
        className="w-full rounded-lg object-cover md:w-[52%]"
      />

      <div className="md:flex-1">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#142850] px-3 py-1 text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border bg-[#FF6464] px-4 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#e95757]"
          >
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border bg-[#FF6464] px-4 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#e95757]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard