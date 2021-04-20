//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
  var winScrollTop = $(this).scrollTop();
  var secondTop =  $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if(winScrollTop >= secondTop){
  $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
  $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
} else {//元に戻ったら
  $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
  $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
}

}

//クリックした際の動き
$('.scroll-top a').click(function () {
var elmHash = $(this).attr('href'); //hrefの内容を取得
if (elmHash == "#area-2") {//もし、リンク先のhref の後が#area-2の場合
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
}else{
  $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
}
  return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#header,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});

//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});

AOS.init();

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});


//logoの表示
$(window).on('load',function(){
	$("#splash").delay(2750).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
	responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
					slidesToShow: 2,//スライドを画面に2枚見せる
					slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
			}
	},
	{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
					slidesToShow: 1,//スライドを画面に1枚見せる
					slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
	}
]
});