angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";
    gallery.work_start_date = new Date(2017,02,12);
    gallery.worked_hours_a = 6;  // EDIT HERE
    gallery.worked_hours_g = 1;  // EDIT HERE
    gallery.worked_hours = gallery.worked_hours_a + gallery.worked_hours_g;

    gallery.get_global_progress = function() {
      var index;
      var total = 0;
      for (index = 0; index < gallery.items.length; ++index) {
        total = total + gallery.items[index].done;
      }
      return (total/gallery.items.length).toFixed(2);
    };

    gallery.estimate_remaining = function() {
      return ((((gallery.worked_hours * 100) / gallery.get_global_progress()).toFixed(2)) - gallery.worked_hours).toFixed(2);
    };

    gallery.estimate_finish_date = function() {
      var start_date = gallery.work_start_date;
      var today_date = new Date();
      var one_day = 24 * 60 * 60 * 1000;  // hours * minutes * seconds * milliseconds

      var days_number = Math.round(Math.abs((today_date - start_date) / (one_day)));

      //  days number ......................... worked hours
      //  estimated remaining days number ..... remaining hours
      //
      //  estimated remaining days number = (days number * remaining hours) / worked hours
      //
      //  estimated finish date = today + estimated remaining days number
      var estimated_remaining_days_number = ((days_number * gallery.estimate_remaining()) / gallery.worked_hours).toFixed(2);
      var estimated_finish_date = new Date(today_date.getTime() + (parseInt(estimated_remaining_days_number) * one_day));
      return estimated_finish_date;
    };

    gallery.estimate_finish_date_text = {
      ro: "Data finalizării proiectului (bazată pe progresul actual):",
      en: "Estimated finish date (based on current progress):"
    };

    gallery.hope_finish_date_text = {
      ro: "Vrem să fie gata în 30.04.2017.",
      en: "We want to have it finished in 30.04.2017."
    };

    gallery.title = {
      ro: "Minunile lui Isus",
      en: "Miracles of Jesus"
    };

    gallery.description = {
      ro: "carte de colorat",
      en: "coloring book"
    };

    gallery.intro = {
      ro: "cu desene de Ghiță Bizău",
      en: "drawings by Ghiță Bizău"
    };

    gallery.episode = {
      ro: "Imaginea",
      en: "Image"
    };

    gallery.complete = {
      ro: "Realizat",
      en: "Complete"
    };

    gallery.you_can_help = {
      ro: "Poți să ajuți.",
      en: "You can help."
    };

    gallery.credits = {
      title: {
        ro: "Despre",
        en: "About"
      },
      text: {
        ro: "Proiect coordonat de Adriana Precup.",
        en: "A project coordinated by Adriana Precup."
      }
    };

    gallery.languages = [
      {
        short: "ro",
        text: "Română"
      },
      {
        short: "en",
        text: "English"
      }
    ];

    gallery.change_language = function(language) {
      gallery.language = language;
      console.log(language);
    };

    gallery.get_progress = function(done) {
      if(done <= 10) {
        return "danger"
      } else {
        if(done > 80) {
          return "success"
        } else {
          if(done <= 50) {
            return "warning"
          } else {
            return "info"
          }
        }
      }
    };

    // EDIT HERE
    gallery.items = [
      {
        id: 0,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Coperta",
          en: "Cover"
        },
        text: {
          ro: "Coperta cărții (color)",
          en: "Book cover (color)"
        }
      },
      {
        id: 1,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Apa transformată în vin",
          en: "Text here"
        },
        text: {
          ro: "Ioan 2:1-11",
          en: "Text here"
        }
      },
      {
        id: 2,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea fiului slujbașului împărătesc",
          en: "Text here"
        },
        text: {
          ro: "Ioan 4:46-53",
          en: "Text here"
        }
      },
      {
        id: 3,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Pescuirea minunată",
          en: "Text here"
        },
        text: {
          ro: "Luca 5:1-11",
          en: "Text here"
        }
      },
      {
        id: 4,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea leprosului",
          en: "Text here"
        },
        text: {
          ro: "Marcu 1:40-45",
          en: "Text here"
        }
      },
      {
        id: 5,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea robului sutașului roman",
          en: "Text here"
        },
        text: {
          ro: "Luca 7:1-10",
          en: "Text here"
        }
      },
      {
        id: 6,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea fiului văduvei din Nain",
          en: "Text here"
        },
        text: {
          ro: "Luca 7:11-17",
          en: "Text here"
        }
      },
      {
        id: 7,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea îndrăcitului la Capernaum",
          en: "Text here"
        },
        text: {
          ro: "Luca 4:31-37",
          en: "Text here"
        }
      },
      {
        id: 8,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea soacrei lui Petru",
          en: "Text here"
        },
        text: {
          ro: "Marcu 1:29-31",
          en: "Text here"
        }
      },
      {
        id: 9,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea sălăbnogului",
          en: "Text here"
        },
        text: {
          ro: "Luca 5:17-26",
          en: "Text here"
        }
      },
      {
        id: 10,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea slăbănogului la Betesda",
          en: "Text here"
        },
        text: {
          ro: "Ioan 5:1-9",
          en: "Text here"
        }
      },
      {
        id: 11,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea omului cu mâna uscată",
          en: "Text here"
        },
        text: {
          ro: "Luca 6:6-11",
          en: "Text here"
        }
      },
      {
        id: 12,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui îndrăcit mut și orb",
          en: "Text here"
        },
        text: {
          ro: "Matei 12:22-23",
          en: "Text here"
        }
      },
      {
        id: 13,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Potolirea furtunii",
          en: "Text here"
        },
        text: {
          ro: "Luca 8:22-25",
          en: "Text here"
        }
      },
      {
        id: 14,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor doi îndrăciți",
          en: "Text here"
        },
        text: {
          ro: "Matei 8:28-34",
          en: "Text here"
        }
      },
      {
        id: 15,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea fiicei lui Iair",
          en: "Text here"
        },
        text: {
          ro: "Marcu 5:35-43",
          en: "Text here"
        }
      },
      {
        id: 16,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea femeii cu scurgere de sânge",
          en: "Text here"
        },
        text: {
          ro: "Luca 8:43-48",
          en: "Text here"
        }
      },
      {
        id: 17,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor doi orbi",
          en: "Text here"
        },
        text: {
          ro: "Matei 9:27-31",
          en: "Text here"
        }
      },
      {
        id: 18,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui mut îndrăcit",
          en: "Text here"
        },
        text: {
          ro: "Matei 9:32-34",
          en: "Text here"
        }
      },
      {
        id: 19,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Hrănirea celor cinci mii de oameni",
          en: "Text here"
        },
        text: {
          ro: "Ioan 6:1-14",
          en: "Text here"
        }
      },
      {
        id: 20,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Umblarea pe mare",
          en: "Text here"
        },
        text: {
          ro: "Matei 14:22-33",
          en: "Text here"
        }
      },
      {
        id: 21,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea fiicei femeii canaanite",
          en: "Text here"
        },
        text: {
          ro: "Matei 15:21-28",
          en: "Text here"
        }
      },
      {
        id: 22,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea omului surd și mut",
          en: "Text here"
        },
        text: {
          ro: "Marcu 7:31-37",
          en: "Text here"
        }
      },
      {
        id: 23,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Hrănirea celor patru mii de oameni",
          en: "Text here"
        },
        text: {
          ro: "Matei 15:29-39",
          en: "Text here"
        }
      },
      {
        id: 24,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea orbului la Betsaida",
          en: "Text here"
        },
        text: {
          ro: "Marcu 8:22-26",
          en: "Text here"
        }
      },
      {
        id: 25,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui copil lunatic",
          en: "Text here"
        },
        text: {
          ro: "Marcu 9:14-27",
          en: "Text here"
        }
      },
      {
        id: 26,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Moneda din gura peștelui",
          en: "Text here"
        },
        text: {
          ro: "Matei 17:24-27",
          en: "Text here"
        }
      },
      {
        id: 27,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea orbului din naștere",
          en: "Text here"
        },
        text: {
          ro: "Ioan 9:1-14",
          en: "Text here"
        }
      },
      {
        id: 28,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea femeii gârbove",
          en: "Text here"
        },
        text: {
          ro: "Luca 13:10-13 (14-16?)",
          en: "Text here"
        }
      },
      {
        id: 29,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui bolnav de dropică",
          en: "Text here"
        },
        text: {
          ro: "Luca 14:1-4 (5-6?)",
          en: "Text here"
        }
      },
      {
        id: 30,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor zece leproși",
          en: "Text here"
        },
        text: {
          ro: "Luca 17:11-19",
          en: "Text here"
        }
      },
      {
        id: 31,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea lui Lazar",
          en: "Text here"
        },
        text: {
          ro: "Ioan 11:1-46?",
          en: "Text here"
        }
      },
      {
        id: 32,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor doi orbi cerșetori",
          en: "Text here"
        },
        text: {
          ro: "Matei 20:29-34 & Marcu 10:46-52?",
          en: "Text here"
        }
      },
      {
        id: 33,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Blestemarea smochinului",
          en: "Text here"
        },
        text: {
          ro: "Matei 21:18-22 & Marcu 11: 12-19?",
          en: "Text here"
        }
      },
      {
        id: 34,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea urechii lui Malhu",
          en: "Text here"
        },
        text: {
          ro: "Luca 22:47-51?",
          en: "Text here"
        }
      },
      {
        id: 35,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "A doua pescuire minunată",
          en: "Text here"
        },
        text: {
          ro: "Ioan 21:1-13",
          en: "Text here"
        }
      }
    ];

    gallery.estimate_remaining_text = {
      ro: gallery.worked_hours +" ore lucrate. Mai trebuie vreo " + gallery.estimate_remaining() + ".",
      en: "Worked " + gallery.worked_hours + " hours. Remaining " + gallery.estimate_remaining() + " hours."
    };

  });
