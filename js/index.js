
//点击span 关闭广告图
$(".ad_span").click(function(){
	$(".ad").css("display","none");
	
});




//鼠标移入移出 展开和隐藏地理位置
$(".beijing").mousemove(function(){
	$(".item_class").css("display","block");
});

$(".beijing").mouseleave(function(){
	$(".item_class").css("display","none");
});