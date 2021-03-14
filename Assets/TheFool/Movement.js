#pragma strict
//Este codigo nao vai responder no pc caso nao seja setado o Pc como true;
static var trigg: boolean;
static var enable: boolean;
static var Boiando: boolean;
static var IntensidadePulo: float;
var VelocDeslocamento: float;
var Pulo: boolean;
var nPulos: int;
var maxPulos: int;
static var ContTocos: int;
var Pressed: boolean;
var CurPos: Vector3;
var EmissorDeSom: GameObject;
var Pc: boolean;
static var Vivo: boolean;
var SToco: AudioClip; var SPulo: AudioClip; var SSplash: AudioClip;
var SMoeda: AudioClip;
var SplashAgua: GameObject;
var ScoreSet: GameObject;
var anim: Animator;
anim=GetComponent("Animator");
static var moedas: int;
static var triggerContador: boolean;
var Cam: Transform;
Cam=GameObject.Find("Main Camera").GetComponent(Transform);


function Start () {

enable=true;

Vivo=true;
PlayerPrefs.SetInt("Pc", 1);
moedas=PlayerPrefs.GetInt("Moedas");
if(PlayerPrefs.GetInt("Pc")==1) { Pc=true;  } else { Pc=false; }
Pc=true;

ContTocos=0;
maxPulos=2;
NumerosContador.Atualiza();
}
function BeganC () {
nPulos++;
if(Vivo==true){	if(nPulos < 3) { 		   audio.clip = SPulo;		audio.Play();} }


}

function PressC () {
		if(nPulos <= 1) { 
			if(transform.position.y > 0.3f) {
			if(IntensidadePulo < 5f) { //para windows
			rigidbody2D.velocity = transform.up*3.8; }
					}}
			if(nPulos == 2) { //No Primeiro Pulo
			if(transform.position.y > 0.3f) {
			if(IntensidadePulo < 3f) { //para windows
					rigidbody2D.velocity = transform.up*3.8; }
				}}				
	
			IntensidadePulo=IntensidadePulo+10*Time.deltaTime;
}


function Update() {

		if(Pc==true) {
			if(Input.GetMouseButtonDown(0)) { BeganC(); CurPos=Input.mousePosition; }
			if(Input.GetMouseButton(0)) { PressC(); } else { IntensidadePulo = 0f; }
			}
			if(Pc==false) {
			if (Input.touchCount > 0) {
			if (Input.GetTouch(0).phase == TouchPhase.Began) { BeganC(); Pressed=true; }
			if (Input.GetTouch(0).phase == TouchPhase.Ended) { Pressed=false; }
			if(Pressed==true){   PressC();      } else {   IntensidadePulo = 0f;     } }
		}

if(Vivo == true) {
	if( Boiando == true ) { //Se estiver no toco
	transform.Translate(Vector3(-FisicaToco.VelocidadeToco*Time.deltaTime,0,0));
	anim.SetBool("Jumping",false);   anim.SetBool("Jumping2",false);   anim.SetBool("Falling",false);		
	}
	else { //Se nao estiver no toco
	transform.Translate(Vector3(CameraSrool.VelocidadeCam*Time.deltaTime,0,0));
	transform.Translate(Vector3(VelocDeslocamento*Time.deltaTime,0,0));

	if(transform.position.y < 0.5  ) { 
		if(Vivo==true) {morreu(); } } //Reinicia a fase caso Morra
//Animaçao-----------------------------------------------------------------------------------------------------------
 	if(nPulos != 2 && rigidbody2D.velocity.y > 0) { anim.SetBool("Jumping",true); } else { anim.SetBool("Jumping",false); }
	if(nPulos >= 2 && rigidbody2D.velocity.y > 0) { anim.SetBool("Jumping2",true); } else { anim.SetBool("Jumping2",false); }
	if(rigidbody2D.velocity.y < 0 ) { anim.SetBool("Falling",true); } else { anim.SetBool("Falling",false);  } 
	}
//------------------------------------------------------------------------------------------------------------------
}}
function LateUpdate() {

if(trigg==true) { Verifica();  }

}

function Verifica() { trigg=false; if(transform.position.x < Cam.position.x-8) { morreu();  }  }

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.tag == "Toco") {
	ContTocos++;
	Boiando = true;
	nPulos=0;
	if(Vivo==true) {
	audio.clip = SToco;
	NumerosContador.Atualiza();
	if (!audio.isPlaying){
		audio.Play(); } }
		rigidbody2D.velocity.x = 0;

anim.SetBool("Parado",true);
		
}
}

function OnCollisionExit2D ( coll: Collision2D ) {
	if(coll.gameObject.tag == "Toco") {
	Boiando = false; }
	rigidbody2D.velocity.x = 0;
anim.SetBool("Parado",false);


	   }
	   
	  
	   function OnCollisionStay2D (  ) {
	rigidbody2D.velocity.x = 0;
	IntensidadePulo = 0f;
		Boiando = true;
}
	
function OnTriggerEnter2D(other: Collider2D) {
			if(other.gameObject.tag == "Moeda") {
			moedas++;
			NumerosContador.Atualiza();
			NumerosMoeda.Atualiza();
			EmissorDeSom.audio.Stop();
			EmissorDeSom.audio.clip=SMoeda;
			EmissorDeSom.audio.Play();
		
			Destroy(other.gameObject); 	}}

function morreu() {

ScoreSet.SetActive(true);
Instantiate(SplashAgua, Vector3(transform.position.x, -0.65591, 1.032), Quaternion.Euler(270,0,0));
if(Vivo==true) { audio.clip = SSplash; if (!audio.isPlaying){ audio.Play(); } 
Vivo=false;
Score.trigg=true;
Score.Morreu=true;
Score.tocosDaVez=ContTocos; }
}


