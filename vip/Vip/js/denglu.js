//用户名验证
function checkName() {
	//1)定义正则表达式
	//2）获取邮箱文本框  value值
	//3)测试
	var nameVal = document.getElementById("user_name").value;
	var nameTs = document.getElementById("name_ts");
	var nameZZ = /^\w+@[a-zA-Z0-9]+\.com$/;
	
	if(nameZZ.test(nameVal) == true) {
		nameTs.innerHTML = "";
		return true;
	} else if(nameVal == '') {
		nameTs.innerHTML = "*请输入登录名";
	} else {
		nameTs.innerHTML = "*用户名错误";
		nameVal == '';
	}

}

function checkPass() {
	var passVal = document.getElementById("user_pass").value;
	var passZZ = /^\w{6,}$/;
	var passTs = document.getElementById("pass_ts");
	
	if(passZZ.test(passVal) == true) {
		passTs.innerHTML = "";
		return true;
	} else if(passVal == '') {
		passTs.innerHTML = "*请输入密码";
	} else {
		passTs.innerHTML = "*密码错误";
		passVal == '';
	}

}
//总验证
function checkAll() {
	//判断邮箱合法，昵称合法，确认密码合法
	// if(邮箱合法 且  昵称合法  且确认密码合法 )

	if(checkName() == true && checkPass() == true) {
		console.log("注册成功，跳转页面");
		return true;

	} else {
		console.log("注册失败，重新输入");
		return false;

	}

}
$("#J_more_third_control").click(function() {
	if($(".third_wrap").css("display") == "none") {

		$(".third_wrap").slideDown(1000);

	} else {

		$(".third_wrap").slideUp(1000);

	}
	
})