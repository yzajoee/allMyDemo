function changeColor() {
	var suduku = document.getElementById('suduku');
	var box = suduku.getElementsByTagName('div');
	var i = Math.random() * box.length >> 0;
	var color = Math.random() * 3 >> 0;
	if (color == 0) {
		color = "蓝色";
		box[i].style.backgroundColor = "blue";

	} else
	if (color == 1) {
		color = "绿色";
		box[i].style.backgroundColor = "green";
	} else
	if (color == 2) {
		color = "红色";
		box[i].style.backgroundColor = "red";
	} else {
		alert("出错了");
		console.log("i=" + i + "," + color + " = " + color);
	}
	i++;
	console.log("格子" + i + "变成" + color)
};
window.onload=function(){
	var AInterval = setInterval(changeColor, 1000);
}
