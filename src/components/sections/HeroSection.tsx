import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIAL_MEDIA_HANDLES } from "@/constants/social-media";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BiLogoAws } from "react-icons/bi";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
const WORDS = [
  "Frontend Frameworks",
  "Backend Development",
  "Javascript Libraries",
  "UI/UX Designs",
];

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid min-h-screen grid-cols-1 items-center sm:grid-cols-2">
      <div className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start">
        <h1 className="mb-2 text-5xl font-semibold">
          Hi, I&apos;m Arjun Bector
          <div className="inline-block animate-rotate text-4xl">👋</div>
        </h1>
        <p className="max-w-prose px-10 text-xl sm:px-0">
          I&apos;m a passionate software engineer with an interest in
          <br />
          <FlipWords duration={2000} words={WORDS} />
        </p>
        <div className="mt-2 flex space-x-2">
          {SOCIAL_MEDIA_HANDLES.map((handle) => {
            const Icon = handle.icon;
            return (
              <TooltipProvider key={handle.name} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                    target="_blank"
                      key={handle.name}
                      href={handle.url}
                      className={cn(
                        buttonVariants({
                          variant: "secondary",
                          size: "sm",
                        }),
                      )}
                    >
                      <Icon className="h-6 w-6 shrink-0 stroke-[1.5]" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <div className="text-xs">{handle.name}</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={60}
        >
          <FaGithub className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={60}
        >
          <RiTailwindCssFill className="h-8 w-8" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          reverse
        >
          <RiNextjsFill className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={20}
          reverse
        >
          <BiLogoAws className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={30}
          reverse
        >
          <FaFigma className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={40}
          reverse
        >
          <SiMongodb className="h-8 w-8" />
        </OrbitingCircles>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
