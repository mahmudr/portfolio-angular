import { Component} from '@angular/core';
import { LinksT, ProfileComponent } from './components/profile/profile.component';
import { EducationAndWorkHistoryComponent } from './components/education-and-work-history/education-and-work-history.component';
import { ProjectsComponent, ProjectT } from './components/projects/projects.component';
import { AnimationComponent } from './components/animation/animation.component';
import { Skill_ExpT, SkillsAndExperienceComponent } from './components/skills-and-experience/skills-and-experience.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, EducationAndWorkHistoryComponent, ProjectsComponent, AnimationComponent, SkillsAndExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  links: Array<LinksT> = [
    { name: 'Github', href: 'https://github.com/mahmudr'},
    { name: 'Linkedin ', href: 'https://www.linkedin.com/in/bdebruyn/'},
    { name: 'Resume', href: 'https://drive.google.com/file/d/1ivT9rXfcjPebL6HAlUwQv1k0iCfkuaff/view' },
  ]
  about_me: string = `Hi, I'm Rahat, a full-stack developer with a strong passion for coding. My primary tech stack includes TypeScript, JavaScript, Angular, React,
  SCSS, CSS, Ionic, Firebase, ASP.NET and ASP.NET Web API, .NET Framework, C#, and Microsoft SQL. I strive for excellence in all my projects and am dedicated to staying updated with the latest advancements in technology.`;
 
  skills_exp: Array<Skill_ExpT> = [
    {
      category: 'Backend Development',
      technologies: ['MongoDB', 'ASP.NET Web API', 'ASP.NET MVC', 'ASP.NET Core', 'C#', '.NET']
    },
    {
      category: 'Frontend Development',
      technologies: ['Angular', 'Angular.js', 'JavaScript', 'TypeScript', 'JQuery', 'Ionic', 'SCSS', 'HTML', 'React']
    },
    {
      category: 'Database and Deployment',
      technologies: ['Firebase', 'Git ', 'Microsoft SQL']
    }
  ];

  projects: Array<ProjectT> = [
    {
      name: 'Mac Changer',
      photoName: 'TDLauncher.png',
      shortDesc: `Built with Python, this project allows users to change their MAC address with a single click.
                  I noticed people paying for a similar tool unnecessarily and created a free alternative.
                  The project was a great learning experience for me, as I got to explore Python and its libraries.`,
      href: 'https://github.com/mahmudr/mac_changer_with_python'
    },
    {
      name: 'Online Chatting App',
      photoName: 'vic_chat.jpg',
      shortDesc: `Built with React and Firebase, this project let's you login through Google or Facebook, with Firebase handling real-time chatting and the authentication.
                  I do not have much to say about the project; as it was more of a learning experience to explore React and Firebase.`,
      href: 'https://github.com/mahmudr/react-chatapp'
    },
    {
      name: 'Demo Portfolio',
      photoName: 'fivem_lua_scripts.jpg',
      shortDesc: `Written in Typescript, this project contains various scripts to meet the needs of project requirements. 
                  The project was a great way to showcase my skills,and improve on my coding skills.`,
                  
      href: 'https://github.com/mahmudr/demo-portfolio'
    },
    {
      name: 'Blogging Website',
      photoName: 'originx.png',
      shortDesc: `Built with Angular and .NET Core, this project is a blogging website template that allows users to create, edit, and delete posts.
                  The project was a great way to learn Angular and .NET Core, and how to integrate the two together.`,  
      href: 'https://github.com/mahmudr/blogging-website-template'
    },
    {
      name: 'E-Sports Scoring',
      photoName: 'scorecraft.png',
      shortDesc: `Using Angular v17 and .NET 8 Web API with entity framework, I developed this project for managing e-sports teams, with additional functionality of match scheduling, score tracking and win rate ratio's for the team managers.
                  The project goal was to learn standalone angular applications and how to integrate and use entity framework with .net web api.
                  The project was fun, implementing entity framework into .net was something new to me, and i enjoyed learning it.`,
      href: 'https://github.com/mahmudr/esports-scoring-app'
    }
  ];
  
}
