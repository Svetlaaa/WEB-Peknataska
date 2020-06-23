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
      {
        nazev: `kabelka`,
        text: `C`,
        typ: ["c"],
        foto: `kabelkaC.jpg`
      },
      {
        nazev: `nakupni taska`,
        text: `AB`,
        typ: ["a", "b"],
        foto: `nakupkaA_B.jpg`
      },
      {
        nazev: `nakupni taska`,
        text: `C`,
        typ: ["c"],
        foto: `nakupkaC.jpg`
      },
      {
        nazev: `obal na knihu`,
        text: `a`,
        typ: ["A"],
        foto: `knihaA.jpg`
      },
        {nazev: `nakupni taska`,
         text: `A+B`,
        typ: ["a", "b"],
        foto: `taskaA_B.jpg`
      },
      {
        nazev: `obal na knihu`,
        text: `B`,
        typ: ["b"],
        foto: `KnihaB.jpg`
      },

    ],
    sadaOtazek: false,

    zobrazSekci: false,

    soucet: 0,
  },

  methods: {
    ukazDetail(index) {
      this.vybranyProdukt = index;
    },

    zrusitFiltr() {
      this.filtr = null
    },

    ukazPrvniOtazku() {
      this.sadaOtazek = "prvni"
      this.soucet = 0
    },

    prepniOtazku() {
      const prichazimZeSady = event.target.dataset.sada
      console.log('zmackl', prichazimZeSady)

      const ukazBody = event.target.dataset.body
      console.log('zmackl', ukazBody)


      if ("prvni" === prichazimZeSady) {
        this.sadaOtazek = "druha"
        this.soucet += parseInt(ukazBody)
      }
      else if
        ("druha" === prichazimZeSady) {
        this.sadaOtazek = "treti"
        this.soucet += parseInt(ukazBody)
      }
      else if
        ("treti" === prichazimZeSady) {
        this.sadaOtazek = false
        this.soucet += parseInt(ukazBody)

        if (this.soucet >= 5) { this.filtr = 'c' }
        else if (this.soucet <= 1) { this.filtr = 'a' }
        else { this.filtr = 'b' }
      }
    },

    rozbalInfo() {
      this.zobrazSekci = !this.zobrazSekci
      console.log("funguje toto vůbec? ")
    },

  }
});