#pragma strict
var fixo: int;
var normal: int;
var pretexto: float;
function Start () {
pretexto=2;
}

function Update () {
if(normal>0) {
pretexto=pretexto*1.000001235654f;



}
normal++;
}
function FixedUpdate () {
fixo++;


}