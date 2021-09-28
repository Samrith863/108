function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vUy1sPpVY/model.json', modelReady);
}

function modelReady(){
    console.log("Model Ready");
  classifier.classify( gotResults);
}
function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    randomRed=Math.floor(Math.random()*255)+1;
    randomGreen=Math.floor(Math.random()*255)+1;
    randomBlue=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-"+results[0].confidence;
    document.getElementById("result_label").style.color="rgb("+randomRed+","+randomGreen+","+randomBlue+")";
    document.getElementById("result_confidence").style.color="rgb("+randomRed+","+randomGreen+","+randomBlue+")";

    img1=document.getElementById("alien1");
    img2=document.getElementById("alien2");
    img3=document.getElementById("alien3");
    img4=document.getElementById("alien4");

    if(results[0].label=="bell"){
      img1.src="aliens-01.gif";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }

    else if(results[0].label=="clap"){
      img1.src="aliens-01.png";
      img2.src="aliens-02.gif";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }

    else if(results[0].label=="shake"){
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.gif";
      img4.src="aliens-04.png";
    }

    else if(results[0].label=="whistle"){
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.gif";
    }

    else{
      img1.src="android.gif";
      img2.src="android.gif";
      img3.src="android.gif";
      img4.src="android.gif";
    }
  }
}
