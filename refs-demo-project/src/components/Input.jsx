import { forwardRef } from "react";

const Input = forwardRef(function Input({ lengthy, id, label, ...props },ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-700";
  return (
    <p className="flex flex-col my-4 gap-1">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      {lengthy ? (
        <textarea ref={ref} rows="3" id={id} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} id={id} {...props} className={classes} />
      )}
    </p>
  );
  });

export default Input;
