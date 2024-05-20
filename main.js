function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const tileList = document.querySelectorAll('.key');

function tilePLay() {
    for (let i = 0; i < tileList.length; i++) {
        const tile = tileList[i];
        const instrument = tile.classList[1];
        const idAudio = `#sound_${instrument}`;
        tile.onclick = function() {
            playSound(idAudio);
        };
    }
}

tilePLay();