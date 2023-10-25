<template>
  <main class="home">
    <header>
      <h1>My Vibe</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>

        <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
      </section>

      <section class="playlist">
        <h3>The Playlist</h3>
        <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
          {{ song.artist }} - {{ song.title }} 
        </button>
      </section>
    </main>
    <div class="album-cover">
      <img :src="current.cover" alt="Album Cover" class="small-album-cover" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      current: {
        
      },

      index: 0,
      isPlaying: false,
      songs: [
        {
          artist: 'Bigbro Vibe',
          title: 'Engano',
          src: require('../assets/music/Vibe-Engano.mp3'),
          cover: require('../assets/cover/Cover1.png')
        },
        {
          artist: 'Bigbro Vibe',
          title: 'Ucrania',
          src: require('../assets/music/Vibe-Ucrania.mp3'),
          cover: require('../assets/cover/Cover2.png')
        },
        {
          artist: 'Bigbro Vibe',
          title: 'Fake',
          src: require('../assets/music/Vibe-Fake.mp3'),
          cover: require('../assets/cover/Cover3.png')
        },
        {
          artist: 'Bigbro Vibe  Ft Nizyo',
          title: 'Too Lit',
          src: require('../assets/music/Vibe Feat Nizyo-Too Lit.mp3'),
          cover: require('../assets/cover/Cover4.png')
        },
        {
          artist: 'Bigbro Vibe  Ft Libra',
          title: 'Groove',
          src: require('../assets/music/Vibe Feat Libra-Groove.mp3'),
          cover: require('../assets/cover/Cover5.png')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    }
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #121212;
  color: #FFF;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.album-playlist {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.album-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 15%; /* Define a largura da capa como 15% da largura da lista de reprodução */
}

.album-cover-image {
  width: 50px; /* Largura fixa da imagem da capa */
  height: 50px; /* Altura fixa da imagem da capa */
  max-width: 100%; /* Garante que a imagem não ultrapasse seu contêiner */
  max-height: 100%; /* Garante que a imagem não ultrapasse seu contêiner */
  border: 2px solid #008571;
  border-radius: 5px;
}
.small-album-cover {
  width: 100px; /* Largura fixa da imagem da capa */
  height: 100px; /* Altura fixa da imagem da capa */
  max-width: 100%; /* Garante que a imagem não ultrapasse seu contêiner */
  max-height: 100%; /* Garante que a imagem não ultrapasse seu contêiner */
  border: 2px solid #008571;
  border-radius: 5px;
}



header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #FFF;
}

main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}

.song-title {
  color: #FFF;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-title span {
  font-weight: 400;
  font-style: italic;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.play, .pause, .next, .prev {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #FFF;
  background-color: #008571;
}

.next, .prev {
  font-size: 16px;
  background-color: #212121;
}

.playlist {
  padding: 15px;
  background-color: #212121;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.playlist h3 {
  color: #FFF;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: #FFF;
}

.playlist .song:hover {
  color: #FF5858;
}

.playlist .song.playing {
  color: #FFF;
  background-image: linear-gradient(to right, #074f44, #008571);
}
</style>