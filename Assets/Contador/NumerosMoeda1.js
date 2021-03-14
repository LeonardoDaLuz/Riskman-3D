#pragma strict

static var numero: String;
static var anim: Animator;
 anim=GetComponent("Animator");



static function Atualiza() {

numero=Movement.moedas.ToString();
if(numero.Length>1) {
if(numero[1] == "0" ) { anim.SetBool("0",true); } else { anim.SetBool("0",false); }
if(numero[1] == "1" ) { anim.SetBool("1",true); } else { anim.SetBool("1",false); }
if(numero[1] == "2" ) { anim.SetBool("2",true); } else { anim.SetBool("2",false); }
if(numero[1] == "3" ) { anim.SetBool("3",true); } else { anim.SetBool("3",false); }
if(numero[1] == "4" ) { anim.SetBool("4",true); } else { anim.SetBool("4",false); }
if(numero[1] == "5" ) { anim.SetBool("5",true); } else { anim.SetBool("5",false); }
if(numero[1] == "6" ) { anim.SetBool("6",true); } else { anim.SetBool("6",false); }
if(numero[1] == "7" ) { anim.SetBool("7",true); } else { anim.SetBool("7",false); }
if(numero[1] == "8" ) { anim.SetBool("8",true); } else { anim.SetBool("8",false); }
if(numero[1] == "9" ) { anim.SetBool("9",true); } else { anim.SetBool("9",false); }
if(numero[1] == "" ) { anim.SetBool("none",true); } else { anim.SetBool("none",false); }

NumerosMoeda2.Atualiza();
}}