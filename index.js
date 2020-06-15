'use strict';

new Vue ({
  el: `#app`, 

data: {
  Vyrobky: [
    {
      nazev: `rouska`,
      text:`TADY MUSIM VYMYSLET TEXT`,
      mozneObjednat: true,
      foto: `5rouska5`,
      foto1: `2sovicky`,
      foto2: `rouska3`
    }, 
    {
      nazev: `taska`, 
      text:`TADY MUSIM VYMYSLET TEXT`,
      mozneObjednat: true,
      foto3: `3taska`,
      foto4: `taskyskladani`,
      foto5: `taskaslozena`,
    }, 
{  
  nazev: `klicenka`,
  text:`TADY MUSIM VYMYSLET TEXT`,
  mozneObjednat: true,
  foto6: `klicenky2`,
  foto7: `6klicenky`,
  }, 
  {
    nazev: `obal na knihu`,
    text:`TADY MUSIM VYMYSLET TEXT`,
    mozneObjednat: true,
    foto6: `obalkniha`,
    foto7: `DOPLN`,
  }
], 
    }, 

    methods: {
ukazDetail(index) {
  this.vybranyProdukt = index;
}
}
  });