import { heroData } from '@/data/mockData';
import AnimatedRole from './AnimatedRole';

const Hero = () => {
  const { intro } = heroData;

  return (
    <section id="home" className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 mb-24 max-w-7xl mx-auto gap-10">
      <div className="flex-1 flex flex-col items-start gap-6 animate-fade-in">
        <div>
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <span className="text-foreground text-4xl md:text-5xl font-bold">{intro.greeting}</span>
            <span className="text-4xl md:text-5xl animate-bounce">{intro.emoji}</span>
          </div>
          <AnimatedRole />
          <div className="flex flex-col gap-1 mb-8">
            {intro.description.map((line, index) => (
              <span key={index} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          <a href="https://github.com/malinadeem4665/" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md border border-primary hover:bg-transparent hover:text-primary hover-scale transition-all duration-300 shadow-lg shadow-primary/20 font-medium">
            View on Github
          </a>
          <a href="https://www.linkedin.com/in/ali-nadeem-74bb523b6/" target="_blank" rel="noopener noreferrer" className="bg-transparent text-primary px-6 py-2.5 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 font-medium">
            View on LinkedIn
          </a>
        </div>
      </div>

      <div className="relative group animate-scale-in">
        <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
        <img
          src="https://picsum.photos/300/300?random=1"
          alt="Profile"
          className="relative w-[300px] h-[300px] object-cover rounded-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-500"
          loading="eager"
          decoding="async"
          width="300"
          height="300"
        />
      </div>
    </section>
  );
};

export default Hero;
