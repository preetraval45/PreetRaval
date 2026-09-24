import { Hero } from './components/Hero';
import { ProjectTicker } from './components/ProjectTicker';
import { SeatChart } from './components/SeatChart';
import { FeaturedProjects } from './components/FeaturedProjects';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectTicker />
      <SeatChart />
      <FeaturedProjects />
    </div>
  );
}
