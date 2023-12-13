function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yk2zehX37/model.json', modelReady);

}

function modelReady()
{
    classifier.classify (gotResults);
}


function gotResults(error, results)  {
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+tandom_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('somPalma');
        img1 = document.getElementById('somEstalo');
        img2 = document.getElementById('somBatida');

        if (results[0].label == "palma") {
            img.src = 'applause-gif.gif';
            img1.src = 'estalo_gif.png';
            img2.src = 'batida.png';
        } else if (results[0].label == "estalo") {
            img.src = 'palmas.png';
            img1.src = 'giphy.gif';
            img2.src = 'batida.png';
        }else if (results[0].label == "batida de dedo na mesa") {
            img.src = 'palmas.png';
            img1.src = 'estalo_gif.png';
            img2.src = 'tenor.gif';
        }
    }

}
