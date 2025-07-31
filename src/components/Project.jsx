const Projects = () => (

    <section
    id="projects"
    className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-20"
  >
   
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="space-y-4 text-lg text-gray-700 max-w-2xl">
        <li>
          <strong>Build Your Own World:</strong> A procedurally generated world engine with coin collection, save/load functionality, and multi-character support.
        </li>
        <li>
          <strong>Movie Recommender (Open Project):</strong> LLM-powered recommender system trained on user preferences and conversational feedback.
        </li>
        <li>
          <strong>SplitSecure:</strong> access control logic for a zero-trust security startup.
        </li>
      </ul>
    </section>
  );
  
  export default Projects;