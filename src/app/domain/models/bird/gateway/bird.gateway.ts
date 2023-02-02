import { IBirdRequest } from './../../../../infrastucture/driven-adapter/bird/bird.model';
import { IBirdModel } from './../bird.model';
import { Observable } from "rxjs";


export abstract class BirdGateway {
    
    abstract saveBird(params: IBirdRequest) : Observable<IBirdModel>;

    abstract updateBird(params: IBirdRequest) : Observable<IBirdModel>;

    abstract findBirdById(id : number) : Observable<IBirdModel>;

    abstract findAllBirds(): Observable<Array<IBirdModel>>;

    abstract deleteBird(id : number) : Observable<boolean>;
}