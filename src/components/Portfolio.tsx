const portfolioItems = [
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/82mf4m64_expires_30_days.png", link: "https://dribbble.com/shots/popular", title: "Dribbble Designs" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/genrlsn4_expires_30_days.png", link: "https://www.awwwards.com/websites/portfolio/", title: "Awwwards Portfolios" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/0f9owoat_expires_30_days.png", link: "https://www.behance.net/gallery/web-design", title: "Behance Web Design" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/mc1feo75_expires_30_days.png", link: "https://github.com/malinadeem4665-cmd", title: "GitHub Profile" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/9ncpfyyi_expires_30_days.png", link: "https://codepen.io/trending", title: "CodePen Trending" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/gjo2kbpk_expires_30_days.png", link: "https://www.figma.com/community", title: "Figma Community" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/8358t1p8_expires_30_days.png", link: "https://themeforest.net/category/site-templates", title: "ThemeForest Templates" },
  { image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/w9lxqr3v_expires_30_days.png", link: "https://www.producthunt.com", title: "Product Hunt" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <h2 className="text-foreground text-4xl font-bold mb-16 hover:text-primary transition-colors">
        Portfolio 📷
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {portfolioItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg shadow-lg border border-border hover:border-primary/50 group transition-all duration-300 hover:shadow-primary/15 hover:shadow-xl">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500 cursor-pointer" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

