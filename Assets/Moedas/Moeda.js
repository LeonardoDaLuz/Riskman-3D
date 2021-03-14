#pragma strict

static var trigg: boolean;
var init: float;

function Start () {
Destroy (gameObject, 9);

}

function LateUpdate () {
transform.Translate(Vector3(-FisicaToco.VelocidadeToco*Time.deltaTime,0,0));
}

