#pragma strict
static var trigg: boolean;

var toco1: GameObject;
var toco2: GameObject;
var toco3: GameObject;
var Croco: GameObject;
var TocoRamdom: int;
var PosXRandom: float;
var CrocoRandom: float;
static var Tempo: float;
var TempoRandom: float;
var Cont: int;
var TocoRandom: int;
var MoedaRandomY: float;
var MoedaRandomX: float;
var Moeda: GameObject;
var CrocoPos: float;
var logui: String;

function Start () {

Cont=0;
}

function LateUpdate () {
if(trigg==true) { Verifica(); }

}

function Verifica() {
trigg=false;
if(Cont == 0 ) {
	TocoRandom=  Mathf.FloorToInt(Random.Range(1,3.4));
	TempoRandom= Random.Range(0.2,3.0);
	MoedaRandomY= Random.Range(0.5,4.5);
	MoedaRandomX= Random.Range(-2,2);
	CrocoRandom=Random.Range(0f,1f);
	CrocoPos=Random.Range(9f,12f);
	Tempo=0f;
	Cont=1;
	
	}
if( Tempo > TempoRandom ) {
Tempo=0;
Cont=0;
if(TocoRandom == 1) { Instantiate(toco1,Vector3(transform.position.x+9, 0, 1),transform.rotation); Instantiate(Moeda,Vector3(transform.position.x+9+MoedaRandomX, MoedaRandomY, 1),transform.rotation); }
if(TocoRandom == 2) { Instantiate(toco2,Vector3(transform.position.x+9, 0, 1),transform.rotation); Instantiate(Moeda,Vector3(transform.position.x+9+MoedaRandomX, MoedaRandomY, 1),transform.rotation); }
if(TocoRandom == 3) { Instantiate(toco3,Vector3(transform.position.x+9, 0, 1),transform.rotation); Instantiate(Moeda,Vector3(transform.position.x+9+MoedaRandomX, MoedaRandomY, 1),transform.rotation); }
logui="Esperando a sorte pelo Croco";
if(CrocoRandom<0.2f) {   Instantiate(Croco,Vector3(transform.position.x+CrocoPos, -0.05, 0.67959),transform.rotation);  }

}
}

function OnGUI () {
//  GUI.Label (Rect (5, 40, 800, 20), "Log:"+logui);

}