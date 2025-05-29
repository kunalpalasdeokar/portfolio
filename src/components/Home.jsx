import { Link } from 'react-router-dom';

function Home() {
    return (
      <section className="text-center py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <h1 className="text-4xl font-bold">Kunal Palasdeokar</h1>
        <p className="text-xl mt-4">Robotics Engineer | Embedded Systems | Controls</p>
        <div className="mt-6 flex justify-center gap-4">
          {/* <a href="https://github.com/YOUR_USERNAME" className="text-blue-300 hover:underline">GitHub</a> */}
          <a href="https://www.linkedin.com/in/kunalpalasdeokar/" className="text-blue-300 hover:underline">LinkedIn</a>{" | "}
          <a href="?page=resume">Resume</a>{" | "}
          <a href="?page=contact">Contact</a>
        </div>
      </section>
    );
  }
  
  export default Home;
  