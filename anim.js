// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hold my head", time: 11 },
  { text: "Inside your hands", time: 15 },
  { text: "I need someone", time: 19 },
  { text: "Who understands", time: 23 },
  { text: "I need someone", time: 27 },
  { text: "Someone who hears", time: 31 },
  { text: "For you, I've waited all these years", time: 35 },
  { text: "For you i'd wait", time: 41 },
  { text: "'Til kingdom come", time: 45 },
  { text: "Until my day", time: 49 },
  { text: "My day is done", time: 53 },
  { text: "And say you'll come", time: 58 },
  { text: "And set me free", time: 62 },
  { text: "Just say you'll wait", time: 65 },
  { text: "You'll wait for me", time: 70 },
  { text: "In your tears", time: 83 },
  { text: "And in your blood", time: 87 },
  { text: "In your fire", time: 92 },
  { text: "And in your flood", time: 95 },
  { text: "I hear you laugh", time: 99 },
  { text: "I hear you sing", time: 103 },
  { text: "I wouldn't change a simple thing", time: 107 },
  { text: "And the wheels just keep on turning", time: 112 },
  { text: "The drumers begin to drum", time: 116 },
  { text: "I don't know which way i'm going", time: 120 },
  { text: "I don't know what i've become", time: 122.4 },
  { text: "For you i'd wait", time: 126 },
  { text: "'Til kingdom come", time: 128.4 },
  { text: "Until my days", time: 130.8 },
  { text: "My days is done", time: 133.2  },
  { text: "And say you'll come", time: 135.6 },
  { text: "And set me free", time: 138 },
  { text: "Just say you'll wait", time: 141 },
  { text: "You'll wait for me", time: 143.4 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);