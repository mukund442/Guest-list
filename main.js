var name_of_the_peoples=[];

function submit(){
    var guest_name=document.getElementById("names").value;
    name_of_the_peoples.push(guest_name);
    console.log(guest_name);
    console.log(name_of_the_peoples);
    var length_of_names=name_of_the_peoples.length;
    console.log(length_of_names);
    document.getElementById("name_with_commas").innerHTML=name_of_the_peoples.toString();
}

function show(){
    var i= name_of_the_peoples.join("<br>");
	console.log(name_of_the_peoples);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sortButton").style.display="inline-block";
    document.getElementById("sort_div").style.display="inline-block";
}

function sorting(){
    name_of_the_peoples.sort();
    var i= name_of_the_peoples.join("<br>");
	console.log(name_of_the_peoples);
    document.getElementById("sort_div").innerHTML=i.toString();
}
function Search()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<name_of_the_peoples.length; j++)
		{
			if(s==name_of_the_peoples.length[j]){
				var found=found+1;
			}	
		}

	document.getElementById("p2").innerHTML="name found "+found+" times/s";
	console.log("name found "+found+" times/s");
}
