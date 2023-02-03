import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: 'birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  listaBirds: IBirdModel[] = [{
    id: 1,
    commonName: "pajaro",
    scientificName: "string"
  },
  {
    id: 2,
    commonName: "pajaro2",
    scientificName: "string2"
  }
  ]

  bird : IBirdModel | null;

  constructor() {

   }

  ngOnInit(): void {
  }

  addItem(newItem: IBirdModel | null) {
    this.bird = newItem
  }

}
