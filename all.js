//定位
$("#nav .dropdownmenu ul li").click(function() {
	$("#nav .fl .fll .city_show").text($(this).find("span").text())
});

//img-close
$("#top_img span").click(function() {
	$("#top_img").css("display", "none");
})

$(".fll").hover(function() {
	$(".dropdownmenu").show();
	$(".fll").css({
		"background-color": "white",
		"border": "1px solid #999",
		"border-bottom": "none",
	})
}, function() {
	$(".dropdownmenu").hide();
	$(".fll").css({
		"background-color": "#e3e4e5",
		"border": "1px solid #e3e4e5",
	})
})
$(".dropdownmenu").hover(function() {
	$(".dropdownmenu").show();
	$(".fll").css({
		"background-color": "white",
		"border": "1px solid #999",
		"border-bottom": "none",
	})
}, function() {
	$(".dropdownmenu").hide();
	$(".fll").css({
		"background-color": "#e3e4e5",
		"border": "1px solid #e3e4e5",
	})
})
//我的京东
$(".myjd").hover(function() {
	$(".myjd-menu").show();
}, function() {
	$(".myjd-menu").hide();
})
//客户服务
$(".service").hover(function() {
	$(".service-menu").show();
}, function() {
	$(".service-menu").hide();
})
//网站导航
$(".wzdh").hover(function() {
	$(".wzdh-menu").show();
}, function() {
	$(".wzdh-menu").hide();
})
//大表
$(".allkind ul li").hover(function() {
	$(this).next().show();
}, function() {
	$(this).next().hide();
})
$(".allkind .lalala").hover(function() {
	$(".allkind .lalala").show();
}, function() {
	$(".allkind .lalala").hide();
})
//购物车
$("#header .ShoppingCart").hover(function() {
	$("#header .ShoppingCart_menu").show();
}, function() {
	$("#header .ShoppingCart_menu").hide();
})
$("#header .ShoppingCart_menu").hover(function() {
	$("#header .ShoppingCart_menu").show();
}, function() {
	$("#header .ShoppingCart_menu").hide();
})
//酒店游戏菜单
$("#service_entry .menumm").hover(function() {
	$("#service_entry #service_entry_menu").show();
})
$("#service_entry #service_entry_menu").hover(function() {
	$("#service_entry #service_entry_menu").show();

}, function() {
	$("#service_entry #service_entry_menu").hide();
})
$("#service_entry #service_entry_menu .entry_menu11 li").hover(function() {
	$(this).next().show();
}, function() {
	$(this).next().hide();
})
$("#service_entry #service_entry_menu .entry_menu11 li").next().hover(function() {
	$(this).show();
})
//侧面固定栏
$("#right_fixed_1 i").hover(function() {
	$(this).prev().show();
}, function() {
	$(this).prev().hide();
})
$("#right_fixed_2 i").hover(function() {
	$(this).prev().show();
}, function() {
	$(this).prev().hide();
})
//顶部固定栏
var height;

function scrolltop() {
	height = $(window).height() + $(document).scrollTop();
	if(height > 1000) {
		$("#header_fixed").show();
	} else {
		$("#header_fixed").hide();
	}
};
$(document).scroll(function() {
	scrolltop();
})

$("#right_fixed_2 #top_goback").click(function() {
	$(document).scrollTop(0)
})
//登录  注册
$("#login,.login").click(function() {
	location.href = "../第二阶段/ZhiYouQuestions/www/login.html"
})
$("#register,.register").click(function() {
	location.href = "../第二阶段/ZhiYouQuestions/www/register.html"
})
//手机京东
$(".fr .phonejd").hover(function() {
	$(".fr .phonejd_menu").show()
}, function() {
	$(".fr .phonejd_menu").hide()
})
$(".fr .phonejd_menu").hover(function() {
	$(".fr .phonejd_menu").show()
}, function() {
	$(".fr .phonejd_menu").hide()
})

//倒计时
var seconds = $(".pro_hd_time .seconds").text();
var minutes = $(".pro_hd_time .minutes").text();
var hours = $(".pro_hd_time .hours").text();

function timeCount() {
	if(seconds > 0) {
		seconds--
		seconds = seconds
		seconds = seconds < 10 ? "0" + seconds : seconds;
		$(".pro_hd_time .seconds").text(seconds);
	}
	if(seconds <= 0 && minutes > 0) {
		seconds = seconds + 60
		minutes--
		minutes = minutes
		minutes = minutes < 10 ? "0" + minutes : minutes;
		$(".pro_hd_time .minutes").text(minutes);
	}
	if(seconds <= 0 && minutes <= 0 && hours > 0) {
		minutes = minutes + 60
		hours--
		hours = hours
		hours = hours < 10 ? "0" + hours : hours;
		$(".pro_hd_time .hours").text(hours);
	}
}
setInterval(timeCount, 1000)

$(".cuxiao").hover(function() {
	$(".news-list").show();
	$(".news-list2").hide();
})
$(".gonggao").hover(function() {
	$(".news-list2").show();
	$(".news-list").hide();
})

$(".pro_images").hover(function() {
	$(this).find("img").addClass("jump");
}, function() {
	$(this).find("img").removeClass("jump");
})