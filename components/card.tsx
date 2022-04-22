export default function Card({children, title}) {
  return (
    <div className="w-full card h-56 bg-base-100 shadow-md transition all ease-in-out duration-300 md:w-80 hover:shadow-2xl hover:cursor-pointer hover:-translate-y-1">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}