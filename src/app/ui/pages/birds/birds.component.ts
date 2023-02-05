import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { Component, OnInit } from '@angular/core';
import {BirdUseCase} from "../../../domain/usecase/bird.usecase";
import Swal from "sweetalert2";


@Component({
  selector: 'app-birds',
  templateUrl: 'birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  listaBirds: Array<IBirdModel> | null = []

  bird : IBirdModel | null;

  constructor(private birdUseCase: BirdUseCase) {

   }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    await this.birdUseCase.findAllBirds().subscribe(

      result => {
        this.listaBirds = result

      }

    );
  }

  addItem(newItem: IBirdModel | null) {
    this.bird = newItem
  }
  async saveBird(item: IBirdModel){
    await this.birdUseCase.saveBird(item).subscribe(
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
    await this.birdUseCase.deleteBird(id).subscribe(
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

  async updateBird(item: IBirdModel){
    await this.birdUseCase.updateBird(item).subscribe(
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
