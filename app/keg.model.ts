export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) { }

  dispensePint(){
    if(this.pints>0) {
      this.pints--;
    } else {
      alert("Keg has been replaced!");
      this.pints=124;
    }
  }
}
