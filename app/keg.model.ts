export class Keg {
  public pints: number = 12;
  constructor(public name: string, public brand: string, public price: number, public abv: number) { }

  dispensePint(){
    this.pints--;
  }
}
