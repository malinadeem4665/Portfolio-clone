import { heroData } from '@/data/mockData';
import AnimatedRole from './AnimatedRole';
import { ParticleCard } from './MagicBento';
import ProfileCard from './ProfileCard';

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
          <ParticleCard
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md border border-primary hover:bg-transparent hover:text-primary hover-scale transition-all duration-300 shadow-lg shadow-primary/20 font-medium"
            enableMagnetism
          >
            <a href="https://github.com/malinadeem4665/" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on Github
            </a>
          </ParticleCard>
          <ParticleCard
            className="bg-transparent text-primary px-6 py-2.5 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 font-medium"
            enableMagnetism
          >
            <a href="https://www.linkedin.com/in/ali-nadeem-74bb523b6/" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on LinkedIn
            </a>
          </ParticleCard>
        </div>
      </div>

      <ProfileCard
        avatarUrl="https://cdn.builder.io/api/v1/image/assets%2F42ab9f74dfb742f7b5e9210ff08e2902%2Fac13db3955644600bcda5ce5f5e41db6?format=webp&width=800&height=1200"
        miniAvatarUrl="https://cdn.builder.io/api/v1/image/assets%2F42ab9f74dfb742f7b5e9210ff08e2902%2Fac13db3955644600bcda5ce5f5e41db6?format=webp&width=800&height=1200"
        name="Ali Nadeem"
        title="Full Stack Developer"
        handle="ali-nadeem"
        status="Available"
        contactText="Get in Touch"
        contactUrl="#contact"
        showUserInfo={true}
        enableTilt={true}
        behindGlowEnabled={true}
        behindGlowColor="rgba(154, 57, 242, 0.5)"
        innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.55) 0%, rgba(113, 196, 255, 0.27) 100%)"
      />
    </section>
  );
};

export default Hero;
