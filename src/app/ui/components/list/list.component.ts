import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';
import {IBirdModel} from "../../../domain/models/bird/bird.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lista: IBirdModel[] | null = [];
  @Output() editId = new EventEmitter<IBirdModel | null>();
  @Output() deleteId = new EventEmitter<number>();

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {

  }

  delete(id: number | undefined){
    if (id != null){
      this.deleteId.emit(id)

    }
  }

  async edit(id: number | undefined) {
    if (id != null){
      await this.birdUseCase.findBirdById(id).subscribe(
        result => {
          this.editId.emit(result)
        }
      )
    }
  }

}
