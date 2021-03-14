#pragma strict
var tmpo: float;
var tmpo3: float;
var fps:float;
var frameset:float;
var Tempo:float;

function Start () {
tmpo=1;
fps=60;
}

function LateUpdate () {
Tempo=Tempo+Time.deltaTime;
if(Tempo>1) {
fps=Time.frameCount-frameset;
frameset=Time.frameCount;
Movement.trigg=true;
Tempo=0;
}

tmpo3=tmpo3+Time.deltaTime;


if(tmpo3>0.20) {
tmpo3=0f;
CriadordeTocos.Tempo+=0.20f;
CriadordeTocos.trigg=true;
CorpoJacare.trigg=true;




}



}
function OnGUI () {
 GUI.Label (Rect (250, 10, 800, 20), "Fps:"+fps);

}