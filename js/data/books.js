const books = [
    {   
        id:1, 
        title: "Tokyo Ghoul",
        poster: "../assets/posters/TokyoGhoul.jpg",
        createdAt: "2026-07-08",
        mediaType: "Book",
        mainType: "Manga",

        progress: 7100,          // 0-100
        favorite: true,
        rating: 9.6,

        genres: ["Gore", "Action", "Adventure", "Horror", "Mystery", "Psychological", "Thriller", "Tragedy", "Drama", "Dystopia"],
        description: "Luring withing the shadows of Tokyo are frightening beings known as \"ghouls\", who satisfy their hunger by feeding on humans once night falls. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh"
    },

    {
        id:2,
        title: "Attack on Titan",
        poster: "../assets/posters/AttackonTitanM.jpg",
        createdAt: "2026-07-07",
        mediaType: "Book",
        mainType: "Manga",

        progress: 100,          // 0-100
        favorite: true,
        rating: 9.8,

        genres: ["Action", "Drama", "Fantasy", "Mystery", "Tragedy", "Horror", "Dystopia", "Psychological"],
        description: "Hundreds of years ago, horrifying creatures hwich resembled humans appeared. These mindless, towering giantes, called Titans, proved to be an existential threat, as they preyed on whatever humans they could find in order to satisfy a seemingly unending appetite. Unable to effectively combat the Titans, mankind was forced to barricade themselves within large walls surrounding what they may very well be humanity's last safe haven in the world.\n\nIn the present day, life within the walls has finally found peace, since the residents have not dealt with Titans for many years. Eren Yeager, Mikasa Ackerman, and Armin Arlert are three young children who dream of experiencing all that the world has to offer, having grown up hearing stories of the wonder beyond the walls. But when the state of tranquility is suddenly shattered by the attack of a massive 60-meter Titan, they quickly learn just how cruel the world can be. On that day, Eren makes a promise to himself that he will do whatever it takes to eradicate every single Titan off the face of the Earth, with the hope that one day, humanity will once again be able to live outside the walls without fear."
    },

    {
        id:3,
        title: "Goosebumps: Stay Out of the Basement ",
        poster: "../assets/posters/StayOutoftheBasement.jpg",
        createdAt: "2026-07-09",
        mediaType: "Book",
        mainType: "Novel",

        progress: 100,          // 0-100
        favorite: true,
        rating: 9.4, 

        genres: ["Horror", "Fiction", "Childrens", "Mystery", "Thriller,", "Young Adult", "Fantasy"],
        description: "Dr. Brewer is doing a little plant-testing in his basement. Nothing to worry about. Harmless, he says. But Margaret and Casey Brewer are worried about their father. Especially when they...meet...some of the plants that he is growing down there. Them they notice that their father is developing plant like tendencies. In fact, he is becoming distinctlu weedy-and seedy. Is it just part of the Dr. Brewer's harmless' experiment? Or does Dr. Brewer have more than just a green thumb...?"
    },

    {
        id:4,
        title: "Goosebumps: Monster Blood",
        poster: "../assets/posters/MonsterBlood.jpg",
        createdAt: "2026-07-01",
        mediaType: "Book",
        mainType: "Novel",

        progress: 75,          // 0-100
        favorite: true,
        rating: 9.0,

        genres: ["Horror", "Fiction", "Childrens", "Mystery", "Thriller,", "Young Adult", "Fantasy"],
        description: "Evan visits an eerie oldl toy store and buys a dusty can of Monster Blood. But then he notices something weird about the slimey green ooze. It keeps growing. And growing. And growing.\n\nAnd all that growing has given the Monster Blood a monstrous appetite..."
    },

    {
        id:5,
        title: "Goosebumps: Welcome to Dead House",
        poster: "../assets/posters/WelcometoDeadHouse.jpg",
        createdAt: "2026-07-02",
        mediaType: "Book",
        mainType: "Novel",

        progress: 100,          // 0-100
        favorite: true,
        rating: 9.6,

        genres: ["Horror", "Fiction", "Childrens", "Mystery", "Thriller,", "Young Adult", "Fantasy"],
        description: "Amanda and Josh think the old house they have just moved into is weird. Spooky. Possibly haunted. And the town of Dark Falls is pretty strange too. -But their parents don't believe them. You'll get used to it, they say. Go out and make some new friends. -So Amanda and Josh do. But these creepy new friends are not exactly what their parents had in mind.\n\nBecause they want to be friends...\n\n...Forever."
    }
]