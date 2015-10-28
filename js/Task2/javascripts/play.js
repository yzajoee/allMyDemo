var func = {
	turn: function() {
		// 卡片翻转并注册单击覆盖效果，同时根据判断并修改卡片序号和身份等的内容
		$('#card,#cardBack,#btn-1').unbind("click");
		$('#playerNo').text(No);
		$('#playerNoBack').text(No);
		func.judge();
		$('#card').removeClass('front').addClass('cover');
		$('#cardBack').removeClass('cover').addClass('rotate').click(func.turnBack);
		//拍完牌还给法官
		if (No < sum) {
			No++;
			$('#btn-1').text('隐藏并传递给' + No + '号').one('click', func.turnBack);
		} else {
			$('#card,#cardBack,#btn-1').unbind("click");
			$('#btn-1').text('传回给法官并开始游戏')
		};
		return this;
	},
	turnBack: function() {
		$('#playerNo').text(No);
		$('#card,#cardBack,#btn-1').unbind("click");
		$('#card').removeClass('cover').addClass('front').click(func.turn);
		$('#cardBack').removeClass('rotate').addClass('cover');
		$('#btn-1').text('查看' + No + '号身份').click(func.turn);
		return this;
	},
	//生成不重复随机数并存在arrTemp数组中
	generateRandom: function(count) {
		var rand = parseInt(Math.random() * count + 1);
		for (var i = 0; i < arrTemp.length; i++) {
			if (arrTemp[i] == rand) {
				return false;
			}
		}
		arrTemp.push(rand);
	},
	//遍历随机数组，判断杀手和水民
	judge: function() {
		$('#identify').text('你的身份是水民！');
		for (var i = 0; i < arrTemp.length; i++) {
			if (arrTemp[i] == No) {
				$('#identify').text('你的身份是杀手！！')
				break;
			}
		};
		return this;
	},
	alertf: function() {
		alert('aaa');
	}
};

$(function() {
	var killerNum = localStorage.Game_killerNum;
	var normalNum = localStorage.Game_normalNum;
	console.log('killerNum:' + killerNum + ' normalNum:' + normalNum);
	window.sum = parseInt(killerNum) + parseInt(normalNum);
	window.No = 1;
	window.arrTemp = new Array();
	//根据杀手数量生成和杀手数量相等的随机数（随机数都在总人数范围内），随机数的数值就是杀手的序号
	for (var i = 0;; i++) {
		if (arrTemp.length < killerNum) {
			func.generateRandom(sum);
		} else {
			break;
		}
	}
	console.log(arrTemp);
	//开始派发卡牌
	$('#card,#btn-1').click(func.turn);
	$('#back').click(function() {
		/* Act on the event */
		location.href = "start.html";
	});
	//控件
	$('.back').click(function() {
		/* Act on the event */
		console.log('click');
		window.history.go(-1);
	});
	$('.close').click(function() {
		/* Act on the event */
		$('.closebg,.closewin').show();
		$('.cancel').click(function() {
			$('.closebg,.closewin').hide();
		});
		$('.confirm').click(function() {
			if (navigator.userAgent.indexOf('Firefox')){
				//火狐和谷歌有时候用不了window.close，只能用这个东东，因为谷歌测试可以用就没加
				window.open("about:blank","_self").close();
			}else{
                window.close();
			};
		});
	});
});