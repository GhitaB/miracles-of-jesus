angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";
    gallery.work_start_date = new Date(2017,02,12);
    gallery.worked_hours = 24;  // EDIT HERE

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
          en: "Changing water into wine"
        },
        text: {
          ro: "Ioan 2:1-11",
          en: "John 2:1-11"
        }
      },
      {
        id: 2,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea fiului slujbașului împărătesc",
          en: "Healing of the royal official's son"
        },
        text: {
          ro: "Ioan 4:46-53",
          en: "John 4:46-53"
        }
      },
      {
        id: 3,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Pescuirea minunată",
          en: "Catching a large number of fish"
        },
        text: {
          ro: "Luca 5:1-11",
          en: "Luke 5:1-11"
        }
      },
      {
        id: 4,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea leprosului",
          en: "Healing a leper"
        },
        text: {
          ro: "Marcu 1:40-45",
          en: "Mark 1:40-45"
        }
      },
      {
        id: 5,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea robului sutașului roman",
          en: "Miracle of healing a centurion's servant"
        },
        text: {
          ro: "Luca 7:1-10",
          en: "Luke 7:1-10"
        }
      },
      {
        id: 6,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea fiului văduvei din Nain",
          en: "Raising of the son of the widow of Nain"
        },
        text: {
          ro: "Luca 7:11-17",
          en: "Luke 7:11-17"
        }
      },
      {
        id: 7,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea îndrăcitului la Capernaum",
          en: "Healing of the Capernaum demoniac"
        },
        text: {
          ro: "Luca 4:31-37",
          en: "Luke 4:31-37"
        }
      },
      {
        id: 8,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea soacrei lui Petru",
          en: "Healing of Peter's mother-in-law"
        },
        text: {
          ro: "Marcu 1:29-31",
          en: "Mark 1:29-31"
        }
      },
      {
        id: 9,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea slăbănogului",
          en: "Healing a paralyzed man"
        },
        text: {
          ro: "Luca 5:17-26",
          en: "Luke 5:17-26"
        }
      },
      {
        id: 10,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea slăbănogului la Betesda",
          en: "Healing the paralytic at Bethesda"
        },
        text: {
          ro: "Ioan 5:1-9",
          en: "John 5:1-9"
        }
      },
      {
        id: 11,
        img: '11.png',
        done: 20,
        title: {
          ro: "Vindecarea omului cu mâna uscată",
          en: "Healing a withered hand"
        },
        text: {
          ro: "Luca 6:6-11",
          en: "Luke 6:6-11"
        }
      },
      {
        id: 12,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui îndrăcit mut și orb",
          en: "Healing a blind and mute man who was demon-possessed"
        },
        text: {
          ro: "Matei 12:22-23",
          en: "Matthew 12:22-23"
        }
      },
      {
        id: 13,
        img: '13.png',
        done: 20,
        title: {
          ro: "Potolirea furtunii",
          en: "Calming the storm"
        },
        text: {
          ro: "Luca 8:22-25",
          en: "Luke 8:22-25"
        }
      },
      {
        id: 14,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor doi îndrăciți",
          en: "Healing two demon-possessed Men"
        },
        text: {
          ro: "Matei 8:28-34",
          en: "Matthew 8:28-34"
        }
      },
      {
        id: 15,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea fiicei lui Iair",
          en: "Raising Jairus' daughter"
        },
        text: {
          ro: "Marcu 5:35-43",
          en: "Mark 5:35-43"
        }
      },
      {
        id: 16,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea femeii cu scurgere de sânge",
          en: "Healing the bleeding woman"
        },
        text: {
          ro: "Luca 8:43-48",
          en: "Luke 8:43-48"
        }
      },
      {
        id: 17,
        img: '17.png',
        done: 20,
        title: {
          ro: "Vindecarea celor doi orbi",
          en: "Healing of the two blind men"
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
          en: "Healing the blind and dumb possessed"
        },
        text: {
          ro: "Matei 9:32-34",
          en: "Matthew 9:32-34"
        }
      },
      {
        id: 19,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Hrănirea celor cinci mii de oameni",
          en: "The feeding of the 5000"
        },
        text: {
          ro: "Ioan 6:1-14",
          en: "John 6:1-14"
        }
      },
      {
        id: 20,
        img: '20.png',
        done: 5,
        title: {
          ro: "Umblarea pe mare",
          en: "Walking on water"
        },
        text: {
          ro: "Matei 14:22-33",
          en: "Matthew 14:22-33"
        }
      },
      {
        id: 21,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea fiicei femeii canaanite",
          en: "Healing the Canaanite woman's daughter"
        },
        text: {
          ro: "Matei 15:21-28",
          en: "Matthew 15:21-28"
        }
      },
      {
        id: 22,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea omului surd și mut",
          en: "Healing a deaf and mute man"
        },
        text: {
          ro: "Marcu 7:31-37",
          en: "Mark 7:31-37"
        }
      },
      {
        id: 23,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Hrănirea celor patru mii de oameni",
          en: "The feeding of the four thousand"
        },
        text: {
          ro: "Matei 15:29-39",
          en: "Matthew 15:29-39"
        }
      },
      {
        id: 24,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea orbului la Betsaida",
          en: "Healing the blind man at Bethsaida"
        },
        text: {
          ro: "Marcu 8:22-26",
          en: "Mark 8:22-26"
        }
      },
      {
        id: 25,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui copil lunatic",
          en: "Healing of the lunatic child"
        },
        text: {
          ro: "Marcu 9:14-27",
          en: "Mark 9:14-27"
        }
      },
      {
        id: 26,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Moneda din gura peștelui",
          en: "Coin in the fish's mouth"
        },
        text: {
          ro: "Matei 17:24-27",
          en: "Matthew 17:24-27"
        }
      },
      {
        id: 27,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea orbului din naștere",
          en: "Healing the man blind from birth"
        },
        text: {
          ro: "Ioan 9:1-14",
          en: "John 9:1-14"
        }
      },
      {
        id: 28,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea femeii gârbove",
          en: "Healing the woman with a bent back"
        },
        text: {
          ro: "Luca 13:10-13 (14-16?)",
          en: "Luke 13:10-13 (14-16?)"
        }
      },
      {
        id: 29,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea unui bolnav de dropică",
          en: "Healing a man with dropsy"
        },
        text: {
          ro: "Luca 14:1-4 (5-6?)",
          en: "Luke 14:1-4 (5-6?)"
        }
      },
      {
        id: 30,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor zece leproși",
          en: "Cleansing ten lepers"
        },
        text: {
          ro: "Luca 17:11-19",
          en: "Luke 17:11-19"
        }
      },
      {
        id: 31,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Învierea lui Lazar",
          en: "The resurrection of Lazarus"
        },
        text: {
          ro: "Ioan 11:1-46?",
          en: "John 11:1-46?"
        }
      },
      {
        id: 32,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea celor doi orbi cerșetori",
          en: "Two blind beggars restored to sight"
        },
        text: {
          ro: "Matei 20:29-34 & Marcu 10:46-52?",
          en: "Matthew 20:29-34 & Mark 10:46-52?"
        }
      },
      {
        id: 33,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Blestemarea smochinului",
          en: "Jesus curses the fig tree with no fruit"
        },
        text: {
          ro: "Matei 21:18-22 & Marcu 11: 12-19?",
          en: "Matthew 21:18-22 & Mark 11: 12-19?"
        }
      },
      {
        id: 34,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "Vindecarea urechii lui Malhu",
          en: "Restoring the ear of Malhu"
        },
        text: {
          ro: "Luca 22:47-51?",
          en: "Luke 22:47-51?"
        }
      },
      {
        id: 35,
        img: 'ZZ.png',
        done: 5,
        title: {
          ro: "A doua pescuire minunată",
          en: "Second miraculous catch of fish"
        },
        text: {
          ro: "Ioan 21:1-13",
          en: "John 21:1-13"
        }
      }
    ];

    gallery.estimate_remaining_text = {
      ro: gallery.worked_hours +" ore lucrate. Mai trebuie vreo " + gallery.estimate_remaining() + ".",
      en: "Worked " + gallery.worked_hours + " hours. Remaining " + gallery.estimate_remaining() + " hours."
    };

  });
