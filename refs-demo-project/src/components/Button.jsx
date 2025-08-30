export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-500 hover:text-stone-200"
      {...props}
    >
      {children}
    </button>
  );
}
