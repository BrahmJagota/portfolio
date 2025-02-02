import illustration from '../assets/illustration.jpg';
export default function About () {
    return (
        <div className="h-screen flex justify-center items-center p-10">
            <div className="w-full md:w-[60%] md:p-20">
    <p className="text-lg p-4 font-semibold tracking-widest">
        My journey into tech started with gaming during the COVID-19 lockdown, where I spent countless hours playing online with friends. That curiosity led me into hacking, exploring cryptography and networking, but I soon realized my real passion lay elsewhere. In 2022, I started my BCA degree and discovered web development—where creativity meets logic. I began with C and C++, building a strong foundation, and now, I craft full-stack applications with TypeScript. What started as curiosity has turned into an exciting path of continuous learning, innovation, and turning ideas into reality.
    </p>
    </div>
    <div className="hidden md:block md:w-[40%] p-4">
        <img src={illustration} alt="image" className='h-full w-full' />
        
    </div>
</div>

    )
}