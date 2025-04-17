const Skills = () => {
    const skillList = ['react', 'Excel', 'Word', 'js', 'html', 'css', 'Tailwind'];
    return (
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {skillList.map((skill) => (
            <>
            <img key={skill} src={`/${skill}.png`} alt={skill} className="w-16 mx-auto hover:scale-150 transition-transform" />
            </>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  