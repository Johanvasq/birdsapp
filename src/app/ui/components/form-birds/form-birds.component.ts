import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-birds',
  templateUrl: './form-birds.component.html',
  styleUrls: ['./form-birds.component.css']
})
export class FormBirdsComponent implements OnInit {

  guardarBtn:boolean = true;
  id: string = "";
  cientificName: string = "hola";
  name: string = "hola";
  constructor() { }

  ngOnInit(): void {
  }

}
