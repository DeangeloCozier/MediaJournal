const shows = [
    {
        id: 1,
        title: "Breaking Bad",
        poster: "../assets/posters/breakingbad.jpg",
        createdAt: "2026-07-01",
        mediaType: "TV Show",
        mainType: "Live Action",

        progress: 72,          // 0-100
        favorite: false,
        rating: 8.0,

        averageTime: "47m",
        runtime: "62h",

        releaseDate: "2008-01-20",
        endDate: "2013-09-29",

        genres: ["Crime", "Drama" ],
        description: "Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.",

        creator: ["Vince Gilligan"],
        director: ["Vince Gilligan", "Michelle MacLaren", "Bryan Cranston"],
        screenwriter: ["Peter Gould", "Thomas Schnauz", "Moira Walley-Beckett", "Gennifer Hutchison", "George Mastras"],
        studio: ["Sony Pictures Television"],
        distributionStudio: ["AMC", "Netflix"], 

        watchingStatus: "Paused"

    },

    {
        id: 2, 
        title: "The Originals",
        poster: "../assets/posters/theoriginals.jpg",
        createdAt: "2026-07-03",
        mediaType: "TV Show",
        mainType: "Live Action",

        progress: 10,          // 0-100
        favorite: false,
        rating: 5.5,

        averageTime: "42m",
        runtime: "64h",

        releaseDate: "2013-10-03",
        endDate: "2018-08-01",

        genres: ["Drama", "Fantasy", "Sci-Fi", "Mystery", "Thriller", "Horror"],
        description: "Klaus, the original vampire/werewolf hybrid, returns to New Orleans -- which his family helped build -- to investigate rumors of a plot against him, in this spinoff of \"The Vampire Diaries.\" He finds his former protege, Marcel, reigning powerful over its inhabitants, causing growing tension in the supernatural community. Klaus' brother, Elijah, joins him, and they learn that werewolf Hayley has fallen into the hands of a defiant witch who has life-changing information. In hope of reclaiming the city, Klaus and Elijah form an uneasy alliance with the witches to help further their cause.",
       
        creator: ["Julie Plec"],
        director: ["Joseph Morgan", "Daniel Gillies", "Charles Michael Davis"],
        screenwriter: ["Michael Narducci", "Julie Plec"],
        studio: ["Warner Bros. Television", "CBS Television Studios", "Alloy Entertainment", "Bonanza Productions", "My So-Called Company"],
        distributionStudio: ["CW Network", "Warner Bros. Television Distribution"],

        watchingStatus: "Dropped"
    },

    {
        id: 3,
        title: "Parasyte the Maxim",
        poster: "../assets/posters/parasyte.jpg",
        createdAt: "2026-07-02",
        mediaType: "TV Show",
        mainType: "Anime",

        progress: 100,          // 0-100
        favorite: true,
        rating: 9.4,

        averageTime: "23m",
        runtime: "9h 12m",

        releaseDate: "2014-10-09",
        endDate: "2015-03-26",

        genres: ["Horror","Sci-Fi"],
        description: "Teenager Shinichi Izumi is a high-school student who lives in a quiet Tokyo neighborhood with his parents. His life changes when wormlike creatures, called Parasites, appear on Earth, bent on taking over the brains of human hosts by entering their ears or noses. One such Parasite tries to crawl into Shinichi's ear while he's sleeping one night, but his headphones block entry, so the creature -- who gets the name Migi -- burrows into Shinichi's arm instead, taking over control of his right hand. Shinichi and Migi eventually form a bond as they work together to survive their unique circumstances.",

        Originalcreator: ["Hitoshi Iwaaki"],
        creator: ["Kenichi Shimizu", "Shōji Yonemura"],
        director: ["Kenichi Shimizu"],
        screenwriter: ["Shōji Yonemura"],
        studio: ["Nipon Television", "VAP", "Forecast Communications", "Madhouse"],
        distributionStudio: ["Sentai Filmworks", "Crunchyroll"],

        watchingStatus: "Finished"
    },

    {
        id: 4,
        title: "Avatar: The Last Air Bender",
        poster: "../assets/posters/tlab.jpg",
        createdAt: "2026-07-07",
        mediaType: "TV Show",
        mainType: "Animation",

        progress: 60,          // 0-100
        favorite: false,
        rating: 9.0,

        averageTime: "23m",
        runtime: "23h 23m",

        releaseDate: "2005-02-21",
        endDate: "2008-07-19",

        genres: ["Kids", "Family", "Action", "Adventure", "Fantasy"],
        description: "The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements. The ruthless Fire Nation wants to conquer the world but the only bender who has enough power, the Avatar, has disappeared ... until now. His tribe soon discovers that Aang is the long-lost Avatar. Now Katara and Sokka must safeguard Aang on his journey to master all four elements and save the world from the Fire Nation.",
        creator: ["Michael Dante DiMartino", "Bryan Konietzko"],
        screenwriter: ["Aaron Ehasz"],
        director: ["Dave Filoni", "Giancarlo Volpe"],
        studio: ["Nickelodeon Animation Studio"],
        distributionStudio: ["Paramount Global", "Netflix", "Amazon Prime Video"],

        watchingStatus: "Paused"
    },

    {
        id: 5,
        title: "Attack on Titan",
        poster:"../assets/posters/attackontitan.jpg",
        createdAt: "2026-07-06",
        mediaType: "TV Show",
        mainType: "Anime",

        progress: 100,          // 0-100
        favorite: true,
        rating: 9.4,

        releaseDate: "2013-04-07",
        endDate: "2023-11-05",

        averageTime: "24m",
        runtime: "35h",

        genres: ["Adventure", "Action", "Fantasy"],
        description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters.",
        creator: ["Hajime Isayama"],
        director:["Tetsurō Araki", "Yuichiro Hayashi "],
        screenwriter: ["Yasuko Kobayashi", "Hiroshi Seko"],
        studio: ["Wit Studio", "MAPPA"],
        distributionStudio: ["Crunchyroll", "Adult Swim", "Netflix", "Hulu", "Amazon Prime Video"],

        watchingStatus: "Finished"
    },

    {
        id: 6,
        title: "The Walking Dead",
        poster: "../assets/posters/twd.jpg",
        createdAt: "2026-07-04",
        mediaType: "TV Show",
        mainType: "Live Action",

        progress: 45,          // 0-100
        favorite: false,
        rating: 7.2,

        releaseDate: "2010-10-31",
        endDate: "2022-11-20",

        averageTime: "45m",
        runtime: "137h",

        genres: ["Drama", "Horror", "Sci-Fi"],
        description: "Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. A group of survivors travel in search of safety and security, constantly on the move in search of a secure home. But the pressure each day to stay alive sends many in the group to the deepest depths of human cruelty, and they soon discover that the overwhelming fear of the survivors can be more deadly than the zombies walking among them. At times, the interpersonal conflicts present a greater threat to their continuing survival than the walkers that roam the country.",
        creator: ["Robert Kirkman", "Frank Darabont", "Glen Mazzara", "Scott M. Gimple", "Angela Kang"],
        studio: ["AMC Studios", "Skybound Entertainment", "Valhalla Entertainment", "Cirlcle of Confusion", "Idiot Box Productions" ],
        distributionStudio: ["AMC Studios", "Fox International Channels", "Netflix"],

        watchingStatus: "Watching"
    },

    {
        id: 7,
        title: "Fullmetal Alchemist: Brotherhood",
        poster: "",
        createdAt: "2026-07-01",
        mediaType: "TV Show",
        mainType: "Anime",

        progress: 100,
        favorite: true,
        rating: 9.6,

        averageTime: "24m",
        runtime: "26h",

        releaseDate: "2009-04-05",
        endDate: "2010-07-04",

        genres: ["Action", "Adventure", "Fantasy"],
        description: "Brothers Edward and Alphonse Elric search for the Philsopher's Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother. Edward, who lost only limbs, joins the State Military, which gives him the freedom to continue the search as he tries to restore his brother, whose soul is tethered to earth by a suit of armor. However, Edward and Alphonse are not the only ones seeking the powerful stone. And as they search, they learn of a plot to transmute the entire country for reasons they cannot comprehend.",
        creator: ["Hiromu Arakawa"],
        director: ["Yasuhiro Irie"],
        screenwriter: ["Hiroshi Ōnogi"],
        studio: ["Studio Bones", "Aniplex", "Square Enix"],
        distributionStudio: ["Aniplex", "Aniplex of America", "Crunchyroll", "Funimation", "Adult Swim"],

        watchingStatus: "Finished"
    }
]

