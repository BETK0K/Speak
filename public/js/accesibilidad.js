onload = function() {
    const actEle = document.querySelector('#activar');
    const desacEle = document.querySelector('#desactivar');
    const actSelec = document.querySelector('#activarSeleccion');
    const desacSelec = document.querySelector('#desactivarSeleccion');

    const playSelec = document.querySelector('#btn_play');
    const pauseSelec = document.querySelector('#btn_pause');
    const stopSelec = document.querySelector('#btn_stop');
    let idTextoMemoria = null
    var synth = speechSynthesis;
    actEle.addEventListener('click', onClickActivar);
    desacEle.addEventListener('click', onClickDesactivar);
    actSelec.addEventListener('click', onClickActivarSeleccion);
    desacSelec.addEventListener('click', onClickDesactivarSeleccion);

    playSelec.addEventListener('click', onClickPlay);
    pauseSelec.addEventListener('click', onClickPause);
    stopSelec.addEventListener('click', onClickStop);

    function onClickActivar(event) {
        if (event.target.id == "activar") {
            document.getElementById("activar").style.display = "none";
            document.getElementById("desactivar").style.display = "block";

            const box1 = document.getElementById('articulo');
            const contenido = document.querySelectorAll("#speak");
            if (contenido.length > 0) {
                for (var i = 0; i < contenido.length; i++) {
                    const idTexto = document.getElementById("speak");
                    idTexto.id = `${i}`;

                    const btn_play = document.createElement('button');
                    box1.appendChild(idTexto);
                    idTexto.appendChild(btn_play);
                    btn_play.className = 'btn2';
                    btn_play.id = `play${i}`;

                    const i_play = document.createElement('i');
                    i_play.className = 'fa fa-play';
                    btn_play.appendChild(i_play);

                    const btn_pause = document.createElement('button');
                    box1.appendChild(idTexto);
                    idTexto.appendChild(btn_pause);
                    btn_pause.className = 'btn3';
                    btn_pause.id = `pause${i}`;
                    btn_pause.display = 'none';

                    const i_pause = document.createElement('i');
                    i_pause.className = 'fa fa-pause';
                    btn_pause.appendChild(i_pause);

                    const btn_stop = document.createElement('button');
                    box1.appendChild(idTexto);
                    idTexto.appendChild(btn_stop);
                    btn_stop.className = 'btn3';
                    btn_stop.id = `stop${i}`;

                    const i_stop = document.createElement('i');
                    i_stop.className = 'fa fa-stop';
                    btn_stop.appendChild(i_stop);

                    idTexto.insertAdjacentElement("afterend", btn_play);
                    btn_play.insertAdjacentElement("afterend", btn_pause);
                    btn_pause.insertAdjacentElement("afterend", btn_stop);

                    const br = document.createElement('br');
                    btn_stop.insertAdjacentElement("afterend", br);

                    const playElem = document.querySelector(`#play${i}`);
                    const pauseElem = document.querySelector(`#pause${i}`);
                    const stopElem = document.querySelector(`#stop${i}`);

                    playElem.addEventListener('click', (event) => play(event, idTexto));
                    pauseElem.addEventListener('click', (event) => pause(event, idTexto));
                    stopElem.addEventListener('click', (event) => stop(event, idTexto));
                }

            } else {
                // const textos = document.querySelectorAll(`[id^="text"]`);
                // for(let texto of textos){
                //     texto.className = "btn2"

                // }
                const botones = document.querySelectorAll("button");
                for (var i = 0; i < botones.length; i++) {
                    let btnplay = document.getElementById(`play${i}`);
                    if (btnplay) btnplay.className = 'btn2';
                }
            }

            const play = (event, idTexto) => {
                if (idTextoMemoria != idTexto) {
                    synth.cancel();
                }
                let btnplay = document.getElementById(`play${idTexto.id}`);
                if (btnplay) btnplay.className = 'btn3';
                let btnpause = document.getElementById(`pause${idTexto.id}`);
                if (btnpause) btnpause.className = 'btn2';
                let btnstop = document.getElementById(`stop${idTexto.id}`);
                if (btnstop) btnstop.className = 'btn2';

                utterance = new SpeechSynthesisUtterance((idTexto).textContent);
                utterance.voice = speechSynthesis.getVoices()[0];
                synth.speak(utterance);

                if (synth.paused) {
                    synth.resume();
                }


                utterance.onend = function (event) {
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3';


                }

                idTextoMemoria = idTexto
            }

            const pause = (event, idTexto) => {
                if (synth.speaking && !synth.paused) {
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3';
                    synth.pause();
                }
            }

            const stop = (event, idTexto) => {
                if (synth.speaking) {
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3'; +
                        synth.cancel();
                }
            }

        }
    }

    function onClickDesactivar(event) {
        if (event.target.id == "desactivar") {
            document.getElementById("activar").style.display = "block";
            document.getElementById("desactivar").style.display = "none";
            synth.cancel();
            const botones = document.querySelectorAll("button");

            for (var i = 0; i < botones.length; i++) {
                let btnplay = document.getElementById(`play${i}`);
                if (btnplay) btnplay.className = 'btn3';
                let btnpause = document.getElementById(`pause${i}`);
                if (btnpause) btnpause.className = 'btn3';

                let btnstop = document.getElementById(`stop${i}`)
                if (btnstop) btnstop.className = 'btn3';
            }
        }
    }

    function onClickActivarSeleccion(event) {
        if (event.target.id == "activarSeleccion") {
            document.getElementById("activarSeleccion").style.display = "none";
            document.getElementById("desactivarSeleccion").style.display = "block";

            const btnplay = document.querySelector("#btn_play");
            const btnpause = document.querySelector("#btn_pause");
            const btnstop = document.querySelector("#btn_stop");
            
            if(event.target.id == "activarSeleccion" && getComputedStyle(desactivarSeleccion).display==="block") {
                console.log("Estoy activado");
                var synth = speechSynthesis;
                function speakText(text) {
                    var utterThis = new SpeechSynthesisUtterance(text);
                    utterThis.voice = synth.getVoices()[0];
                    speechSynthesis.speak(utterThis);
                }
        
                function getSelectionText() {
                    var text = "";
                    if (window.getSelection) {
                        text = window.getSelection().toString();
                    } else if (document.selection && document.selection.type !== "Control") {
                        text = document.selection.createRange().text;
                    }
                    return text;
                }
            
                document.onmouseup = function (event) {
                    setTimeout(() => {
                        const selectedText = getSelectionText();
                        if(selectedText.length) { 
                            const x = event.pageX;
                            const y = event.pageY;
                            const btnPlayWidth = Number(getComputedStyle(btnplay).width.slice(0,-2));
                            const btnPlayHeight = Number(getComputedStyle(btnplay).height.slice(0,-2));
                            const btnPauseWidth = Number(getComputedStyle(btnpause).width.slice(0,-2));
                            const btnPauseHeight = Number(getComputedStyle(btnpause).height.slice(0,-2));
                            const btnStopWidth = Number(getComputedStyle(btnstop).width.slice(0,-2));
                            const btnStopHeight = Number(getComputedStyle(btnstop).height.slice(0,-2));
                        
                            if(document.activeElement !== btnplay && document.activeElement !== btnpause && document.activeElement !== btnstop ) {
                                btnplay.style.left = `${x - btnPlayWidth*-0.8}px`;
                                btnplay.style.top = `${y - btnPlayHeight* 1.25}px`;
                                btnplay.style.display = "block";
                                btnplay.classList.add("btnEntrance");
                                
                                btnpause.style.left = `${x - btnPauseWidth*-0.8}px`;
                                btnpause.style.top = `${y - btnPauseHeight* 1.25}px`;
                                
                                btnstop.style.left = `${x - btnStopWidth*-0.8}px`;
                                btnstop.style.top = `${y - btnStopHeight* 1.25}px`;
                            }
                            else {
                                btnplay.style.left = `${x-btnPlayWidth*0.5}px`;
                                btnplay.style.top = `${y-btnPlayHeight*0.5}px`;
                                
                                btnpause.style.left = `${x-btnPauseWidth*0.8}px`;
                                btnpause.style.top = `${y-btnPauseHeight*0.5}px`;
                                
                                btnstop.style.left = `${x-btnStopWidth*-.4}px`;
                                btnstop.style.top = `${y-btnStopHeight*0.5}px`;
                            }
                        }    
                    }, 0);
                
        
                    btnplay.addEventListener("click", btnPlayClick);
                    btnpause.addEventListener("click", btnPauseClick);
                    btnstop.addEventListener("click", btnStopClick);
        
                    function btnPlayClick(event) {
                        var synth = speechSynthesis;
                        const selectedText = getSelectionText();
                        if (selectedText.length > 0) {
                        speakText(selectedText);
                        }  
                        if(synth.paused) {
                        synth.resume();
                        }
                    }
                                    
                    function btnPauseClick() {
                        var synth = speechSynthesis;
                        if(synth.speaking && !synth.paused){
                        synth.pause();
                        }
                    }
                                    
                    function btnStopClick() {
                        var synth = speechSynthesis;
                        if(synth.speaking){
                        synth.cancel();
                        }
                    }
        
                    document.ondblclick = function (e) {
                        btnplay.style.display = "none";
                        btnplay.classList.remove("btnEntrance");
                        window.getSelection().empty();
                    
                        btnpause.style.display = "none";
                        btnpause.classList.remove("btnEntrance");
            
                        btnstop.style.display = "none";
                        btnstop.classList.remove("btnEntrance");
                        speechSynthesis.cancel();
                    }
                }
            }
        
            else if (event.target.id == "desactivarSeleccion" && getComputedStyle(activarSeleccion).display==="block") {
                document.onmouseup = function (event) {
                }
                console.log("Estoy desactivado");
                btnplay.style.display = "none";
                btnplay.classList.remove("btnEntrance");
                window.getSelection().empty();
                
                btnpause.style.display = "none";
                btnpause.classList.remove("btnEntrance");
        
                btnstop.style.display = "none";
                btnstop.classList.remove("btnEntrance");
                speechSynthesis.cancel();
            }
        }
    }

    function onClickDesactivarSeleccion(event) {
        if (event.target.id == "desactivarSeleccion") {
            document.getElementById("activarSeleccion").style.display = "block";
            document.getElementById("desactivarSeleccion").style.display = "none";
        }
    }

    function onClickPlay(event) {
        if (event.target.id == "btn_play") {
            document.getElementById("btn_play").style.display = "none";
            document.getElementById("btn_pause").style.display = "block";
            document.getElementById("btn_stop").style.display = "block";
        }
    }

    function onClickPause(event) {
        if (event.target.id == "btn_pause") {
            document.getElementById("btn_play").style.display = "block";
            document.getElementById("btn_pause").style.display = "none";
            document.getElementById("btn_stop").style.display = "none";
        }
    }

    function onClickStop(event) {
        if (event.target.id == "btn_stop") {
            document.getElementById("btn_play").style.display = "block";
            document.getElementById("btn_pause").style.display = "none";
            document.getElementById("btn_stop").style.display = "none";
        }
    }
}();
