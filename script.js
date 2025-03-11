function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let r = parseInt(document.getElementById("radius").value);
	let ans = document.getElementById("volume")
    if(r>0 && !isNaN(r)){
		let v = (4/3 * Math.PI * Math.pow(r,3)).toFixed(4);
		ans.value = v;
	}
	else{
		ans.value ="NaN";
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
