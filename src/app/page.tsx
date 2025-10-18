import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  return (
    <>
      <Hero></Hero>
      <ExperienceTimeline />
      <ProjectCard></ProjectCard>
    </>
  );
}
