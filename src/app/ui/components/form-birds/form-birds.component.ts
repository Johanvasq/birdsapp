import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IBirdModel} from "../../../domain/models/bird/bird.model";

@Component({
  selector: 'app-form-birds',
  templateUrl: './form-birds.component.html',
  styleUrls: ['./form-birds.component.css']
})
export class FormBirdsComponent implements OnInit {

  guardarBtn:boolean = true;
  id: string = "";
  scientificName: string = "";
  name: string = "";

  @Output() event = new EventEmitter<IBirdModel>();

  constructor() { }

  ngOnInit(): void {
  }

  saveBird(){
    let obj: IBirdModel = {
      scientificName: this.scientificName,
      commonName: this.name
    }
    this.event.emit(
      obj
    )

  }

}
