function update_para(){
	var b_R = document.getElementById("border_r").value;
	var b_G = document.getElementById("border_g").value;
	var b_B = document.getElementById("border_b").value;
	var b_w = document.getElementById("border_width").value;
	var bg_r = document.getElementById("bg_r").value;
	var bg_g = document.getElementById("bg_g").value;
	var bg_b = document.getElementById("bg_b").value;
	
	var sample_para = document.getElementById("sample_para");
	sample_para.style.borderColor = `rgb(${b_R}, ${b_G}, ${b_B})`;
	sample_para.style.borderWidth = b_w;
	sample_para.style.backgroundColor = `rgb(${bg_r}, ${bg_g}, ${bg_b})`;
}

function validate_passwords(){
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;

	if (pass1.length < 8){
		alert("Password must be 8 characters or longer.");
		return false;
	}
	else if (pass1 != pass2){
		alert("Passwords do not match.");
		return false;
	}
	else {
		alert("Passwords validated.");
	}


}
