import { projects } from '../Data/projects';

const Projects = () => (
  <section id="Project" className="max-w-5xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
          <img src={project.image} alt={project.title} className="mb-4 rounded-md mx-auto" />
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm mb-3">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
