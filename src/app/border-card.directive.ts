import { Directive, ElementRef, HostListener, Input} from '@angular/core';

//HostListener permet de lieer une methode de notre directive a un element donnE

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  //permet de representer une reference vers les cartes de pokemon(element du dom sur lekel va etre applique la directive) 
  constructor(private el: ElementRef) { 
      this.setHeight(this.defaultHeight);
      this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string; 

  //permet de changer la color des bordure du pokemon lorsque l'utilisateur passe la souris
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor); //au cas ou on ne precise pas une valeur, qu'il ai deja une couleur par defaut
  }

  //remet la valeur iniatial du pkmn lorsque l'utilisateur sort le curseur du cadre
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    
    this.el.nativeElement.style.heigt = height + 'px';
  }

  setBorder(color: string) {
    let border = 'solid 4px ' + color;
    //let border = `solid 4px ${color}px`;
    this.el.nativeElement.style.border = border;
  }

}
