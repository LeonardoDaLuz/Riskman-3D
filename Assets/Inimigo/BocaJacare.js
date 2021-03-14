#pragma strict
var TheFool: GameObject;
TheFool=GameObject.Find("TheFoolStop");
var Movement: Movement;
Movement=TheFool.GetComponent("Movement");
var ColisorTheFool : BoxCollider2D;
	ColisorTheFool = TheFool.GetComponent(BoxCollider2D);
var matou: boolean;
var FisicaToco: FisicaToco;
function OnTriggerEnter2D(other: Collider2D) {
if(other.gameObject.name == "TheFoolStop") {
matou=true;
TheFool.rigidbody2D.velocity.y = -2;
TheFool.rigidbody2D.velocity.x = -2;
ColisorTheFool.enabled=false;
Movement.IntensidadePulo = 10;
Movement.morreu();
}
			
			
if(other.gameObject.tag == "Toco") {
//print("Destriutoco");
FisicaToco=other.gameObject.GetComponent("FisicaToco");
FisicaToco.Boiando=false;
					 	}
}
