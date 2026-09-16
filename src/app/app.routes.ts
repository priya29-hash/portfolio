import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'projects',
    component: Projects
  },
  {
  path: 'experience',
  component: Experience
},
{
  path: 'resume',
  component: Resume
},
{
  path: 'contact',
  component: Contact
}
];