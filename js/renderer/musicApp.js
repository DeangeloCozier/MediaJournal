function renderMusic(data = songs) {
    renderCollectionCards(data, "song-container", createSongCard, "Add Music");
}

renderMusic();

SearchEntities("musicSearch", songs, renderMusic);