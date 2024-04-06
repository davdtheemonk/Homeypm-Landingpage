export default function Button(props) {
  return (
    <div
      onClick={() => {
        props.action();
      }}
      className={
        props.style
          ? props.style
          : "w-full h-[50px] md:w-[50%] mt-4 bg-primary cursor-pointer hover:card rounded-md flex justify-center items-center text-white text-center font-bold"
      }
    >
      <p>{props.title}</p>
    </div>
  );
}
