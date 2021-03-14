#pragma strict
static var trigg: boolean;
var SSplash: AudioClip;
var SCroc: AudioClip;
var TheFool: Transform;
TheFool= GameObject.Find("TheFoolStop").transform;
var anim: Animator;
anim=GetComponent("Animator");
var SplashAguaCroco: GameObject;
var Reinstantiate: float;
static var atacou: boolean;
static var crocs: boolean;
var Obj: GameObject;



function Start () {
atacou=false;
audio.clip = SCroc; audio.Play();
}

function LateUpdate () {
if(trigg==true) { Verifica (); }
if(atacou==true) {
Reinstantiate=Reinstantiate+Time.deltaTime;
if(Reinstantiate>0.3f) {
//print("SegundoSplash");

Obj=Instantiate(SplashAguaCroco,Vector3(transform.position.x-1, -0.5, 0), Quaternion.Euler(270,0,0));
Destroy(Obj,1);
Destroy(this);
}}}
function Verifica () {
if(atacou==false) {
trigg=false;
if(transform.position.x<TheFool.position.x+2) {
anim.SetBool("Atacando",true);

atacou=true;
crocs=true;
audio.clip = SSplash; audio.Play();
//print("Slashaguacroco");
Obj=Instantiate(SplashAguaCroco,Vector3(transform.position.x-1, -0.5, 0.67959), Quaternion.Euler(270,0,0));
//print("Slashaguacroco2");
Destroy(Obj,1);
}
}
}
