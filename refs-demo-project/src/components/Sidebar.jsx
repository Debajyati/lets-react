import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside
      style={{ float: "left" }}
      className="bg-stone-900 rounded-r-xl w-1/3 my-8 py-16 text-white md:w-72 text-center"
    >
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-2/3 text-left px-2 py-1 ml-6 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectID) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
