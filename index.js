'use strict';

new Vue({
  el: `#app`,

  computed: {
    filtrovaneVyrobky: function() {
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
        foto:`2sovicky.jpg`
      },
      {
        nazev: `taska`,
        text: `A+B`,
        typ: ["a", "b"],
        foto: `3taska.jpg`,
         },
      {
        nazev: `klicenka`,
        text: `A+B`,
        typ: ["a", "b"],
        foto: `kllicenky2.png`,
         },
      {
        nazev: `obal na knihu`,
        text: `A+B`,
        typ: ["a", "b"],
        foto: `obalkniha.png`,
      },
      {
        nazev: `rouska`,
        text: `C`,
        typ: ["c"],
        foto:`rouska3.png`
      },
      {
        nazev: `rouska`,
        text: `B`,
        typ: ["b"],
        foto:`rouska1.png`
      },
    ],
  },

  methods: {
    ukazDetail(index) {
      this.vybranyProdukt = index;
    },

    filtrovatA() {
      this.filtr = 'a'
    },

    filtrovatB() {
      this.filtr = 'b',
 return text "tento text mi ukaž"
    },

    filtrovatC() {
      this.filtr = 'c'
    },

    zrusitFiltr() {
      this.filtr = null
    },
  }
  });