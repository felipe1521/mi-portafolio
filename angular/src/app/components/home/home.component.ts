import { Component, OnInit } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { ActivatedRoute } from '@angular/router';
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  redirectWindow(page: string) {
    switch(page) {
      case 'linkedin':
        window.open('https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286');
        break;
      case 'github':
        window.open('https://github.com/felipe1521');
        break;
    }
    
  }
}
