export default function Card({children}) {
  return (
    <div className="w-full card bg-base-100 shadow-md transition all ease-in-out duration-300 sm:w-96 hover:shadow-xl hover:cursor-pointer hover:-translate-y-1">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        {children}
      </div>
    </div>
  );
}