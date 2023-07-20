import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router){}

  //initialise tous les types de pokemon disponible dans le projet
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList(); 
  }

  //verifie si un pokemon a un type ou pas. ce qui va permettre 
  //de cocher ou decoucher les cases a l'initialisation du formulaire
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  //permet de mettre le pokemon en jour
  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; // return true si l'utilisateur a cocher la case; sinon false
    
    if(isChecked){
      this.pokemon.types.push(type);
    }else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  /*
  * cette methode permet de bloque ou activer les checkbox
  *
  * la premier condition oblige l'utilisateur a choisir au moins un type pour le pokemon
  * la deuxieme empeche l'utilisateur de choisir un autre type, lorsque le pokemon a deja trois type
  */
  isTypesValid(type: string): boolean {
    //
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    //
    if(this.pokemon.types.length > 1 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  //a la soumission du formulaire, l'utilisateur sera redirige vers la page du pokemon modifier
  onSubmit(){
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }

}
