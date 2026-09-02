const movies = [

    {
        id: 1,
        title: "Kung Fu Panda",
        poster: "../assets/posters/kungfupanda.jpg",
        createdAt: "2026-07-01",
        mediaType: "Movie",
        mainType: "Animation",

        progress: 78,          // 0-100
        favorite: false,
        rating: 6.7,

        runtime: "1h 32m",

        releaseDate: "2008-06-06",

        genres: ["Family","Kids", "Comedy", "Adventure"],
        description: "Po the panda works in his family's noodle shop and dreams of becoming a kung-fu master. His dream becomes a reality when, unexpectedly, he must fulfill an ancient prophecy and study the skills with his idols, the Furious Five. Po needs all the wisdom, strength and ability he can muster to protect his people from an evil snow leopard.",
        director: ["John Stevenson","Mark Osborne"],
        screenwriter: ["Johnathan Aibel", "Glen Berger"],
        originalConceptCreator: ["Ethan Reiff", "Cyrus Voris"],
        studio: ["DreamWorks Animation"],
        distributionStudio: ["Paramount Pictures"],

        watchingStatus: "Dropped"
    },

    {
        id: 2,
        title: "Cars",
        poster: "../assets/posters/cars.jpg",
        createdAt: "2026-07-02",
        mediaType: "Movie",
        mainType: "Animation",

        progress: 100,          // 0-100
        favorite: false,
        rating: 8.2,

        runtime: "1h 56m",

        releaseDate: "2006-06-09",

        genres: ["Family","Kids", "Comedy", "Adventure"],

        description: "While traveling to California to race The King and Chick Hicks in the Piston Cup Championship, Lightning McQueen falls out of his trailer and winds up in a run-down town called Radiator Springs. He slowly befriends the town's odd residents, including Sally, Doc Hudson and Mater. When it comes time for him to leave, the championship is no longer his top priority.",
        creator: ["J\u00F8rgen Klubien", "John Lasseter", "Joe Ranft"],
        director: ["John Lasseter", "Joe Ranft"],
        screenwriter: ["John Lasseter, Joe Ranft", "Jørgen Klubien", "Dan Fogelman", "Kiel Murray", "Phil Lorin"],
        studio: ["Pixel Animation Studios"],
        distributionStudio: ["Walt Disney Pictures"],

        watchingStatus: "Finished"
    },

    {
        id: 3,
        title: "Deadpool",
        poster: "",
        createdAt: "2026-07-05",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 100,
        favorite: true,
        rating: 9.0,

        runtime: "1h 48m",

        releaseDate: "2016-02-12",

        genres: ["Action","Adventure", "Comedy",],

        description: "Wade Wilson is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead, Deadpool uses his new skills to hunt down the man who nearly destroyed his life.",
        creator: ["Ryan Reynolds", "Tim Miller"],
        director: ["Tim Miller"],
        screenwriter: ["Rhett Reese", "Paul Wernick"],
        studio:["20th Century Fox", "Marvel Entertainment", "Maximum Effort"],
        distributionStudio: ["20th Century Fox"],

        watchingStatus: "Finished"
    },

    {
        id: 4,
        title: "Toy Story 3",
        poster: "",
        createdAt: "2026-05-07",
        mediaType: "Movie",
        mainType: "Animation",
        
        progress: 0,
        favorite: false,
        rating: null,

        runtime: "1h 43m",

        releaseDate: "2010-06-18",

        genres: ["Family","Kids", "Comedy", "Adventure", "Fantasy"],
        
        description: "With their beloved Andy preparing to leave for college, Woody, Buzz Lightyear, Jessie, and the rest of the toys find themselves headed for the attic but mistakenly wind up on the curb with the trash. Woody's quick thinking saves the gang, but all but Woody end up being donated to a day-care center. Unfortunately, the uncontrollable kids do not play nice, so Woody and the gang make plans for a great escape.",
        originalConceptCreator: ["John Lasseter, Andrew Stanton", "Lee Unkrich"],
        director: ["Lee Unkrich"],
        screenwriter: ["Michael Arndt"],
        studio:["Pixar Studios"],
        distributionStudio: ["Walt Disney Pictures"],

        watchingStatus: "Plan To Watch"
    },

    {
        id: 5, 
        title: "Ponyo",
        poster: "",
        createdAt: "2026-02-04",
        mediaType: "Movie",
        mainType: "Anime",

        progress: 100,
        favorite: false,
        rating: 8.5,

        runtime: "1h 41m",

        releaseDate: "2009-08-14",

        genres: ["Adventure","Fantasy"],

        description: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.",
        creator: ["Hayao Miyazaki"],
        studio: ["Studio Ghibli"],
        distributionStudio: ["Toho", "Walt Disney Studios"],

        watchingStatus: "Finished"
    },

    {
        id: 6,
        title: "Joker",
        poster: "",
        createdAt:"2026-04-06",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 20,
        favorite: false,
        rating: null,

        runtime: "2h 2m",

        releaseDate: "2019-10-04",

        genres: ["Crime","Drama"],

        description: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        creator: ["Todd Phillips"],
        director: ["Todd Phillips"],
        screenwriter: ["Todd Phillips", "Scott Silver"],
        studio: ["Warner Bros. Pictures", "DC Films", "Village Roadshow Pictures", "BRON Creative"],
        distributionStudio: ["Warner Bros. Pictures"],

        watchingStatus: "Watching"

    },

    {
        id: 7, 
        title: "Django Unchained",
        poster: "",
        createdAt: "2026-01-05",
        mediaType: "Movie",
        mainType: "Live Action",
        
        progress: 0,
        favorite: false, 
        rating: null,

        runtime: "2h 35m",

        releaseDate: "2012-12-25",

        genres: ["Western","Drama", "Action"],

        description: "Two years before the Civil War, Django, a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie, where Django's long-lost wife is still a slave.",
        creator: ["Quentin Tarantino"],
        studio: ["The Weinstein Company", "SonSy Pictures Releasing", "A Band Apart"],
        distributionStudio: ["The Weinstein Company", "Sony Pictures Releasing"],

        watchingStatus: "Plan To Watch"
    },

    {
        id: 8, 
        title: "Get Out",
        poster: "",
        createdAt: "2026-03-12",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 0,
        favorite: false,
        rating: null,

        runtime: "1h 44m",

        releaseDate: "2017-02-24",

        genres: ["Horror","Mystery", "Thiller", "Comedy"],

        description: "Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined",
        creator: ["Jordan Peele"],
        studio: ["Blumhouse Production", "Monkeypaw Productions", "QC Entertainment"],
        distributionStudio: ["Universal Pictures"],

        watchingStatus: "Plan To Watch"

    },

    {
        id: 9,
        title: "Mad Max: Fury Road",
        poster: "",
        createdAt: "2026-07-09",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 0,
        favorite: false,
        rating: null,

        runtime: "2h 1m",

        releaseDate: "2015-05-15",

        genres: ["Action","Sci-Fi", "Adventure"],

        description: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky, a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
        creator:["George Miller"],
        screenwriter:["George Miller", "Brendan McCarthy", "Nico Lathouris"],
        studio: ["Kennedy Miller Mitchell", "Village Roadshow Pictures"],
        distributionStudio: ["Warner Bros. Pictures"],

        watchingStatus: "No Plan To Watch"
    },

    {
        id: 10,
        title: "Logan",
        poster: "",
        createdAt: "2026-05-01",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 0,
        favorite: false,
        rating: null,

        runtime: "2h 17m",

        releaseDate: "2017-03-03",

        genres: ["Action", "Adventure", "Fantasy"],

        description: "In the near future, a weary Logan cares for an ailing Professor X at a remote outpost on the Mexican border. His plan to hide from the outside world gets upended when he meets a young mutant who is very much like him. Logan must now protect the girl and battle the dark forces that want to capture her.",
        creator: ["James Mangold", "Hugh Jackman"],
        screenwriter: ["James mangold", "Scott Frank", "Michael Green"],
        studio: ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "Hutch Parker Entertainment", "The Donners' Company"],
        distributor:["20th Century Fox"],

        watchingStatus: "Plan To Watch"
    },

    {
        id: 11, 
        title: "The Wolf of Wall Street",
        poster: "",
        createdAt: "2026-01-01",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 100, 
        favorite: true,
        rating: 9.4,

        runtime: "2h 57m",

        releaseDate: "2013-12-25",

        genres: ["Comedy", "Drama", "Biography"],

        description: "In 1987, Jordan Belfort takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.",
        creator: ["Martin Scorsese", "Terence Winter"],
        director: ["Martin Scorsese"],
        screenwriter: ["Terence Winter"],
        studio: ["Red Granite Pictures", "Appian Way Productions", "Sikelia Productions"],
        distributionStudio: ["Paramount Pictures", "Universal Pictures"],

        watchingStatus: "Finished"
    },

    {
        id: 12,
        title: "Skyfall",
        poster: "",
        createdAt: "2026-01-06",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 0,
        favorites: false,
        rating: null, 

        runtime: "2h 23m",

        releaseDate: "2021-11-09",

        genres: ["Action", "Adventure", "Mystery", "Thriller"],

        description: "When James Bond's latest assignment goes terribly wrong, it leads to a calamitous turn of events: Undercover agents around the world are exposed, and MI6 is attacked, forcing M to relocate the agency. With MI6 now compromised inside and out, M turns to the one man she can trust: Bond. Aided only by a field agent, Bond takes to the shadows and follows a trail to Silva, a man from M's past who wants to settle an old score.",
        director: ["Sam Mendes"],
        screenwriter: ["Neal Purvis", "Robert Wade", "John Logan"],
        studio: ["Eon Production", "Metro-Goldwyn-Mayer Pictures", "Columbia Pictures"],
        distributionStudio:["Soney Pictures Releasing"],

        watchingStatus: "Plan To Watch"
    },

    {
        id: 13, 
        title: "The Dark Knight Rises",
        poster: "",
        createdAt: "2026-03-21",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 100,
        favorite: false,
        rating: 6.5,

        runtime: "2h 45m",

        releaseDate: "2021-07-20",

        genres: ["Action", "Adventure", "Fantasy", "Thriller", "Mystery"],

        description: "It has been eight years since Batman, in collusion with Commissioner Gordon, vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar and a merciless terrorist named Bane force Batman out of exile and into a battle he may not be able to win.",
        creator: ["Christopher Nolan"],
        screenwriter: ["Johnathan Nolan", "Christopher Nolan"],
        studio: ["Legendary Pictures", "DC Entertainment", "Syncopy Inc."],
        distributionStudio: ["Warner Bros. Pictures"],

        watchingStatus: "Finished"
    },

    {
        id: 14,
        title: "Dawn of the Planet of the Apes",
        poster: "",
        createdAt: "2026-04-08",
        mediaType: "Movie",
        mainType: "Live Action",

        progress: 0, 
        favorites: false, 
        rating: null,

        runtime: "2h 11m",

        releaseDate: "2014-07-11",
        
        genres: ["Action", "Adventure", "Sci-Fi"],

        description: "Ten years after simian flu wiped out much of the world's Homo sapiens, genetically enhanced chimpanzee Caesar and his ever-growing band of followers has established a thriving colony just outside San Francisco in Muir Woods. Meanwhile, a small band of human survivors emerges, which forces Caesar -- as leader -- to grapple with the dual challenge of protecting his people and re-establishing a relationship with the remaining human population -- the latter being Caesar's secret wish.",
        director: ["Matt Reeves"],
        screenwriter: ["Mark Bomback", "Rick Jaffa", "Amanda Silver"],

        watchingStatus: "Plan To Watch"
    }

];

