// JavaScript Document

function doit()
{
	alert("Welcome！");
}

function HideFi()
{
	document.getElementById("fi").style.display = "none";
	document.getElementById("addbtn").style.display = "block";
}

function addModule()
{
	x = document.getElementById("fi");				
	x.style.display = "inline-block";
	if(x.style.display != "none" && y.style.display != "none")			
		document.getElementById("addbtn").style.display = "none";
}
