import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBirdModel} from "../../../domain/models/bird/bird.model";

@Component({
  selector: 'app-form-birds',
  templateUrl: './form-birds.component.html',
  styleUrls: ['./form-birds.component.css']
})
export class FormBirdsComponent implements OnInit {

  guardarBtn:boolean = true;
  id: number = 0;
  scientificName: string = "";
  name: string = "";

  @Input()
  set infoBird (bird: IBirdModel |null){
    if (bird != null){
      // @ts-ignore
      this.id = bird.id;
      this.name = bird.commonName;
      this.scientificName = bird.scientificName;
      this.guardarBtn = false;
    }
  }
  @Output() evento = new EventEmitter<IBirdModel>();
  @Output() eventoEdit = new EventEmitter<IBirdModel>();

  constructor() { }

  ngOnInit(): void {
  }

  saveBird(){
    let obj: IBirdModel = {
      scientificName: this.scientificName,
      commonName: this.name
    }
    this.evento.emit(
      obj
    )
    this.id = 0
    this.name = "";
    this.scientificName = "";
  }

  updateBird(){
    let obj: IBirdModel = {
      id : this.id,
      scientificName: this.scientificName,
      commonName: this.name
    }
    this.eventoEdit.emit(
      obj
    )
    this.id = 0
    this.name = "";
    this.scientificName = "";
    this.guardarBtn = true;
  }



}
