import { allPages } from "@/.contentlayer/generated"
import Mdx from "@/components/Mdx";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
const socialLinks = [
	{
		icon: TwitterIcon,
		text: "Twitter",
	},
	{
		icon: InstagramIcon,
		text: "Instagram",
	},
	{
		icon: FacebookIcon,
		text: "Facebook",
	},
];

const AboutPage = () => {
  const page =  allPages.find(page => page.slugParams === "about");
  if(!page){
    notFound();
  }
  return (
    <div className="mt-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr] space-y-16 sm:space-y-12">
            <div className="lg:pl-20">
                <div className="max-w-xs px-3 lg:max-w-none">
                    <Image src={page.image} alt="portrait" width={400} height={400} className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-100 dark:bg-zinc-400"/>
                </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">{page.title}</h1>
                <div className="mt-7 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <Mdx code={page.body.code}/>
                </div>
            </div>
            <div className="lg:pl-20">
                <ul className="space-y-4">
                    {socialLinks.map(link => <li key={link.text} className="flex">
                        <a href="" className="flex group font-medium text-zinc-800 transition hover:text-purple-500 dark:text-zinc-200 dark:hover:text-purple-500">
                            <link.icon className="w-6 h-6 flex-none transition group-hover:text-purple-500"/>
                            <span className="ml-4">Follow on {link.text}</span>
                        </a>
                    </li>)}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutPage