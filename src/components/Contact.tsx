const contacts = [
  {
    title: "LinkedIn",
    value: "Ali Nadeem",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/r424ld2o_expires_30_days.png"
  },
  {
    title: "Email",
    value: "m.alinadeem4665@gmail.com",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/ggn12rre_expires_30_days.png"
  },
  {
    title: "Location",
    value: "Punjab,Pakistan",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/mbwmbhndMG/sib8i0ko_expires_30_days.png"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <h2 className="text-foreground text-4xl font-bold mb-12 hover:text-primary transition-colors animate-fade-in">
        Contact me 📱
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-card rounded-xl border border-border shadow-lg hover:shadow-primary/15 hover:shadow-xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={contact.icon} alt={contact.title} className="w-12 h-12 mr-6 rounded-lg group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(270,70%,55%,0.4)] transition-all" />
            <div className="flex flex-col">
              <span className="text-foreground text-lg font-bold mb-1 group-hover:text-primary transition-colors">{contact.title}</span>
              <span className="text-muted-foreground text-sm md:text-base break-all">{contact.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
