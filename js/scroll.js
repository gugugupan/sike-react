/* js/scroll.js */

// Using for callback duration
var getWindowHeight = function() {
	return window.innerHeight ;
}

var getWindowHeightForMoveLeft = function() {
	return window.innerHeight / 2 ;
}

var controller = new ScrollMagic.Controller() ;

// Scroll Magic for hiding title
var scene_hiding = new ScrollMagic.Scene( { 
	triggerElement: "#intro-section" ,
	triggerHook: "onLeave" ,
	duration: getWindowHeight
} ).setTween( "#dark-gradient-hover" , { opacity: 1 } )
// .addIndicators()
.addTo( controller ) ;

// Scroll Magic for iphone move to left
var tween_iphone_move = TweenMax.fromTo( "#scroll-iphone" , 1 ,
	{ css: { x: "100%" } } ,
	{ css: { x: "0%" } }
) ;
var scene_move_iphone = new ScrollMagic.Scene( {
	triggerElement: "#intro-section" ,
	triggerHook: "onLeave" ,
	duration: getWindowHeight
} ).setTween( tween_iphone_move )
// .addIndicators()
.addTo( controller ) ;

// Scroll Magic for pin iPhone
var scene_pin_iphone = new ScrollMagic.Scene( {
	triggerElement: "#native" ,
	triggerHook: "onLeave" ,
	duration: getWindowHeight
} ).setPin( "#scroll-iphone" )
// .addIndicators()
.addTo( controller ) ;

// Scroll Magic for text
var TEXT_ID_LIST = [ "#text1" , "#text2" ] ;
var TEXT_TRIGGER_ID_LIST = [ "#native" , "#touch" ] ;
for ( var i = 0 ; i < 2 ; i ++ ) {
	var text_id = TEXT_ID_LIST[ i ] ,
		text_trigger_id = TEXT_TRIGGER_ID_LIST[ i ] ;
	var tween_text = new TimelineMax().add( TweenMax.to( text_id , 0 , { opacity: 0 } ) )
	.add( TweenMax.to( text_id , 1 , { opacity: 0 } ) ) 
	.add( TweenMax.to( text_id , 3 , { opacity: 1 } ) )
	.add( TweenMax.to( text_id , 4 , { opacity: 1 } ) )
	.add( TweenMax.to( text_id , 3 , { opacity: 0 } ) )
	.add( TweenMax.to( text_id , 1 , { opacity: 0 } ) ) ;

	var scene_text = new ScrollMagic.Scene( {
		triggerElement: text_trigger_id ,
		triggerHook: "onCenter" ,
		duration: getWindowHeight
	} ).setTween( tween_text )
	// .addIndicators()
	.addTo( controller ) ;
}

// Scroll Magic for Android
var scene_android_appear = new ScrollMagic.Scene( {
	triggerElement: "#touch" ,
	triggerHook: "onCenter"
} ).setTween( "#android-robot" , 0.3 , { opacity: 1 } )
// .addIndicators()
.addTo( controller ) ;

var tween_android_fly_out = new TimelineMax()
.add( TweenMax.to( "#android-robot" , 0 , { opacity: 1 } ) )
.add( TweenMax.to( "#android-robot" , 10 , { scale: "20%" } ) )
.add( TweenMax.to( "#android-robot" , 0 , { opacity: 0 } ) ) ;

var scene_android_move = new ScrollMagic.Scene( {
	triggerElement: "#android-text" ,
	triggerHook: "onEnter" ,
	duration: 70
} ).setTween( tween_android_fly_out )
// .addIndicators() 
.addTo( controller ) ;

var scene_android_background = new ScrollMagic.Scene( {
	triggerElement: "#android-text-trigger" ,
	triggerHook: "onEnter"
} ).setTween( "body" , 0 , { "background-color" : "#00ad00" } )
// .addIndicators() 
.addTo( controller ) ;
