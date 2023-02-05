import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IZoneModel} from "../../../domain/models/zone/zone.model";

@Component({
  selector: 'app-form-zones',
  templateUrl: './form-zones.component.html',
  styleUrls: ['./form-zones.component.css']
})
export class FormZonesComponent implements OnInit {

  guardarBtn:boolean = true;
  id: number = 0;
  name: string = "";

  @Input()
  set infoCountry (zone: IZoneModel |null){
    if (zone != null){
      // @ts-ignore
      this.id = zone.id;
      this.name = zone.zoneName;
      this.guardarBtn = false;
    }
  }
  @Output() evento = new EventEmitter<IZoneModel>();
  @Output() eventoEdit = new EventEmitter<IZoneModel>();

  constructor() { }

  ngOnInit(): void {
  }

  saveCountry(){
    let obj: IZoneModel = {
      zoneName : this.name
    }
    this.evento.emit(
      obj
    )
    this.id = 0
    this.name = "";
  }

  updateCountry(){
    let obj: IZoneModel = {
      id : this.id,
      zoneName: this.name
    }
    this.eventoEdit.emit(
      obj
    )
    this.id = 0
    this.name = "";
    this.guardarBtn = true;
  }

}
