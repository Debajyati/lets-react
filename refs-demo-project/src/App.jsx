import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const projectID = Math.random();
    const newProject = {
      ...projectData,
      id: projectID,
    };

    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: undefined,
      projects: [...prevState.projects, newProject],
    }));
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectID: undefined,
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: id,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectID: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectID,
      ),
    }));
  }

  function handleAddTask(text) {
    const taskID = Math.random();

    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectID,
        id: taskID,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID,
  );
  const selectedProjectTasks = projectsState.tasks.filter(task => task.projectID === projectsState.selectedProjectID);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );
  console.log(projectsState);

  if (projectsState.selectedProjectID === null) {
    content = <Projects onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectID={projectsState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
