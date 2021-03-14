#pragma strict
var Boiando: boolean;
static var VelocidadeToco: float;
var Pulou: boolean;

function Start () {

Destroy (gameObject, 10);
VelocidadeToco=1.2f;
Pulou=false;
}

function LateUpdate () {
if(Boiando == false) {
if(transform.position.y < 0 ) {
rigidbody2D.velocity = transform.up*0.2;
}
if(rigidbody2D.velocity.y > 0.2) {
rigidbody2D.velocity = transform.up*0.2;
}
}
else {
if(transform.position.y < 0.0) {
rigidbody2D.velocity = transform.up*1.4;
} else {
if(transform.position.y > 0.03 && rigidbody2D.velocity.y >0.5f) {
rigidbody2D.velocity = transform.up*0.2;
}
}}

transform.Translate(Vector3(-VelocidadeToco*Time.deltaTime,0,0));


}
	

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.tag == "Player") {
	Boiando = true;
if(Pulou == false) {
	  Pulou=true;
	 }
	}

	if(coll.gameObject.tag == "Toco") {
Destroy(coll.gameObject);
	}

	
}


function OnCollisionExit2D ( coll: Collision2D ) {
	if(coll.gameObject.tag == "Player") {
	Boiando = false;
}
}

