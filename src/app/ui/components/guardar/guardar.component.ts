import { Component, OnInit, Input } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  @Input() entidad: string = "";

  name: string;
  cientificName: string;

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {
  }

  guardarBird(){
    this.birdUseCase.saveBird({commonName : this.name , scientificName : this.cientificName}).subscribe(
      result => {
        alert(`Se guardo ${result?.commonName}`)
      }
    )
  }
}
