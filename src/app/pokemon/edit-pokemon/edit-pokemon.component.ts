import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }} </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    <p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent {

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, // cest grave a la route qu'on parvient a recuperer le pokemon dans une autre page
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }else {
      this.pokemon = undefined;
    }
  }

}
