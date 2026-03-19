import { educationAssisterData } from '@/data/mockData';

const EducationAssister = () => {
  const { title, subtitle, desc, modules } = educationAssisterData;

  return (
    <section className="bg-secondary py-16 px-6 md:px-16 mb-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-12 text-center hover:text-primary transition-colors">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 w-full">
          <div className="flex-1">
            <h3 className="text-foreground text-2xl font-bold mb-6">{subtitle}</h3>
            <div className="space-y-2">
              {desc.map((line, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/kwspow7v_expires_30_days.png" 
              alt="SEA Dashboard" 
              className="w-full max-w-md object-contain hover-scale drop-shadow-[0_0_20px_hsl(270,70%,55%,0.3)]"
            />
            <div className="w-48 h-1 bg-primary mt-10 shadow-[0px_20px_15px_hsl(270,70%,55%,0.4)]"></div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-foreground text-2xl font-bold mb-8 text-center">Main Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-primary/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-primary border border-border"
              >
                <h4 className="text-foreground text-xl font-bold mb-4 pb-2 border-b border-border">{mod.title}</h4>
                <div className="space-y-1">
                  {mod.desc.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm md:text-base">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <h3 className="text-foreground text-2xl font-bold mb-8">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/xv4hnda1_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/qxgfihk5_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/w256ocp8_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/gki67tvb_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/batyeojq_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/8xhv32ov_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/njkny52x_expires_30_days.png",
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/gjebpis0_expires_30_days.png"
            ].map((src, i) => (
              <img key={i} src={src} alt="tech" className="w-12 h-12 object-contain hover:scale-125 hover:drop-shadow-[0_0_8px_hsl(270,70%,55%,0.5)] transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAssister;
