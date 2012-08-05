$(document).ready(function(){
	var totWidth=0;
	var positions = new Array();
	$('#slides .slide').each(function(i){		
		positions[i]= totWidth;
		totWidth += $(this).width();
		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
		});
		$('#slides').width(totWidth);
		$('#menu ul li a').click(function(e,keepScroll){
		$('li.menuItem').removeClass('act').addClass('inact');
		$(this).parent().addClass('act');
		var pos = $(this).parent().prevAll('.menuItem').length;
		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
		e.preventDefault();
		if(!keepScroll) clearInterval(itvl);
		});
		$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
		var current=1;
		function autoAdvance()
			{
			if(current==-1) return false;
			$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
			current++;
			}
		var changeEvery = 10;
		var itvl = setInterval(function(){autoAdvance()},changeEvery*1000);
		});