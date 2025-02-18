let boton = document.querySelector('#boton-cambio');
let video = document.querySelector('#video1');
const arrayVideos = ['videos/video1.mp4', 'videos/video2.mp4', 'videos/video3.mp4'];

boton.addEventListener('click', ()=>{
    let src = video.getAttribute('src');
    switch(src){
        case 'videos/video1.mp4':
        video.setAttribute('src', arrayVideos[1]);
        break;
        case 'videos/video2.mp4':
            video.setAttribute('src', arrayVideos[2]);
            break;
        case 'videos/video3.mp4':
        video.setAttribute('src', arrayVideos[0]);
        break;
    }
});