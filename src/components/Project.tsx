interface ProjectProps {
    title: string;
    description: string;
    techUsed: string[];
    img: string;
}

export default function Project ({title, description, techUsed, img}: ProjectProps) {
    return (
        <div className="relative w-full m-4 py-8 group cursor-pointer" >
            <div className="absolute right-10 hidden md:block top-1/2 -translate-y-1/2 z-10 h-0 w-72 bg-red-400 group-hover:h-[200%] duration-300">
                <img src={img} alt="image" loading="lazy" width={1000} height={1000} className="h-full w-full object-cover" />
            </div>
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className="text-gray-500 text-sm md:w-2/3">{description}</p>
            <div className="flex gap-2 mt-2">
                {techUsed.map(tech => (
                <small className=" border px-3 rounded-full">{tech}</small>
                ))}
            </div>
        </div>
    )
}