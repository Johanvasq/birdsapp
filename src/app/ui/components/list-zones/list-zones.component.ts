import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IZoneModel} from "../../../domain/models/zone/zone.model";
import {ZoneUseCase} from "../../../domain/usecase/zone.usecase";

@Component({
  selector: 'app-list-zones',
  templateUrl: './list-zones.component.html',
  styleUrls: ['./list-zones.component.css']
})
export class ListZonesComponent implements OnInit {

  @Input() lista: IZoneModel[] | null= [];
  @Output() editId = new EventEmitter<IZoneModel | null>();
  @Output() deleteId = new EventEmitter<number>();

  constructor(private zoneUseCase: ZoneUseCase) { }

  ngOnInit(): void {

  }

  delete(id: number | undefined){
    if (id != null){

      this.deleteId.emit(id);
    }
  }

  async edit(id: number | undefined) {

    if (id != undefined){
      await this.zoneUseCase.findZoneById(id).subscribe(
        result => {
          this.editId.emit(result)
        }
      )
    }

  }
}
