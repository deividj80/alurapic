import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import {PhotoDTO} from "../../dto/photo.dto";

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<PhotoDTO[]>>{

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoDTO[]> {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }

}
