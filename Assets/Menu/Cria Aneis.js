#pragma strict
var anel: GameObject;
var tempo: int;
var Num: int;

function Start () {

}

function Update () {
tempo++;
print(tempo);
//anel.transform.localScale=anel.transform.localScale*(0.1*tempo);
if(tempo==20 && Num<5) {

//Instantiate(anel);
tempo=0;

Num++;

}

}