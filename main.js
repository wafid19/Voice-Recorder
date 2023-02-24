let input = document.getElementById("input");

let microphon = document.getElementById("microphon");

let SpeechRecognation = window.SpeechRecognation || window.webkitSpeechRecognition ;

if(SpeechRecognation){
    let recogination = new webkitSpeechRecognition();

    microphon.addEventListener('click', function(){
        recogination.start();
    });

    recogination.addEventListener('result', function(e){
        let tran = e.results[0][0].transcript;

        input.value=tran;
    })
}