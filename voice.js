// let speech = new SpeechSynthesisUtterance();

// let voices = [];
// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();
//   speech.voice = voices[0];
//   voices.forEach(
//     (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
//   );
// };
// voiceSelect.addEventListener("change", () => {
//   speech.voice = voices[voiceSelect.value];
// });
// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   window.speechSynthesis.speak(speech);
// });

// const select = document.getElementById("dropdown");

// select.addEventListener("focus", () => {
//   select.style.backgroundImage = "url('inverted.png')";
// });

// select.addEventListener("blur", () => {
//   select.style.backgroundImage = "url('dropdown.png')";
// });

// select.addEventListener("change", () => {
//   select.style.backgroundImage = "url('dropdown.png')";
// });

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voices
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return;

  voiceSelect.innerHTML = ""; // clear old options
  voices.forEach((voice, i) => {
    const option = new Option(voice.name + " (" + voice.lang + ")", i);
    voiceSelect.add(option);
  });

  speech.voice = voices[0]; // default
}

// Try immediately
populateVoices();

// Also listen for voiceschanged
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

// Change voice on select
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Speak
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
