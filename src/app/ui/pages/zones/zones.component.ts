import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {IZoneModel} from "../../../domain/models/zone/zone.model";
import {ZoneUseCase} from "../../../domain/usecase/zone.usecase";

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  listarZones: Array<IZoneModel> | null = []

  zones : IZoneModel | null;

  constructor(private zoneUseCase: ZoneUseCase) {

  }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    await this.zoneUseCase.findAllZones().subscribe(
      result => {
        this.listarZones = result
      }
    );
  }

  addItem(newItem: IZoneModel | null) {
    this.zones = newItem
  }
  async saveZone(item: IZoneModel){
    await this.zoneUseCase.saveZone(item).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

  async delete(id: number) {
    await this.zoneUseCase.deleteZone(id).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

  async updateZone(item: IZoneModel){
    await this.zoneUseCase.updateZone(item).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

}
