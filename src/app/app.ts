import { Component } from '@angular/core';

import { Navbar } from './shared/navbar/navbar';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';
import { CareerJourney } from './pages/career-journey/career-journey';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Experience,
   CareerJourney,
    Resume,
    Contact
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}