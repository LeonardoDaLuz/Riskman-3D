#pragma strict
var Tempo: float;
static var Morreu: boolean;
var Logy: String;
var ray: Ray;
var Cam: Camera;
var hit:RaycastHit;
static var record: int;
static var tocosDaVez: int;
var resetador: GameObject;
var NumerosContador : GameObject;
NumerosContador = GameObject.Find("NumerosSprite");
var CamAudio : GameObject;
CamAudio = GameObject.Find("Main Camera");
var Play: GameObject;
var Stop: GameObject;
var RedSeta: GameObject;
var Recorde: GameObject;
var Recorde1: GameObject;
var Recorde2: GameObject;
var Began: int;
var Ended: int;
var CurPos: Vector3;
var Pc: boolean;

static var trigg: boolean;

function Start () {

record=PlayerPrefs.GetInt("recorde");
Morreu= false;
if(PlayerPrefs.GetInt("Pc")==1) { Pc=true;  } else { Pc=false; }

}

function Update () {
if(trigg==true) { Tempo=Tempo+1*Time.deltaTime; Movement.IntensidadePulo=10;  if(Tempo>2f) { atualiza(); Cam.audio.volume=0.5; }  
         }
if(Morreu == true) {
if(Pc==true) {
if(Input.GetMouseButtonDown(0)) { CurPos=Input.mousePosition; Atiraraio (); }
}
if(Pc==false) {
if (Input.touchCount > 0) {
if (Input.GetTouch(0).phase == TouchPhase.Began) {  CurPos=Input.GetTouch(0).position; Atiraraio (); }
}
}
}
}

function Atiraraio () {
ray = Cam.ScreenPointToRay(CurPos); //mira um raio para a posiçao onde touchei e manda pra var ray
print(ray);
if(Physics.Raycast(ray,hit,1000)){
 Logy="Raycastou";
 if(hit.collider.gameObject.name == "PlayS"){
  Instantiate(resetador,transform.position, transform.rotation);
 }
 if(hit.collider.gameObject.name == "StopS"){
	Application.Quit(); }
 CurPos=Vector3(0,0,0);
 Began=0;
}}

function atualiza() {
PlayerPrefs.SetInt("Moedas", Movement.moedas);
renderer.enabled=true;
Stop.renderer.enabled=true;

Play.renderer.enabled=true;
Recorde.renderer.enabled=true;
Recorde1.renderer.enabled=true;
Recorde2.renderer.enabled=true;
Destroy(GameObject.Find("SplashAgua(Clone)"));
NumerosContador.transform.localPosition=Vector3(0.74448,1.3981,3.9179);
if(record<tocosDaVez) {  
PlayerPrefs.SetInt("recorde",tocosDaVez);
    record=tocosDaVez;               }
NumerosRecorde0.trigg=true;
NumerosRecorde1.trigg=true;
NumerosRecorde2.trigg=true;
Tempo=0;
trigg=false; }


function Reseta() {
renderer.enabled=false;
Stop.renderer.enabled=false;

Play.renderer.enabled=false;
Recorde.renderer.enabled=false;
Recorde1.renderer.enabled=false;
Recorde2.renderer.enabled=false;
Destroy(GameObject.Find("SplashAgua(Clone)"));
NumerosContador.transform.localPosition=Vector3(0,1.3863,3.9179);  }
