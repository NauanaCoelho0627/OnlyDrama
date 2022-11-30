let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total')


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//criando elemento audio
let track = document.createElement('audio');


//lista de musicas
let All_song = [{
	name: "Shut Down",
	path: "img/BLACKPINK - ‘Shut Down’.mp3",
	img: "img/blackpink.jpg",
},
{
	name: "Jump",
	path: "img/BTS - 'Jump'.mp3",
	img: "img/bts-jump.jpg",
},
{
	name: "Run BTS",
	path: "img/runBts.mp3",
	img: "img/proff.png",
},
{
	name: "Face",
	path: "img/face.mp3",
	img: "img/nuest.jpg",
},
{
	name: "HypeBoy",
	path: "img/hype-boy.mp3",
	img: "img/newJeans.jpg",
},
{
	name: "Panorama",
	path: "img/panorama.mp3",
	img: "img/izone.jpg",
},
{
	name: "깨어나",
	path: "img/Ailee - 깨어나.mp3",
	img: "img/ailee.jpg",
},
{
	name: "MIROH",
	path: "img/MIROH.mp3",
	img: "img/strayKids.jpg",
},
{
	name: "WAVE",
	path: "img/wave.mp3",
	img: "img/ateez.jpg",
},
{
	name: "Revolution",
	path: "img/revolution.mp3",
	img: "img/aleXa.jpg",
}
];




// função para carregar
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	track.load();
	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//funcao para mutar o audio
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// ver se o som esta tocando ou não
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// slide de musicas
function reset_slider() {
	slider.value = 0;
}

// tocar
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pausar
function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// proxima
function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// anterios
function previous_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// mudança de volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// trocando posição no slide das musicas
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// auto play (essa parte faz com que o audio se reprodza sozinho)
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


function range_slider() {
	let position = 0;

	// atualizar slide
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// quando as musicas acabarem vai pra proxima
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index_no += 1;
			load_track(index_no);
			playsong();
		}
	}
}
