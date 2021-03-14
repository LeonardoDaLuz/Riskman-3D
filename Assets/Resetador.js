#pragma strict
static var trigg=true;

var Tempo: float;
var TheFool: GameObject;
TheFool=GameObject.Find("TheFoolStop");
var Movement: Movement;
var SplashAgua: GameObject;


Movement=GameObject.Find("TheFoolStop").GetComponent("Movement"); 
var TheFoolCollider: BoxCollider2D;
TheFoolCollider = TheFool.GetComponent(BoxCollider2D);
var Cam: GameObject;
Cam=GameObject.Find("Main Camera");

var Score: GameObject;
Score=GameObject.Find("Score");


var ScoreS: Score;
ScoreS=GameObject.Find("Score").GetComponent("Score"); 

var NumerosContador1: NumerosContador1;
NumerosContador1=GameObject.Find("NumerosSprite1").GetComponent("NumerosContador1"); 

var NumerosContador2: NumerosContador2;
NumerosContador2=GameObject.Find("NumerosSprite2").GetComponent("NumerosContador2"); 

var Toco: GameObject;
var TodosOsTocos : GameObject[];
var i: int;

function Start () {

trigg=true;

Score.SetActive(false);

TodosOsTocos = GameObject.FindGameObjectsWithTag("Toco"); 
print(TodosOsTocos.length);
for(i=0;i<TodosOsTocos.length;i++) {
Destroy(TodosOsTocos[i]);   
     }
TodosOsTocos = GameObject.FindGameObjectsWithTag("Moeda"); 
print(TodosOsTocos.length);
for(i=0;i<TodosOsTocos.length;i++) {
Destroy(TodosOsTocos[i]);   
     }
     
TodosOsTocos = GameObject.FindGameObjectsWithTag("Jacare"); 
print(TodosOsTocos.length);
for(i=0;i<TodosOsTocos.length;i++) {
Destroy(TodosOsTocos[i]);   
     }
TodosOsTocos = GameObject.FindGameObjectsWithTag("SplashAgua"); 
print(TodosOsTocos.length);
for(i=0;i<TodosOsTocos.length;i++) {
Destroy(TodosOsTocos[i]);   
     }
     Cam.audio.volume=1;
}

function Update () {
Tempo=Tempo+Time.deltaTime;

if(trigg==true) {

Movement.anim.SetBool("Jumping",false);
Movement.anim.SetBool("Falling",false);
//
Cam.transform.position.x=0;
TheFool.transform.position.x=0.58348;
TheFool.transform.position.y=1.1;
Movement.ContTocos=0;

Movement.Vivo=true;
NumerosContador1.Atualiza();
NumerosContador2.Atualiza();
NumerosContador1.anim.SetBool("none",true);
NumerosContador1.anim.SetBool("0",false);
NumerosContador1.anim.SetBool("1",false);
NumerosContador1.anim.SetBool("2",false);
NumerosContador1.anim.SetBool("3",false);
NumerosContador1.anim.SetBool("4",false);
NumerosContador1.anim.SetBool("5",false);
NumerosContador1.anim.SetBool("6",false);
NumerosContador1.anim.SetBool("7",false);
NumerosContador1.anim.SetBool("8",false);
NumerosContador1.anim.SetBool("9",false);
NumerosContador2.anim.SetBool("none",true);
NumerosContador2.anim.SetBool("0",false);
NumerosContador2.anim.SetBool("1",false);
NumerosContador2.anim.SetBool("2",false);
NumerosContador2.anim.SetBool("3",false);
NumerosContador2.anim.SetBool("4",false);
NumerosContador2.anim.SetBool("5",false);
NumerosContador2.anim.SetBool("6",false);
NumerosContador2.anim.SetBool("7",false);
NumerosContador2.anim.SetBool("8",false);
NumerosContador2.anim.SetBool("9",false);

TheFool.rigidbody2D.velocity = transform.up*0;
ScoreS.Reseta();
ScoreS.Morreu=false;
 Instantiate(Toco,Vector3(0.6,0,1), transform.rotation);
  Instantiate(Toco,Vector3(2.6,0,1), transform.rotation);
   Instantiate(Toco,Vector3(6.6,0,1), transform.rotation);
trigg=false;
TheFoolCollider.enabled=true;
Destroy(SplashAgua);
}
if(Tempo<0.025) { 
Movement.IntensidadePulo=10;

}
if(Tempo>0.025) {  Destroy(gameObject); }

}
