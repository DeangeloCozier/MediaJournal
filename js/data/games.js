const games = [
    {
        id:1,
        title: "Elder Scrolls V: Skyrim",
        poster: "../assets/posters/skyrim.jpg",
        createdAt: "2026-07-01",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 50,          // 0-100
        favorite: true,
        rating: 9.6,

        releaseDate: "2011-11-11",

        genres: ["Open World", "RPG", "Adventure", "Fantasy", "Single-Player"],
        description: "After escaping execution, the last living Dragonborn must grow in strength and power to defeat the dragons that have once again begun to plague the land of Skyrim",
        creator: ["Bethesda Game Studios"]    
    },

    {
        id: 2,
        title: "Dying Light",
        poster: "../assets/posters/dyinglight.jpg",
        createdAt: "2026-07-03",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 0,          // 0-100
        favorite: false,
        rating: null,

        releaseDate: "2015-01-27",

        genres: ["Zombies"," Survival", "Horror", "Single-Player", "Multi-Player", "Open World", "First Person", "Parkour", "Action"],
        description: "Kyle Crane is GRE agent who is tasked with recovering data from the overrun city of Harran that could cure the virus rampaging throughout the city. The virus transforms the victim into a zombie like creature or into special mutations of that. After getting bitten inside the city, Crane has to blend in with one of the two main factions of the city, while staying undercover to try and recover that data. But he may have bitten off more than he can chew, for when the nighttime comes everything changes. The zombies get faster and stronger, and new mutations called, Volatilles come out to ruin your day. Good night, good luck",
        creator: ["Techland"] 
    },

    {
        id: 3,
        title: "Blasphemous",
        poster: "../assets/posters/blaphemous.jpg",
        createdAt: "2026-07-02",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 75,          // 0-100
        favorite: true,
        rating: 9.4,

        releaseDate: "2019-09-10",

        genres: ["Metroidvania", "Souls-Like", "Pixel Graphics", "Dark Fantasy", "Single-Player", "Indie", "Platformer", "Action"],
        description: "Set in the savage land of Cvstodia, a place where religion is the utmost importance in the eyes of the populace, superstitiion runs amok, and churches outnumber people two to on. You will find yourself in this hellish territory in the wake of the Age of Corruption.",
        creator: ["The Game Kitchen"]
    },

    {
        id: 4,
        title: "Batman: Arkham Asylum",
        poster: "../assets/posters/batmanaa.jpg",
        createdAt: "2026-07-07",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 72,          // 0-100
        favorite: true,
        rating: 9.0,

        releaseDate: "2009-08-25",

        genres: ["Action", "Stealth", "Adventure", "Single-Player", "Open World", "Detective", "Puzzle"],
        description: "Batman battles his archenemy, the Joker, who instigates an elaborate plot to seize control of Arkham Asylum, trapping Batman inside with may of his incarcerated foes. Batman finds himself having to come against some of the greatest enemies and several inmates as he sets out to stop the clown prince of crime. Batman must fight for his life and hekp all surviving police officers get out of and regain control of the Asylum.",
        creator: ["Rocksteady Studios"]
    },

    {
        id: 5,
        title: "Minecraft",
        poster:"../assets/posters/minecraft.jpg",
        createdAt: "2026-07-06",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 23,          // 0-100
        favorite: false,
        rating: 9.2,

        releaseDate: "2011-11-18",

        genres: ["Sandbox", "Survival", "Action", "Adventure", "RPG", "Simulation", "Single-Player", "Multi-Player"],
        description: "Minecragy is a 3D block-based sandbox video game where players explore endless, procedurally generated worlds, mine raw materials, craft tools, and build structures with complete freedom.",
        creator: ["Markus Persson","Mojang Studios"]
    },

    {
        id: 6, 
        title: "Euro Truck Simulator 2",
        poster: "",
        createdAt: "2023-05-15",
        mediaType: "Game",
        mainType: "Main Game",
        
        progress: 23,
        favorite: true,
        rating: 9.2,
        
        releaseDate: "2008-08-06",

        genres: ["Driving", "Simulation", "Open World", "Multi-Player", "Single-Player", "Adventure"],
        description: "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.",
        creator:["SCS Software"]
    }, 

    {
        id: 7,
        title: "Portal 2",
        poster: "",
        createdAt: "2024-04-08",
        mediaType: "Game",
        mainType: "Main Game",

        progress: 100,
        favorite: true,
        rating: 9.4,

        releaseDate: "2011-04-06",

        genres: ["Single-Player", "Platformer", "First-Person", "Puzzle", "Action", "Adventure", "Co-Op"],
        description: "Many years after defeating GLaDOS, Chell finds herself once again in the labs of Aperture Science. She is found by Wheatley, a chatty personality core who wants to help her escape. Chell finds herself once again doing the same testing she did while she was with GLaDOS the first tim. With the help of Wheatley, Chell makes another attempt to escape, but GLaDOS has other plans...",
        creator:["Valve Corporation"]
    },

    {
        id: 8,
        title: "Portal: Revolution",
        poster: "",
        createdAt: "2024-05-14",
        mediaType: "Game",
        mainType: "Fan Made",

        progress: 50,
        favorite: false,
        rating: 6.7,

        releaseDate: "2024-01-06",

        genres: ["Puzzle", "Single-Player", "First-Person", "Mod", "Adventure", "Action", "Platformer", "Action"],
        description: "The Portal Mod you've been waiting for. Delve into a new story with original characters, spamnning over 8 hours of gameplay and featureing over 40 new challenging test chambers which make use of new mechanics.",
        creator: ["Second Face Software"]
    }

]

