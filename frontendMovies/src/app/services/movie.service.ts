import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  backendURL="http://localhost:3000/film/";
  
  films: object[];
  choosenFilm: object[];

  constructor(private HttpClient:HttpClient) { }

  getAllFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "allfilms")
  }

  getPopularFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "popularfilms")
  }

  getVotedFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "votedfilms")
  }

  getEigthyFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "eightyfilms")
  }

  getNinetyFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "ninetyfilms")
  }

  getZGenerationFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "zgenerationfilms")
  }

  searchFilmsTitle(title:string):Observable<any>{
    return this.HttpClient.get(this.backendURL + "filmsTitle/" + title)
  }

  locateFilm(filmChoose:object[]):object{
    this.choosenFilm = filmChoose;
    console.log(this.choosenFilm);
    return;
  }

  setFilms(films:object[]):void{
    this.films = films;
  }

  getFilms():object{
    return this.films
  }
}
