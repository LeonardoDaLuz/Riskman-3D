#pragma strict
var menuPos: int;
var StartPos: Vector3;
var SelectStagePosition: Vector3;
var SelectCharacterPosition: Vector3;
var LoadingPos: Vector3;
var hit: RaycastHit;
var posinit: Vector2;
var posfinal: Vector2;
var pc: boolean;
var input: String;
var ray: Ray;
var stage: int;
function Start () {
menuPos=0;
StartPos=Vector3(0,-0.005939007,-0.4481254);
SelectStagePosition=Vector3(0.138686,0.07628155,-8.431626);
SelectCharacterPosition=Vector3(1.680677,0.07628155,-3.468603);
LoadingPos=Vector3(0.08718538,18.8895,-19.2476);
PlayerPrefs.SetInt("Pc",1);
if(PlayerPrefs.GetInt("Pc")==1) { print("Verifcando PC ou Android");
pc=true;

} else {
pc=false;

}

pc=true;
}

function Update () {

if(pc==true){
	if(Input.GetMouseButtonDown(0)) { input="clicou"; posinit=Input.mousePosition; posfinal=Vector2(0,0); }
	if(Input.GetMouseButtonUp(0)) { input="soltou"; posfinal=Input.mousePosition; Soltou(); }
	if(Input.GetMouseButton(0)) { input="Apertado"; }
	if(Input.GetMouseButtonDown(1)) { input="clicouDIreito"; posinit=Input.mousePosition; posfinal=Vector2(0,0); rigidbody2D.velocity.y=0.1; }
	if(Input.GetKeyDown(KeyCode.Space)) { 	Time.timeScale = 0.00000f; }       //pausa o jogo para tirar fotos                 
	
	
}
else {
if (Input.touchCount > 0) {
			if (Input.GetTouch(0).phase == TouchPhase.Began) { input="clicou"; posinit=Input.mousePosition; posfinal=Vector2(0,0); }
			if (Input.GetTouch(0).phase == TouchPhase.Ended) { input="soltou"; posfinal=Input.mousePosition; Soltou(); }
}
}


if(menuPos==0) {
transform.localRotation.eulerAngles=Vector3.Lerp(transform.localRotation.eulerAngles, Vector3(0,0,0),2f*Time.deltaTime);
transform.position=Vector3.Lerp(transform.position,StartPos,2f*Time.deltaTime);


}
if(menuPos==1) {
transform.localRotation.eulerAngles=Vector3.Lerp(transform.localRotation.eulerAngles, Vector3(0,90,0),2f*Time.deltaTime);
transform.position=Vector3.Lerp(transform.position,SelectCharacterPosition,2f*Time.deltaTime);


}
if(menuPos==2) {

transform.localRotation.eulerAngles=Vector3.Lerp(transform.localRotation.eulerAngles, Vector3(0,90,0),2f*Time.deltaTime);
transform.position=Vector3.Lerp(transform.position,SelectStagePosition,2f*Time.deltaTime);


}

if(menuPos==3) {

transform.localRotation.eulerAngles=Vector3(0,90,0);
transform.position=LoadingPos;
Application.LoadLevel(1);


}






}


function Soltou() { print("Soltou()");

print(Camera.mainCamera.ScreenToWorldPoint(posfinal));
ray = Camera.main.ScreenPointToRay (posfinal); //mira um raio para a posiçao onde touchei e manda pra var ray

 if(Physics.Raycast(ray,hit,1000)){ //atira o raio, e armazena em hit quem colidiu com ele.
  if(hit.collider.name == "play"){ //se hit colider com gameObject igual a este objeto.
menuPos=1;
}
}
 if(Physics.Raycast(ray,hit,1000)){ //atira o raio, e armazena em hit quem colidiu com ele.
  if(hit.collider.name == "Back"){ //se hit colider com gameObject igual a este objeto.
menuPos=0;
}}

 if(Physics.Raycast(ray,hit,1000)){ //atira o raio, e armazena em hit quem colidiu com ele.
  if(hit.collider.name == "Next"){ //se hit colider com gameObject igual a este objeto.
menuPos=2;
print("Colidiu");
}}

 if(Physics.Raycast(ray,hit,1000)){ //atira o raio, e armazena em hit quem colidiu com ele.
  if(hit.collider.name == "Back2"){ //se hit colider com gameObject igual a este objeto.
menuPos=1;
print("Colidiu");
}}

 if(Physics.Raycast(ray,hit,1000)){ //atira o raio, e armazena em hit quem colidiu com ele.
  if(hit.collider.name == "Stage1"){ //se hit colider com gameObject igual a este objeto.
menuPos=3;
stage=1;
print("Colidiu");
}}



}