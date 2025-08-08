import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <p className="text-muted-foreground mt-2">A quick intro and a friendly face.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo area */}
          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-border shadow character-glow bg-card flex items-center justify-center">
              {/* Replace the src with your own photo in public/ when ready */}
              <img
                src="/placeholder.svg"
                alt="Your profile photo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio */}
          <article className="space-y-4">
            <p className="text-foreground text-lg leading-relaxed">
              Hi! I’m a creative developer who enjoys crafting delightful, performant web
              experiences. I focus on clean UI, smooth interactions, and building products
              that people love to use.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I explore new tools, sketch ideas, and learn something new
              every day. This section is fully yours—swap in your own story anytime.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
