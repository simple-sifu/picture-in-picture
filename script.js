const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass that to video element, then play
async function selectMediaStream() {
    try {

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error) {
        // Catch Error Here
        console.log('whoops, error here:', error) 
    }
}

// OnLoad
selectMediaStream();