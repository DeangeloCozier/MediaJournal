const typeClasses = {
    // TV Shows/Movies
    "Animation": "animation",
    "Live Action": "liveAction",
    "Anime": "anime",

    // Books
    "Novel": "novel",
    "Novella": "novella",
    "Manga": "manga",
    "Comic": "comic",
    "Short Story": "shortStory",
    "Manhwa": "manhwa",
    "Light Novel": "lightNovel",

    // Music
    "Single": "single",
    "Album": "album",
    "EP": "ep",
    "Mixtape": "mixtape",
    "Soundtrack": "soundtrack",

    // Games
    "Main Game": "mainGame",
    "DLC": "dlc",
    "Expansion": "expansion",
    "Spin-Off": "spinOff",
    "Remake": "remake",
    "Remaster": "remaster",
    "Reboot": "reboot",
    "Collection": "collection",
    "Fan Made": "fanMade",
    "Demo": "demo"
};

const mediaClasses = {
    "Game": "game",
    "TV Show": "tv",
    "Movie": "movie",
    "Book": "book",
    "Music": "music"
};

function getMainClass(type) {
    return typeClasses[type] || "";
}

function getMediaClass(type) {
    return mediaClasses[type] || "";
}

function getRatingClass(rating) {
    if (rating == null) return "unrated";
    if (rating < 4) return "ratingLow";
    return `rating${Math.floor(rating)}`;
}