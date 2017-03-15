angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";
    gallery.work_start_date = new Date(2017,02,12);
    gallery.worked_hours = 45;  // EDIT HERE

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
        img: '00.png',
        done: 20,
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
        img: '01.png',
        done: 20,
        title: {
          ro: "Apa transformată în vin",
          en: "Changing water into wine"
        },
        text: {
          ro: "Ioan 2:1-11: A treia zi s-a făcut o nuntă în Cana din Galileea. Mama lui Isus era acolo. Şi la nuntă a fost chemat şi Isus cu ucenicii Lui. Când s-a isprăvit vinul, mama lui Isus I-a zis: \"Nu mai au vin.\" Isus i-a răspuns: \"Femeie, ce am a face Eu cu tine? Nu Mi-a venit încă ceasul.\" Mama Lui a zis slugilor: \"Să faceţi orice vă va zice.\" Şi acolo erau şase vase de piatră, puse după obiceiul de curăţare al iudeilor; şi în fiecare vas încăpeau câte două sau trei vedre. Isus le-a zis: \"Umpleţi vasele acestea cu apă.\" Şi le-au umplut până sus. \"Scoateţi acum\", le-a zis El, \"şi aduceţi nunului.\" Şi i-au adus: Nunul, după ce a gustat apa făcută vin - el nu ştia de unde vine vinul acesta (slugile însă, care scoseseră apa, ştiau) - a chemat pe mire şi i-a zis: \"Orice om pune la masă întâi vinul cel bun; şi, după ce oamenii au băut bine, atunci pune pe cel mai puţin bun; dar tu ai ţinut vinul cel bun până acum.\" Acest început al semnelor Lui l-a făcut Isus în Cana din Galileea. El Şi-a arătat slava Sa, şi ucenicii Lui au crezut în El.",
          en: "John 2:1-11: And the third day there was a marriage in Cana of Galilee; and the mother of Jesus was there: And both Jesus was called, and his disciples, to the marriage. And when they wanted wine, the mother of Jesus saith unto him, They have no wine. Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come. His mother saith unto the servants, Whatsoever he saith unto you, do it. And there were set there six waterpots of stone, after the manner of the purifying of the Jews, containing two or three firkins apiece. Jesus saith unto them, Fill the waterpots with water. And they filled them up to the brim. And he saith unto them, Draw out now, and bear unto the governor of the feast. And they bare it. When the ruler of the feast had tasted the water that was made wine, and knew not whence it was: (but the servants which drew the water knew;) the governor of the feast called the bridegroom, And saith unto him, Every man at the beginning doth set forth good wine; and when men have well drunk, then that which is worse: but thou hast kept the good wine until now. This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him."
        }
      },
      {
        id: 2,
        img: '02.jpg',
        done: 20,
        title: {
          ro: "Vindecarea fiului slujbașului împărătesc",
          en: "Healing of the royal official's son"
        },
        text: {
          ro: "Ioan 4:46-53: Isus S-a întors deci în Cana din Galileea, unde prefăcuse apa în vin. În Capernaum era un slujbaş împărătesc al cărui fiu era bolnav. Slujbaşul acesta a aflat că Isus venise din Iudeea în Galileea, s-a dus la El şi L-a rugat să vină şi să tămăduiască pe fiul lui care era pe moarte. Isus i-a zis: \"Dacă nu vedeţi semne şi minuni, cu niciun chip nu credeţi!\" Slujbaşul împărătesc I-a zis: \"Doamne, vino până nu moare micuţul meu.\" \"Du-te\", i-a zis Isus, \"fiul tău trăieşte.\" Şi omul acela a crezut cuvintele pe care i le spusese Isus şi a pornit la drum. Pe când se cobora el, l-au întâmpinat robii lui şi i-au adus vestea că fiul lui trăieşte. El i-a întrebat de ceasul în care a început să-i fie mai bine. Şi ei i-au zis: \"Ieri, în ceasul al şaptelea, l-au lăsat frigurile.\" Tatăl a cunoscut că tocmai în ceasul acela îi zisese Isus: \"Fiul tău trăieşte.\" Şi a crezut el şi toată casa lui.",
          en: "John 4:46-53: So Jesus came again into Cana of Galilee, where he made the water wine. And there was a certain nobleman, whose son was sick at Capernaum. When he heard that Jesus was come out of Judaea into Galilee, he went unto him, and besought him that he would come down, and heal his son: for he was at the point of death. Then said Jesus unto him, Except ye see signs and wonders, ye will not believe. The nobleman saith unto him, Sir, come down ere my child die. Jesus saith unto him, Go thy way; thy son liveth. And the man believed the word that Jesus had spoken unto him, and he went his way. And as he was now going down, his servants met him, and told him, saying, Thy son liveth. Then enquired he of them the hour when he began to amend. And they said unto him, Yesterday at the seventh hour the fever left him. So the father knew that it was at the same hour, in the which Jesus said unto him, Thy son liveth: and himself believed, and his whole house."
        }
      },
      {
        id: 3,
        img: '03.png',
        done: 20,
        title: {
          ro: "Pescuirea minunată",
          en: "Catching a large number of fish"
        },
        text: {
          ro: "Luca 5:1-11: Pe când Se afla lângă lacul Ghenezaret şi Îl îmbulzea norodul ca să audă Cuvântul lui Dumnezeu, Isus a văzut două corăbii la marginea lacului; pescarii ieşiseră din ele să-şi spele mrejele. S-a suit într-una din aceste corăbii, care era a lui Simon: şi l-a rugat s-o depărteze puţin de la ţărm. Apoi a şezut jos şi învăţa pe noroade din corabie. Când a încetat să vorbească, a zis lui Simon: \"Depărteaz-o la adânc şi aruncaţi-vă mrejele pentru pescuire.\" Drept răspuns, Simon I-a zis: \"Învăţătorule, toată noaptea ne-am trudit şi n-am prins nimic; dar, la cuvântul Tău, voi arunca mrejele!\" După ce le-au aruncat, au prins o aşa de mare mulţime de peşti că începeau să li se rupă mrejele. Au făcut semn tovarăşilor lor care erau în cealaltă corabie să vină să le ajute. Aceia au venit, şi au umplut amândouă corăbiile, aşa că au început să se afunde corăbiile. Când a văzut Simon Petru lucrul acesta, s-a aruncat la genunchii lui Isus şi I-a zis: \"Doamne, pleacă de la mine, căci sunt un om păcătos.\" Fiindcă îl apucase spaima, pe el şi pe toţi cei ce erau cu el, din pricina pescuirii pe care o făcuseră. Tot aşa şi pe Iacov şi pe Ioan, fiii lui Zebedei, tovarăşii lui Simon. Atunci Isus i-a zis lui Simon: \"Nu te teme; de acum încolo vei fi pescar de oameni.\" Ei au scos corăbiile la mal, au lăsat totul şi au mers după El.",
          en: "Luke 5:1-11: And it came to pass, that, as the people pressed upon him to hear the word of God, he stood by the lake of Gennesaret, And saw two ships standing by the lake: but the fishermen were gone out of them, and were washing their nets. And he entered into one of the ships, which was Simon's, and prayed him that he would thrust out a little from the land. And he sat down, and taught the people out of the ship. Now when he had left speaking, he said unto Simon, Launch out into the deep, and let down your nets for a draught. And Simon answering said unto him, Master, we have toiled all the night, and have taken nothing: nevertheless at thy word I will let down the net. And when they had this done, they inclosed a great multitude of fishes: and their net brake. And they beckoned unto their partners, which were in the other ship, that they should come and help them. And they came, and filled both the ships, so that they began to sink. When Simon Peter saw it, he fell down at Jesus' knees, saying, Depart from me; for I am a sinful man, O Lord. For he was astonished, and all that were with him, at the draught of the fishes which they had taken: And so was also James, and John, the sons of Zebedee, which were partners with Simon. And Jesus said unto Simon, Fear not; from henceforth thou shalt catch men. And when they had brought their ships to land, they forsook all, and followed him."
        }
      },
      {
        id: 4,
        img: '04.jpg',
        done: 20,
        title: {
          ro: "Vindecarea leprosului",
          en: "Healing a leper"
        },
        text: {
          ro: "Marcu 1:40-45: A venit la El un lepros, care s-a aruncat în genunchi înaintea Lui, Îl ruga şi-I zicea: \"Dacă vrei, poţi să mă cureţi.\" Lui Isus I s-a făcut milă de el, a întins mâna, S-a atins de el şi i-a zis: \"Da, voiesc, fii curăţat!\" Îndată l-a lăsat lepra, şi s-a curăţat. Isus i-a poruncit cu tot dinadinsul, i-a spus să plece numaidecât şi i-a zis: \"Vezi să nu spui nimănui nimic; ci du-te de te arată preotului şi adu pentru curăţarea ta ce a poruncit Moise, ca mărturie pentru ei.\" Dar omul acela, după ce a plecat, a început să vestească şi să spună în gura mare lucrul acesta, aşa că Isus nu mai putea să intre pe faţă în nicio cetate; ci stătea afară, în locuri pustii, şi veneau la El din toate părţile.",
          en: "Mark 1:40-45: And there came a leper to him, beseeching him, and kneeling down to him, and saying unto him, If thou wilt, thou canst make me clean. And Jesus, moved with compassion, put forth his hand, and touched him, and saith unto him, I will; be thou clean. And as soon as he had spoken, immediately the leprosy departed from him, and he was cleansed. And he straitly charged him, and forthwith sent him away; And saith unto him, See thou say nothing to any man: but go thy way, shew thyself to the priest, and offer for thy cleansing those things which Moses commanded, for a testimony unto them. But he went out, and began to publish it much, and to blaze abroad the matter, insomuch that Jesus could no more openly enter into the city, but was without in desert places: and they came to him from every quarter."
        }
      },
      {
        id: 5,
        img: '05.jpg',
        done: 20,
        title: {
          ro: "Vindecarea robului sutașului roman",
          en: "Miracle of healing a centurion's servant"
        },
        text: {
          ro: "Luca 7:1-10: După ce a sfârşit de rostit toate aceste cuvântări înaintea norodului care-L asculta, Isus a intrat în Capernaum. Un sutaş avea un rob la care ţinea foarte mult şi care era bolnav pe moarte. Fiindcă auzise vorbindu-se despre Isus, sutaşul a trimis la El pe nişte bătrâni ai iudeilor, ca să-L roage să vină să vindece pe robul lui. Aceştia au venit la Isus, L-au rugat cu tot dinadinsul şi au zis: \"Face să-i faci acest bine; căci iubeşte neamul nostru şi el ne-a zidit sinagoga.\" Isus a plecat cu ei; dar nu era departe de casă, când sutaşul a trimis la El pe nişte prieteni să-I spună: \"Doamne, nu Te mai osteni atâta, pentru că nu sunt vrednic să intri sub acoperământul meu. De aceea nici nu m-am socotit vrednic să vin eu însumi la Tine. Ci zi o vorbă, şi robul meu va fi tămăduit. Căci şi eu, care sunt sub stăpânirea altuia, am sub mine ostaşi. Şi zic unuia: \"Du-te!\", şi se duce; altuia: \"Vino!\", şi vine; şi robului meu: \"Fă cutare lucru!\", şi-l face.\" Când a auzit Isus aceste vorbe, S-a minunat de sutaş, S-a întors spre norodul care mergea după El şi a zis: \"Vă spun că nici chiar în Israel n-am găsit o credinţă atât de mare.\" Când s-au întors acasă, trimişii au găsit sănătos pe robul care fusese bolnav.",
          en: "Luke 7:1-10: Now when he had ended all his sayings in the audience of the people, he entered into Capernaum. And a certain centurion's servant, who was dear unto him, was sick, and ready to die. And when he heard of Jesus, he sent unto him the elders of the Jews, beseeching him that he would come and heal his servant. And when they came to Jesus, they besought him instantly, saying, That he was worthy for whom he should do this: For he loveth our nation, and he hath built us a synagogue. Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof: Wherefore neither thought I myself worthy to come unto thee: but say in a word, and my servant shall be healed. For I also am a man set under authority, having under me soldiers, and I say unto one, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it. When Jesus heard these things, he marvelled at him, and turned him about, and said unto the people that followed him, I say unto you, I have not found so great faith, no, not in Israel. And they that were sent, returning to the house, found the servant whole that had been sick."
        }
      },
      {
        id: 6,
        img: '06.jpg',
        done: 20,
        title: {
          ro: "Învierea fiului văduvei din Nain",
          en: "Raising of the son of the widow of Nain"
        },
        text: {
          ro: "Luca 7:11-17: În ziua următoare, Isus Se ducea într-o cetate numită Nain. Împreună cu El mergeau ucenicii Lui şi norod mult. Când S-a apropiat de poarta cetăţii, iată că duceau la groapă pe un mort, singurul fiu al maicii lui, care era văduvă; şi cu ea erau o mulţime de oameni din cetate. Domnului, când a văzut-o, I S-a făcut milă de ea şi i-a zis: \"Nu plânge!\" Apoi S-a apropiat şi S-a atins de raclă. Cei ce o duceau s-au oprit. El a zis: \"Tinerelule, scoală-te, îţi spun!\" Mortul a şezut în capul oaselor şi a început să vorbească. Isus l-a dat înapoi maicii lui. Toţi au fost cuprinşi de frică, slăveau pe Dumnezeu şi ziceau: \"Un mare proroc S-a ridicat între noi; şi Dumnezeu a cercetat pe poporul Său.\" Vestea aceasta despre Isus s-a răspândit în toată Iudeea şi prin toate împrejurimile.",
          en: "Luke 7:11-17: And it came to pass the day after, that he went into a city called Nain; and many of his disciples went with him, and much people. Now when he came nigh to the gate of the city, behold, there was a dead man carried out, the only son of his mother, and she was a widow: and much people of the city was with her. And when the Lord saw her, he had compassion on her, and said unto her, Weep not. And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise. And he that was dead sat up, and began to speak. And he delivered him to his mother. And there came a fear on all: and they glorified God, saying, That a great prophet is risen up among us; and, That God hath visited his people. And this rumour of him went forth throughout all Judaea, and throughout all the region round about."
        }
      },
      {
        id: 7,
        img: '07.jpg',
        done: 20,
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
        img: '08.jpg',
        done: 20,
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
        img: '09.jpg',
        done: 20,
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
        img: '10.jpg',
        done: 20,
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
        img: '12.jpg',
        done: 20,
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
        img: '14.jpg',
        done: 20,
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
        img: '15.png',
        done: 20,
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
        img: '16.jpg',
        done: 20,
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
        img: '18.png',
        done: 20,
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
        img: '19.jpg',
        done: 20,
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
        done: 20,
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
        img: '21.jpg',
        done: 20,
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
        img: '22.png',
        done: 100,
        title: {
          ro: "Vindecarea omului surd și mut",
          en: "Healing a deaf and mute man"
        },
        text: {
          ro: "Marcu 7:31-37: Isus a părăsit ţinutul Tirului şi a venit iarăşi prin Sidon la Marea Galileii, trecând prin ţinutul Decapole. I-au adus un surd care vorbea cu anevoie şi L-au rugat să-Şi pună mâinile peste el. El l-a luat la o parte din norod, i-a pus degetele în urechi şi i-a atins limba cu scuipatul Lui. Apoi, Şi-a ridicat ochii spre cer, a suspinat şi a zis: \"Efata\", adică: \"Deschide-te!\" Îndată i s-au deschis urechile, i s-a dezlegat limba şi a vorbit foarte desluşit. Isus le-a poruncit să nu spună nimănui; dar cu cât le poruncea mai mult, cu atât Îl vesteau mai mult. Ei erau uimiţi peste măsură de mult şi ziceau: \"Toate le face de minune; chiar şi pe surzi îi face să audă, şi pe muţi să vorbească.\"",
          en: "Mark 7:31-37: And again, departing from the coasts of Tyre and Sidon, he came unto the sea of Galilee, through the midst of the coasts of Decapolis. And they bring unto him one that was deaf, and had an impediment in his speech; and they beseech him to put his hand upon him. And he took him aside from the multitude, and put his fingers into his ears, and he spit, and touched his tongue; And looking up to heaven, he sighed, and saith unto him, Ephphatha, that is, Be opened. And straightway his ears were opened, and the string of his tongue was loosed, and he spake plain. And he charged them that they should tell no man: but the more he charged them, so much the more a great deal they published it; And were beyond measure astonished, saying, He hath done all things well: he maketh both the deaf to hear, and the dumb to speak."
        }
      },
      {
        id: 23,
        img: '23.png',
        done: 20,
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
        img: '24.jpg',
        done: 20,
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
        img: '25.jpg',
        done: 20,
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
        img: '26.png',
        done: 20,
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
        img: '27.png',
        done: 70,
        title: {
          ro: "Vindecarea orbului din naștere",
          en: "Healing the man blind from birth"
        },
        text: {
          ro: "Ioan 9:1-14: Când trecea, Isus a văzut pe un orb din naştere. Ucenicii Lui L-au întrebat: \"Învăţătorule, cine a păcătuit: omul acesta sau părinţii lui, de s-a născut orb?\" Isus a răspuns: \"N-a păcătuit nici omul acesta nici părinţii lui; ci s-a născut aşa, ca să se arate în el lucrările lui Dumnezeu. Cât este ziuă, trebuie să lucrez lucrările Celui ce M-a trimis; vine noaptea, când nimeni nu mai poate să lucreze. Cât sunt în lume, sunt Lumina lumii.\" După ce a zis aceste vorbe, a scuipat pe pământ şi a făcut tină din scuipat. Apoi a uns ochii orbului cu tina aceasta şi i-a zis: \"Du-te de te spală în scăldătoarea Siloamului\" (care tălmăcit înseamnă: Trimis). El s-a dus, s-a spălat şi s-a întors văzând bine. Vecinii şi cei ce-l cunoscuseră mai înainte ca cerşetor, ziceau: \"Nu este acesta cel ce şedea şi cerşea?\" Unii ziceau: \"El este.\" Alţii ziceau: \"Nu; dar seamănă cu el.\" Şi el însuşi zicea: \"Eu sunt.\" Deci i-au zis: \"Cum ţi s-au deschis ochii?\" El a răspuns: \"Omul acela, căruia I se zice Isus, a făcut tină, mi-a uns ochii şi mi-a zis: \"Du-te la scăldătoarea Siloamului şi spală-te.\" M-am dus, m-am spălat şi mi-am căpătat vederea.\" \"Unde este Omul acela?\", l-au întrebat ei. El a răspuns: \"Nu ştiu.\" Au adus la farisei pe cel ce fusese orb mai înainte. Şi era o zi de Sabat când făcuse Isus tină şi-i deschisese ochii.",
          en: "John 9:1-14"
        }
      },
      {
        id: 28,
        img: '28.jpg',
        done: 20,
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
        img: '29.jpg',
        done: 20,
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
        img: '30.jpg',
        done: 20,
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
        img: '31.jpg', // JPG fix me
        done: 20,
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
        img: '32.png',
        done: 50,
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
        img: '33.png',
        done: 100,
        title: {
          ro: "Blestemarea smochinului",
          en: "Jesus curses the fig tree with no fruit"
        },
        text: {
          ro: "Matei 21:18-22: Dimineaţa, pe când Se întorcea în cetate, I-a fost foame. A văzut un smochin lângă drum şi S-a apropiat de el; dar n-a găsit decât frunze, şi i-a zis: \"De acum încolo, în veac să nu mai dea rod din tine!\" Şi îndată smochinul s-a uscat. Ucenicii, când au văzut acest lucru, s-au mirat şi au zis: \"Cum de s-a uscat smochinul acesta într-o clipă?\" Drept răspuns, Isus le-a zis: \"Adevărat vă spun că, dacă veţi avea credinţă şi nu vă veţi îndoi, veţi face nu numai ce s-a făcut smochinului acestuia; ci chiar dacă aţi zice muntelui acestuia: \"Ridică-te de aici şi aruncă-te în mare\", se va face. Tot ce veţi cere cu credinţă, prin rugăciune, veţi primi.\"",
          en: "Matthew 21:18-22: Now in the morning as he returned into the city, he hungered. And when he saw a fig tree in the way, he came to it, and found nothing thereon, but leaves only, and said unto it, Let no fruit grow on thee henceforward for ever. And presently the fig tree withered away. And when the disciples saw it, they marvelled, saying, How soon is the fig tree withered away! Jesus answered and said unto them, Verily I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done."
        }
      },
      {
        id: 34,
        img: '34.png',
        done: 50,
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
        img: '35.png',
        done: 50,
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
