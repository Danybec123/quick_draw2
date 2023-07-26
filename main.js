function draw() {
    strokeWeight(10)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }

}
function classifycanvas1(){
   classifier.classify(canvas1, gotResults);
}
function gotResults(error, results){
   if(error){
     console.log(error);
   }
console.log(results);
document.getElementById('Span1').innerHTML='se parece a: '+results[0].label;
document.getElementById('span2').innerHTML='cuanto se parece: '+Math.round(results [0].confidence*100)+'%';
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
function preload() { classifier = ml5.imageClassifier('DoodleNet'); }
function setup(){
    canvas1=createCanvas(300,300);
    canvas1.center();
    canvas1.position(500,250);
    canvas1.mouseReleased(classifycanvas1);
    synth=window.speechSynthesis;
}
function clickc(){
    background("white");
}