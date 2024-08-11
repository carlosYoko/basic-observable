import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  numPersonas: number;

  constructor(private personasService: PersonasService) {
    this.numPersonas = 0;
  }

  ngOnInit(): void {
    this.personasService.getPersonas$().subscribe(personas => {
      this.numPersonas = personas.length;
    })
  }

}
