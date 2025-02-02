import settings from '../assets/png/settings.png'
import bulb from '../assets/png/buld.png';
import react from '../assets/png/react1.png';
import mongodb from '../assets/png/mongodb.png';
import express from '../assets/png/express.png';
import nodejs from '../assets/png/nodejs.png';
import tick from '../assets/png/tick.png';
import repairTools from '../assets/png/tools.png'

export default function Skill() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "React",
    "Express",
    "Nestjs",
    "Node.js",
    "Mongodb",
    "Prisma",
  ];

  const tools = [
    "Git + Github",
    "Command Line",
    "Chrome DevTools",
    "VS Code",
    "Postman",
  ];

  const knowledge = [
    "Socket.io",
    "JWT",
    "Razorpay",
    "APIs",
    "OAuth",
  ];
  return (
    <div className="min-h-screen bg-[#060606] text-[#F2F2F2] px-6 md:px-16 lg:px-28 py-20">
      <h1 className="text-3xl">Skills</h1>
      <span className="my-4 w-16 bg-blue-400 block h-1"></span>
      <div className="mt-10">
        <div className="  flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* skills section */}
          <div className="flex flex-col items-start p-2">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              <span className="text-xl"><img src={settings} alt="img" width={30} height={30} /></span> DEVELOPMENT
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center border border-[#2a2a2a] rounded-full text-md font-medium transition hover:border-[#f2f2f2]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between mb-4 items-center lg:items-start w-full lg:w-auto">
            <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
              
              <img src={mongodb} alt="mongodb" height={50} width={50}/>
              <img src={express} alt="express" height={45} width={50}/>
              <img src={react} alt="react" height={50} width={50}/>
              <img src={nodejs} alt="nodejs" height={50} width={50}/>
            </div>
            {/* tools section */}
            <div className='w-full'>
              <div className="p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <span className="text-xl"><img src={repairTools} alt="img" width={25} height={25}/></span> TOOLS
                    </h2>
                    <ul className="mt-4 space-y-2">
                      {tools.map((tool, index) => (
                        <li key={index} className="flex items-center">
                          <img src={tick} alt="tick" height={15} width={15} className='mr-1' /> {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Knowledge Section */}
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <span className="text-xl">💡</span> KNOWLEDGE
                    </h2>
                    <ul className="mt-4 space-y-2">
                      {knowledge.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <img src={tick} alt="tick" height={15} width={15} className='mr-1' /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
