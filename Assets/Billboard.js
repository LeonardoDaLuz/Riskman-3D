#pragma strict
var CamLook: Transform;
var Dir: Quaternion;


function Start () {

}

function LateUpdate () {
Dir=Quaternion.LookRotation(transform.position-CamLook.position);
print(Dir);
transform.rotation.y=Dir.y;


}