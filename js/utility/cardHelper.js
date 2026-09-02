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

const watchingClasses ={
    "Watching" : "watching",
    "Reading" : "reading",
    "Playing" : "playing",
    "Listening" : "listening",
    "Finished" : "finished",
    "Dropped" : "dropped",
    "Paused" : "paused",
    "Plan To Watch" : "planToWatch",
    "Plan To Read" : "planToRead",
    "Plan To Play" : "planToPlay",
    "Plan To Listen" : "planToListen",
    "No Plan To Watch" : "noPlanToWatch",
    "No Plan To Read" : "noPlanToRead",
    "No Plan To Play" : "noPlanToPlay",
    "No Plan To Listen" : "noPlanToListen"
}

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

function getWatchingClass(type){
    return watchingClasses[type] || "";
}

function formatNames(data) {
    const names = data?.creator ?? data?.director ?? []; 

    if (names.length === 0) return '';

    if (names.length === 1) return names[0];

    if (names.length === 2) return names.join(' & ');

    const allButLast = names.slice(0, -1).join(', ');
    const last = names[names.length - 1];
    return `${allButLast} & ${last}`;
}

function getYear(data){
    if (data.hasOwnProperty('releaseDate') && data.hasOwnProperty('endDate')) {

        return(data.releaseDate.split("-", 1).join(" ") + ' - ' + data.endDate.split("-", 1).join(" "));

    } else if (data.hasOwnProperty('releaseDate')) {

        return(data.releaseDate.split("-", 1).join(" "));

    } else {

        return("Not Specified");

    }
}
