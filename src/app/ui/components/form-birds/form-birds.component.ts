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
  cientificName: string = "a";
  name: string = "";

  @Output() event = new EventEmitter<IBirdModel>();

  constructor() { }

  ngOnInit(): void {
  }

  saveBird(){
    alert(this.cientificName)

  }

}
