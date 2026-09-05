import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <a
          href="#profile"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-60"
        >
          DEVIN
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#profile"
            className="transition-opacity hover:opacity-60"
          >
            Home
          </a>

          <a
            href="#skills"
            className="transition-opacity hover:opacity-60"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition-opacity hover:opacity-60"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition-opacity hover:opacity-60"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl transition-opacity hover:opacity-60 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-4 md:hidden">
          <a
            href="#profile"
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Home
          </a>

          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </a>

          <a
            href="/cv.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="font-medium transition-opacity hover:opacity-60"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar