window.addEventListener('load', () => {
    
    // const keys = document.querySelectorAll('.key');
    // console.log(keys);

    window.addEventListener('keydown', (e) =>{
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.white[data-key="${e.keyCode}"]`);
        console.log(audio, key)

        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }

        // key.setAttribute('active', 'active');

    });

  
});