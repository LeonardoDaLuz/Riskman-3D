#pragma strict
var n: int;
static var numero: String;
static var anim: Animator;
anim=GetComponent("Animator");


static function Atualiza () {

numero=Movement.ContTocos.ToString();

if(Movement.Vivo==true) { 
if(numero.Length>0) {
if(numero[0] == "0" ) { anim.SetBool("0",true); } else { anim.SetBool("0",false); }
if(numero[0] == "1" ) { anim.SetBool("1",true); } else { anim.SetBool("1",false); }
if(numero[0] == "2" ) { anim.SetBool("2",true); } else { anim.SetBool("2",false); }
if(numero[0] == "3" ) { anim.SetBool("3",true); } else { anim.SetBool("3",false); }
if(numero[0] == "4" ) { anim.SetBool("4",true); } else { anim.SetBool("4",false); }
if(numero[0] == "5" ) { anim.SetBool("5",true); } else { anim.SetBool("5",false); }
if(numero[0] == "6" ) { anim.SetBool("6",true); } else { anim.SetBool("6",false); }
if(numero[0] == "7" ) { anim.SetBool("7",true); } else { anim.SetBool("7",false); }
if(numero[0] == "8" ) { anim.SetBool("8",true); } else { anim.SetBool("8",false); }
if(numero[0] == "9" ) { anim.SetBool("9",true); } else { anim.SetBool("9",false); }
if(numero[0] == "" ) { anim.SetBool("none",true); } else { anim.SetBool("none",false); }

NumerosContador1.Atualiza();
NumerosMoeda.Atualiza();
}}


}