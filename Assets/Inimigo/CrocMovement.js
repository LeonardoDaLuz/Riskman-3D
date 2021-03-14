#pragma strict
static var Cont: int;
function Start () {
Cont++;
Destroy(gameObject, 5);
if(Cont>1) { Destroy(gameObject); }
}

function LateUpdate () {
transform.Translate(Vector3(-3.0f*Time.deltaTime,0,0));
}
function OnDestroy () {
Cont--;
}


