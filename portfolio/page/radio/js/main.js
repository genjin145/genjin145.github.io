window.radio = {};

radio.init = function(addModules) {
    that = this;
    that.layout = that.layout || [];

    var play = document.getElementsByClassName("radio-player__play")[0],
    prev = document.getElementsByClassName("radio-player__prev")[0],
    next = document.getElementsByClassName("radio-player__next")[0],
    speaker = document.getElementsByClassName("radio-player__speaker")[0],
    volume = document.getElementsByClassName("radio-player__volume")[0],
    audio = document.getElementsByTagName("audio")[0],
    box = document.getElementsByClassName("radio-list__link"),
    activeTrackImage = document.getElementsByClassName("radio-active-track__image")[0],
    title = document.getElementsByClassName("radio-active-track__title")[0],
    genre = document.getElementsByClassName("radio-active-track__genre")[0],
    site = document.getElementsByClassName("radio-active-track__site")[0];
    var treck_id = 5,
    sound_volume,
    radioListElem = document.getElementsByClassName("radio__list ")[0];

    // displayActiveRadio(0);
    // treck_id = 0;

    audio.volume = 0.05;
    volume.value = audio.volume * 100;

    if (localStorage.getItem("layout")) {
        that.layout = localStorage.getItem("layout").split(",");
    } else {
        for (let i = 0; i < radio_list.length; i++) {
            that.layout.push(i);
        }
    }

    for (var i = 0; i < that.layout.length; i++) {
        let li = document.createElement("li"),
            a = document.createElement("a"),
            img = document.createElement("img");

        let index = that.layout[i];

        img.src = radio_list[index].Logo;
        img.alt = radio_list[index].Name;
        img.classList.add("radio-list__image");

        a.appendChild(img);
        a.href = radio_list[index].Radio;
        a.target = "_blank";
        
        a.addEventListener("click", function(evt) {
            evt.preventDefault();

            treck_id = evt.currentTarget.parentElement.dataset.id;

            audio.src = radio_list[treck_id].Radio;
            volume.value = audio.volume * 100;
            audio.play();
            if (play.classList.contains("radio-player__play")) {
                play.classList.add("radio-player__pause");
                play.classList.remove("radio-player__play");
                play.innerHTML = "&#xf16c;";
            }
            displayActiveRadio(treck_id);
        });
        a.classList.add("radio-list__link");

        li.dataset.id = index;
        li.appendChild(a);
        li.classList.add("radio-list__item");
        
        radioListElem.appendChild(li);
    }

    addModules();

    function displayActiveRadio(index) {
        title.textContent = radio_list[index].Name;
        genre.inntextContenterHTML = "Жанр: " + radio_list[index].Genre;
        activeTrackImage.src = radio_list[index].Logo;
        site.textContent = radio_list[index].Site.replace(/^.*:\/\/www./i, '');
        site.href = radio_list[index].Site;
    }

    function getPositionId(id) {
        if (!that.layout) return;

        for (let i = 0; i < that.layout.length; i++) {
            if (that.layout[i] == id) return i;
        }
    }

    play.onclick = function() {
        if (play.classList.contains("radio-player__play")) {
            play.classList.remove("radio-player__play");
            play.classList.add("radio-player__pause");
            play.innerHTML = "&#xf16c;";
            audio.play();
        } else {
            play.classList.remove("radio-player__pause");
            play.classList.add("radio-player__play");
            play.innerHTML = "&#xf16b;";
            audio.pause();
        }
        volume.value = audio.volume * 100;
    };

    next.onclick = function() {
        let idPosition = getPositionId(treck_id);
        idPosition++;

        play.classList.remove("radio-player__play");
        play.classList.add("radio-player__pause");
        play.innerHTML = "&#xf16c;";
        if (idPosition > that.layout.length - 1) {
            idPosition = 0;
        }
        treck_id = that.layout[idPosition];
        audio.src = radio_list[treck_id].Radio;
        
        displayActiveRadio(treck_id);
        audio.play();
    };

    prev.onclick = function() {
        let idPosition = getPositionId(treck_id);
        idPosition--;

        play.classList.remove("radio-player__play");
        play.classList.add("radio-player__pause");
        play.innerHTML = "&#xf16c;";
        if (idPosition < 0) {
            idPosition = that.layout.length - 1;
        }
        treck_id = that.layout[idPosition];
        audio.src = radio_list[treck_id].Radio;
        
        displayActiveRadio(treck_id);
        audio.play();
    };

    speaker.onclick = function() {
        if (speaker.classList.contains("radio-player__speaker")) {
            speaker.classList.remove("radio-player__speaker");
            speaker.classList.add("radio-player__mute");
            speaker.innerHTML = "&#xf038;";
            sound_volume = audio.volume;
            audio.volume = 0;
            volume.value = 0;
        } else {
            speaker.classList.remove("radio-player__mute");
            speaker.classList.add("radio-player__speaker");
            speaker.innerHTML = "&#xf03a;";
            audio.volume = sound_volume;
            volume.value = (sound_volume * 100).toFixed(0);
        }
        if (volume.value > 60) speaker.innerHTML = "&#xf03b;";
    };

    volume.oninput = function() {
        if (volume.value < 2) {
            speaker.classList.add("radio-player__mute");
            speaker.classList.remove("radio-player__speaker");
            speaker.innerHTML = "&#xf038;";
        } else if (volume.value > 60) {
            speaker.innerHTML = "&#xf03b;";
        } else {
            speaker.classList.add("radio-player__speaker");
            speaker.classList.remove("radio-player__mute");
            speaker.innerHTML = "&#xf03a;";
        }
        audio.volume = (this.value / 100);
    };
};

radio.init(function() {
    dragAndDrop.init();
});