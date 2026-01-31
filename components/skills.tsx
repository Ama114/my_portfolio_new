"use client"

import Marquee from "react-fast-marquee";

const skills = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-muted-foreground">
          My technical stack and tools I use.
        </p>
      </div>

      {/* --- වෙනස්කම මෙතනයි ---
         1. max-w-4xl: මේකෙන් අපි මුළු පළල සීමා කළා (ඔයාට කැමති නම් 5xl, 3xl දාන්න පුළුවන්).
         2. mx-auto: පෙට්ටිය Screen එකේ මැදට ගත්තා.
         3. [mask-image:...]: මේකෙන් තමයි "මැද හරියෙන් පටන් අරන් මැද හරියෙන් ඉවර වෙන" Effect එක දෙන්නේ. 
            - transparent: දෙපැත්ත නොපෙනී යන්න.
            - white_20%: 20%ක් ඇතුලට ආවම පෙනෙන්න ගන්න.
      */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          
          <Marquee pauseOnHover={true} speed={40} gradient={false} className="py-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-24 h-24 flex flex-col items-center justify-center rounded-2xl bg-muted/50 border border-border/50 backdrop-blur-sm mx-6 hover:scale-110 transition-all duration-300"
              >
                <i className={`${skill.icon} text-5xl mb-2 drop-shadow-md`} />
                <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </section>
  );
}