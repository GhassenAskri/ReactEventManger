import * as FaceRecgonation from'face-api.js'



export const ExperssionDetectionOnVideo = () => {
Promise.all([
    FaceRecgonation.nets.tinyFaceDetector.loadFromUri('/FaceRecgnitionModels'),
    FaceRecgonation.nets.faceLandmark68Net.loadFromUri('/FaceRecgnitionModels'),
    FaceRecgonation.nets.faceRecognitionNet.loadFromUri('/FaceRecgnitionModels'),
    FaceRecgonation.nets.faceExpressionNet.loadFromUri('/FaceRecgnitionModels')
 ]).then(StartVideo)
const video = document.getElementById('video');
console.log(video);


StartVideo()



function StartVideo (){
    var constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream)=> {video.srcObject = stream;})
    .catch((err)=> console.error(err))
}
// video.addEventListener('play',() =>{
//     setInterval( async ()=>{
//         const detections= await FaceRecgonation.detectAllFaces(
//             video,
//             new FaceRecgonation.TinyFaceDetectorOptions() ) 
//             .withFaceLandmarks()
//             .withFaceExpressions();
//             console.log(detections)
//     })
// })

}
