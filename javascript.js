var vloume_btn = document.getElementById("volume-btn");
vloume_btn.onclick = function() {
    var input_value = document.getElementById("input-text").value;
    //now we call api object here onclick
    var utterance = new SpeechSynthesisUtterance(input_value);
    speechSynthesis.speak(utterance);
    // var input_value = document.getElementById("input-text").value = "";
}