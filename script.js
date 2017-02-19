angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";
    gallery.work_start_date = new Date(2017,02,12);

    gallery.worked_hours = 7;  // EDIT HERE

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
      ro: "Dar personal doresc să fie gata la 13.08.2017.",
      en: "But I want to have it finished in 13.08.2017."
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
        ro: "Mulțumiri",
        en: "Thanks"
      },
      text: {
        ro: "Textul în română (traducerea Dumitru Cornilescu a Bibliei) vine de la biblia.ro.",
        en: "Used KJV Bible - online version at www.kingjamesbibleonline.org."
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
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 1,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 2,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 3,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 4,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 5,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 6,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 7,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 8,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 9,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 10,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 11,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 12,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 13,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 14,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 15,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 16,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 17,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 18,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 19,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 20,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 21,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 22,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 23,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 24,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 25,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 26,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 27,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 28,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 29,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 30,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 31,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 32,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 33,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 34,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 35,
        img: 'ZZ.png',
        done: 0,
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      }
    ];

    gallery.estimate_remaining_text = {
      ro: gallery.worked_hours +" ore lucrate. Mai trebuie vreo " + gallery.estimate_remaining() + ".",
      en: "Worked " + gallery.worked_hours + " hours. Remaining " + gallery.estimate_remaining() + " hours."
    };

  });
