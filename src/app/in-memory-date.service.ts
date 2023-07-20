import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDateService implements InMemoryDbService{

  createDb(){
    return { POKEMONS };
  }
}
