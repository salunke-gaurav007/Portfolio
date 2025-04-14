import { Experience as expList } from '../Data/Experience';

const Experience = () => (
  <section className="max-w-5xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold mb-6">Experience</h2>
    <div className="space-y-6">
      {expList.map((exp, index) => (
        <div key={index} className="bg-slate-800 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 hover:scale-105 transition-transform duration-300">
          <img src={exp.image} alt={exp.title} className="w-40 h-40 object-cover rounded-md" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-sm mb-3">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
