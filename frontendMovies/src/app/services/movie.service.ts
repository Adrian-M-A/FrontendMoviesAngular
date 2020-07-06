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
    // Get all films
  getAllFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "allfilms")
  }
    // Get popular films
  getPopularFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "popularfilms")
  }
    // Get most voted films
  getVotedFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "votedfilms")
  }
    // Get 80s ' films
  getEigthyFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "eightyfilms")
  }
    // Get 90s ' films
  getNinetyFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "ninetyfilms")
  }
    // Get films from 2000 till now
  getZGenerationFilms():Observable<any>{
    return this.HttpClient.get(this.backendURL + "zgenerationfilms")
  }
    // Search film by title
  searchFilmsTitle(title:string):Observable<any>{
    return this.HttpClient.get(this.backendURL + "filmsTitle/" + title)
  }
    // Sets choosen film
  setChoosenFilm(filmChoose:Film){
    this.choosenFilm = filmChoose;
  }
    // Gets choosen film
  getChoosenFilm():Film{
    return this.choosenFilm;
  }
    // Sets films 
  setFilms(films:object[]):void{
    this.films = films;
  }
    // Gets films
  getFilms():object{
    return this.films
  }
}
