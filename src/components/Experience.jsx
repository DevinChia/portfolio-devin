function Experience() {
  return (
    <section
      id="experience"
      className="px-6 pt-0 pb-16 md:px-10 md:pb-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold md:text-4xl">
          Experience
        </h2>

        <div className="mt-10">
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Full Stack Developer Intern
                </h3>

                <p className="mt-1 font-medium">
                  PT VEF Solusi Indonesia
                </p>
              </div>

              <p className="text-sm text-gray-500 md:text-base">
                March 2025 – February 2026
              </p>
            </div>

            <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-gray-600">
              <li>
                Developed and maintained web applications using the Frappe framework.
              </li>

              <li>
                Built front-end and back-end features according to system requirements.
              </li>

              <li>
                Managed and integrated databases during application development.
              </li>

              <li>
                Performed debugging and application performance improvements.
              </li>

              <li>
                Collaborated with the team on feature development and implementation.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience