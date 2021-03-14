#pragma strict
var Cam: Camera;
var ray: Ray;
var hit:RaycastHit;
var Began: int;
var Ended: int;
var Pressed: int;
var PressedTouch: int;
var CurPos: Vector3;
var Pc: boolean = false;



function Start () {
if(PlayerPrefs.GetInt("Pc")==1) { Pc=true;  } else { Pc=false; }
}

function Update () {

if(Pc==true) {
if(Input.GetMouseButton(0)) { Pressed=1; } else { Pressed=0; }
if(Input.GetMouseButtonDown(0)) { Began=1; CurPos=Input.mousePosition; } else { Began=0; }
if(Input.GetMouseButtonUp(0)) { Ended=1; } else { Ended=0; }
print(CurPos);

}
if(Pc==false) {
if (Input.touchCount > 0) {
if (Input.GetTouch(0).phase == TouchPhase.Began) { Began=1; Pressed=1; CurPos=Input.GetTouch(0).position; } else { Began=0; }
if (Input.GetTouch(0).phase == TouchPhase.Ended) { Ended=1; Pressed=0; } else { Ended=0; }

}
}





if(Began==1) {
ray = Cam.ScreenPointToRay (Input.mousePosition); //mira um raio para a posiçao onde touchei e manda pra var ray
//var hit recebe o raycast hit, ou seja, objeto q levou o raio.
print(ray);
 if(Physics.Raycast(ray,hit,10000)){ //atira o raio, e armazena em hit quem colidiu com ele.
   print("play");
   
  if(hit.collider.gameObject.name == "Play"){ //se hit colider com gameObject igual a este objeto.
  Application.LoadLevel(1);

  
}
  if(hit.collider.gameObject.name == "Quit"){ //se hit colider com gameObject igual a este objeto.
  Application.Quit();
  
}
}
}
}