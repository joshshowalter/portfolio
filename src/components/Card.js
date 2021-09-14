
const Card = (props) => {
  return (
    <div className="p-4">
      <div className="max-w-lg mx-auto flex sm:bg-white rounded-xl shadow-md overflow-hidden">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
