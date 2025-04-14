const Hero = () => (
    <div className="text-center bg-gradient-to-r from-indigo-600 to-blue-500 py-16 px-4">
      <img src="/1.jpg" alt="Gaurav Salunke" className="w-28 h-28 rounded-full mx-auto mb-4 shadow-lg" />
      <h1 className="text-4xl font-bold">Gaurav Salunke</h1>
      <p className="mt-2 text-lg">Web Developer | Tech Enthusiast | Management</p>
      <div className="mt-4 space-x-4">
        <a href="/resume.pdf" download>
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg">Download Resume</button>
        </a>
        <a href="#Project">
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg">View Projects</button>
        </a>
      </div>
    </div>
  );
  
  export default Hero;
  