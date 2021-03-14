#pragma strict
static var trigg: boolean;
static var VelocidadeCam: float;
static var PosX: float;

var teste: String;
function Start () {
VelocidadeCam=1.5;

}

function Update () {


transform.Translate(Vector3(VelocidadeCam*Time.deltaTime,0,0));
}

