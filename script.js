var music = document.getElementById('background-music');
var toggleButton = document.getElementById('music-toggle');
var speakerOnIcon = document.getElementById('speaker-on');
var speakerOffIcon = document.getElementById('speaker-off');

// Verificar se o usuário já desligou a música anteriormente
if (localStorage.getItem('musicOff') === 'true') {
  music.pause();
  speakerOnIcon.style.display = 'none';
  speakerOffIcon.style.display = 'inline';
}

toggleButton.addEventListener('click', function() {
  if (music.paused) {
    music.play();
    speakerOnIcon.style.display = 'inline';
    speakerOffIcon.style.display = 'none';
    localStorage.setItem('musicOff', false);
  } else {
    music.pause();
    speakerOnIcon.style.display = 'none';
    speakerOffIcon.style.display = 'inline';
    localStorage.setItem('musicOff', true);
  }
});

const soundbutton = document.getElementById("soundbtton");
  const soundbutton2 = document.getElementById("soundbtton2");
  const soundbutton3 = document.getElementById("soundbtton3");
  const soundbutton4 = document.getElementById("soundbtton4");
  const soundbutton5 = document.getElementById("soundbtton5");
  const soundbutton6 = document.getElementById("soundbtton6");
  const soundbutton7 = document.getElementById("soundbtton7");
  const soundbutton8 = document.getElementById("soundbtton8");

  const careg = new Audio("snd/careg.mp3");
  const pass = new Audio("snd/pass.mp3");
  
  soundbutton.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });
  
  soundbutton.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton2.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton2.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton3.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton3.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton4.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton4.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton5.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton5.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton6.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton6.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton7.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton7.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  soundbutton8.addEventListener("click", function() {
    careg.currentTime = 0;
    careg.play();
  });

  soundbutton8.addEventListener("mouseenter", function() {
    pass.currentTime = 0;
    pass.play();
  });

  const buttons = document.querySelectorAll('.circle-menu a');


const menuText = document.querySelector('.circle-menu2 p');


buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    menuText.textContent = button.getAttribute('data-text');
  });
  
  button.addEventListener('mouseout', () => {
    menuText.textContent = 'Menu';
  });
});

