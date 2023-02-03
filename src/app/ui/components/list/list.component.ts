import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';
import Swal from 'sweetalert2';
import {IBirdModel} from "../../../domain/models/bird/bird.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lista: any[] = [];
  @Output() newItemEvent = new EventEmitter<IBirdModel | null>();

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {

  }

  async delete(id: number) {
    await this.birdUseCase.deleteBird(id).subscribe(
      result => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  async edit(id: number) {
    await this.birdUseCase.findBirdById(id).subscribe(
      result => {
        this.newItemEvent.emit(result)
      }
    )

  }

}
