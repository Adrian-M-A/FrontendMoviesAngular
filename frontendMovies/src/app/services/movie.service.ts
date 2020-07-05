import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  backendURL="http://localhost:3000/film/";
  
  private films: object[];
  private choosenFilm: Film;

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

  setChoosenFilm(filmChoose:Film){
    this.choosenFilm = filmChoose;
  }

  getChoosenFilm():Film{
    return this.choosenFilm;
  }

  setFilms(films:object[]):void{
    this.films = films;
  }

  getFilms():object{
    return this.films
  }
}
