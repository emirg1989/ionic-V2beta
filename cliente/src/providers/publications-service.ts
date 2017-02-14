import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PublicationsService {
    constructor(private http: Http) {
    }

    getRepos(){
        let repos = this.http.get(`http://192.168.43.50:3000/publicaciones/`);
        return repos;
    }
    getReposBySeccion(seccion){
      let repos = this.http.get(`http://192.168.43.50:3000/publicaciones/${seccion}`);
      return repos;
    }

}
