import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Projects({ onAdd,onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  const handleSave = () => {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDuedate = dueDate.current.value;

    // validation
    if (
      projectTitle.trim() === "" ||
      projectDescription.trim() === "" ||
      projectDuedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDuedate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-stone-700 my-4 text-xl font-bold">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Ooopsie ... Looks like you forgot to enter a value!</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label={"Title"} />
          <Input ref={description} lengthy={true} label={"Description"} />
          <Input ref={dueDate} type="date" label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
