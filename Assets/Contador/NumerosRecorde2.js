#pragma strict
static var trigg: boolean;
var numero: String;
var anim: Animator;
anim=GetComponent("Animator");




function Update () {

if(trigg==true) {

if(Score.Morreu == true) {

numero=Score.record.ToString();

if(numero[2] == "0" ) { anim.SetBool("0",true); } else { anim.SetBool("0",false); }
if(numero[2] == "1" ) { anim.SetBool("1",true); } else { anim.SetBool("1",false); }
if(numero[2] == "2" ) { anim.SetBool("2",true); } else { anim.SetBool("2",false); }
if(numero[2] == "3" ) { anim.SetBool("3",true);  } else { anim.SetBool("3",false); }
if(numero[2] == "4" ) { anim.SetBool("4",true); } else { anim.SetBool("4",false); }
if(numero[2] == "5" ) { anim.SetBool("5",true); } else { anim.SetBool("5",false); }
if(numero[2] == "6" ) { anim.SetBool("6",true); } else { anim.SetBool("6",false); }
if(numero[2] == "7" ) { anim.SetBool("7",true); } else { anim.SetBool("7",false); }
if(numero[2] == "8" ) { anim.SetBool("8",true); } else { anim.SetBool("8",false); }
if(numero[2] == "9" ) { anim.SetBool("9",true); } else { anim.SetBool("9",false); }
if(numero[2] == "" ) { anim.SetBool("none",true); } else { anim.SetBool("none",false); }

}
trigg=false;
}



}