'use strict';

new Vue({
  el: `#app`,

  computed: {
    filtrovaneVyrobky: function () {
      if (this.filtr) {
        return this.vyrobky.filter(f => f.typ && f.typ.includes(this.filtr))
      }
      return this.vyrobky
    }
  },

  data: {
    filtr: null,
    vyrobky: [
      {
        nazev: `rouska`,
        text: `A`,
        typ: ["a"],
        foto: `2sovicky.jpg`
      },
      {
        nazev: `taska`,
        text: `A+B`,
        typ: ["a", "b"],
        foto: `3taska.jpg`,
      },
      {
        nazev: `klicenka`,
              text: `A`,
        typ: ["a"],
        foto: `kllicenky2.png`,
      },
      {
        nazev: `obal na knihu`,
        text: `A`,
        typ: ["a", "b"],
        foto: `obalkniha.png`,
      },
      {
        nazev: `rouska`,
        text: `C`,
        typ: ["c"],
        foto: `rouska3.png`
      },
      {
        nazev: `rouska`,
        text: `B`,
        typ: ["b"],
        foto: `rouska1.png`
      },
    ],
    tlacitka:false,

  },

  methods: {
    ukazDetail(index) {
      this.vybranyProdukt = index;
    },

    filtrovatA() {
      this.filtr = 'a'
      this.tlacitka = false
    },

    filtrovatB() {
      this.filtr = 'b'
      this.tlacitka = false
    },

    filtrovatC() {
      this.filtr = 'c'
      this.tlacitka = false
    },

    zrusitFiltr() {
      this.filtr = null
    },
    
    ukazTlacitko(){
      this.tlacitka = !this.tlacitka;   
     },
  },
});