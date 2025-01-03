import React from 'react';
import { Code, Database, Palette } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="section-3d p-8 hover:border-2 hover:border-primary transition-all duration-300">
    <div className="flex items-center mb-6">
      <Icon className="text-primary mr-3" size={24} />
      <h3 className="text-xl font-semibold text-dark">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-4 py-2 bg-neutral rounded-full text-dark hover:bg-primary hover:text-white
                   transform hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
                   onClick={() => window.open(skillLinks[skill], '_blank')} // Open link in a new tab
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    development: ['HTML','CSS','Core Java', 'JavaScript','React.js', 'Node.js', 'Nest.js', 'TypeScript',],
    database: ['MySQL', 'MongoDB', 'SQL', 'Data Structures'],
    tools: ['Git', 'Github','VPS','Netlify','Adv. AI Tools','Adobe Photoshop','EXCEL',]
  };

  const skillLinks = {
    HTML: 'https://www.w3schools.com/html/default.asp',
    CSS: 'https://www.w3schools.com/css/default.asp',
    'Core Java': 'https://www.javatpoint.com/core-java',
    JavaScript: 'https://www.w3schools.com/js/default.asp',
    'React.js': 'https://reactjs.org/',
    'Node.js': 'https://nodejs.org/',
    'Nest.js': 'https://nestjs.com/',
    TypeScript: 'https://www.typescriptlang.org/',
    MySQL: 'https://www.mysql.com/',
    MongoDB: 'https://www.mongodb.com/',
    SQL: 'https://www.w3schools.com/sql/default.asp',
    'Data Structures': 'https://www.geeksforgeeks.org/data-structures/',
    Git: 'https://git-scm.com/',
    Github: 'https://github.com/',
    VPS: 'https://www.digitalocean.com/',
    Netlify: 'https://www.netlify.com/',
    'Adv. AI Tools': 'https://www.openai.com/',
    'Adobe Photoshop': 'https://www.adobe.com/products/photoshop.html',
    EXCEL: 'https://www.microsoft.com/en-us/microsoft-365/excel',
  };

  return (
    <section id="skills" className="py-25 bg-white">
      <div className="container mx-auto px-6">  
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory icon={Code} title="Development" skills={skills.development} skillLinks={skillLinks} />
          <SkillCategory icon={Database} title="Database" skills={skills.database} skillLinks={skillLinks} />
          <SkillCategory icon={Palette} title="Tools" skills={skills.tools} skillLinks={skillLinks} />
        </div>
      </div>
    </section>
  );
};

export default Skills;