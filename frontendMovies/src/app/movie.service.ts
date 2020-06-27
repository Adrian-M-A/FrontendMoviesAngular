import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  apiKey='210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl='https://api.themoviedb.org/3/';

  backendURL="https://localhost:3000/film/";
  
  films: object[];
  choosenFilm: object[];

  constructor(private HttpClient:HttpClient) { }

  getFilms():Observable<any>{
    // return this.HttpClient.get(this.backendURL + "allfilms")
    return this.HttpClient.get(this.apiUrl + 'movie/popular?api_key=' + this.apiKey + '&language=es-ES&page=1')
  }

  locateFilm(filmChoose:object[]):object{
    this.choosenFilm = filmChoose;
    console.log(this.choosenFilm);
    return;
  }

  setFilms(films:object[]):void{
    this.films = films;
  }

  getfilms():object{
    return this.films
  }
}
