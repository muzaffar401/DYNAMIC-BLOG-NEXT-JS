import { projects } from "@/data/projects"
import { ArrowRightIcon } from "lucide-react"

const ProjectsPage = () => {
    return (
        <>
            <header>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Projects That Shape My Journey
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Throughout the years, I have dedicated my time to various ventures, each with
                    a unique impact. While some projects are just budding ideas, others have
                    flourished and continue to grow. They are all open-source, encouraging
                    collaborative development. Dive into the repositories, and if inspiration
                    strikes, join in and contribute to the innovation.
                </p>
            </header>
            <div className="xl:relative mt-16 sm:mt-20">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {projects.map((project) => <li key={project.name} className="flex flex-col items-start group relative">
                        <div className="h-12 w-12 relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/50 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-0">
                            <project.icon />
                        </div>
                        <h2 className="font-semibold text-base tracking-tight text-zinc-800 dark:text-zinc-100 mt-4">
                            <div className="absolute z-0 bg-purple-100/50 -inset-x-4 -inset-y-6 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-purple-800/20" />
                            <a href={"#"}>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">{project.name}</span>
                            </a>
                        </h2>
                        <p className="z-10 relative mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                        <p className="z-10 relative mt-2 first-letter flex font-medium text-zinc-400 transition group-hover:text-green-500 items-center dark:text-green-200">
                            <ArrowRightIcon className="h-3 w-3"/>
                            <span className="ml-3">{project.link.label}</span>
                        </p>
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default ProjectsPage