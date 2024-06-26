export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-bold mt-10 text-center">Hi :)</h1>
        <p className="m-10 text-center">I am Varaz. I am interested in building websites, cyber security, and design.</p>
      </div>
      <ul className="flex text-xl mb-16 justify-between w-full max-w-md">
        <li className="mr-6 text-xs ">
          <a className="items-center" target="_blank" href="https://www.instagram.com/inztavran/">
            <img className="w-10 h-10" src="ig-logo.png" alt="instagram" />
            
          </a>
        </li>
        <li className="mr-6 text-xs ">
          <a className="items-center" target="_blank" href="https://www.x.com/randexvu/">
            <img className="w-15 h-10" src="x-logo.png" alt="instagram" />
            
          </a>
        </li>
        <li className="mr-6 text-xs ">
          <a className="items-center" target="_blank" href="https://www.github.com/vrakuko/">
            <img className="w-15 h-10" src="git-logo.png" alt="instagram" />
           
          </a>
        </li>
      </ul>
    </div>
  );
}
