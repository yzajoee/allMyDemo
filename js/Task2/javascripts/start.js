var killerNum = $('#killerNum');
var normalNum = $('#normalNum');
var sum = $('#sum');
var play = $('#play');

//sum为游戏总人数的input对象
sum.blur(function() {
	/* Act on the event */
	//输入数字有误时提醒
	if ($(this).val() > 18 || $(this).val() < 3) {
		$('#sum_label').text('请输入6-18之间的数字');
	} else {
		$('#sum_label').text('');
	};


	//按游戏规则设置好推荐的杀手和水民人数
	if ($(this).val() >= 6 && $(this).val() < 9) {
		killerNum.val(1);
		normalNum.val($(this).val() - 1);
	} else if ($(this).val() >= 9 && $(this).val() < 12) {
		killerNum.val(2);
		normalNum.val($(this).val() - 2);
	} else if ($(this).val() >= 12 && $(this).val() < 16) {
		killerNum.val(3);
		normalNum.val($(this).val() - 3);
	} else if ($(this).val() >= 16 && $(this).val() <= 18) {
		killerNum.val(4);
		normalNum.val($(this).val() - 4);
	} else {
		$('#sum_label').text('请输入6-18之间的数字');
	};
	$('#killer_label').text('建议杀手人数:' + killerNum.val());
});

//保证水民人数加杀手人数等于设置的总人数
//killerNum是杀手人数Input对象，normalNum是水民人数Input对象
killerNum.blur(function() {
	/* Act on the event */
	if (sum.val() <= 18 && sum.val() >= 6) {
		normalNum.val(sum.val() - killerNum.val());
	};
	
});
normalNum.blur(function() {
	/* Act on the event */
	if (sum.val() <= 18 && sum.val() >= 6) {
		killerNum.val(sum.val() - normalNum.val());
	};
	
});

play.click(function() {
	/* Act on the event */
	if (sum.val() <= 18 && sum.val() >= 6) {
		localStorage.Game_killerNum = killerNum.val();
		localStorage.Game_normalNum = normalNum.val();
		location.href = "play.html";
	};
});
$(function(){
    $('.back').click(function() {
		/* Act on the event */
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