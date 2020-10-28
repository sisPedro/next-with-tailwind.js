import Image from "next/image";

function Main() {
  return (
    <div className="flex justify-between items-center p-8">
      <h1>My Homepage</h1>

      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <p>Welcome to my homepage!</p>
    </div>
  );
}

export default Main;
