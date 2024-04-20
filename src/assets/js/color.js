$(function() {
$('#options').css('left','94%');
  
  /*
	function drag_start(event) {
	    var style = window.getComputedStyle(event.target, null);
		  event.dataTransfer.effectAllowed = "copyMove";
	    event.dataTransfer.setData("text/plain",
	    (parseInt(style.getPropertyValue("right"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
	} 
	function drag_over(event) {
	    event.preventDefault(); 
	    return false; 
	} 
	function drop(event) { 
	    var offset = event.dataTransfer.getData("text/plain").split(',');
	    var dm = document.getElementById('options');
	    dm.style.right = (event.clientX - parseInt(offset[0],10)) + 'px';
	    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
		  event.dataTransfer.dropEffect = "copy";
	    event.preventDefault();
	    return false;
	} 
	var dm = document.getElementById('options'); 
	dm.addEventListener('dragstart',drag_start,false); 
	document.body.addEventListener('dragover',drag_over,false); 
	document.body.addEventListener('drop',drop,false); 
	
	*/
  
  $('.draggable').draggable({
    start:function() {
      $(this).css('-webkit-transition','all 0');
    }
  });
  
	function colorToHex(color) {
	    if (color.substr(0, 1) === '#') {
	        return color;
	    }
	    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

	    var red = parseInt(digits[2]);
	    var green = parseInt(digits[3]);
	    var blue = parseInt(digits[4]);

	    var rgb = blue | (green << 8) | (red << 16);
	    return digits[1] + '#' + rgb.toString(16);
	};
  
  function getContrast(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/1.15) ? '#333':'white';
  }
  
  var keyisdown = false;

  $('body').bind('keydown',function(e){
      var keycode = 16;
      if (e.which === keycode) {
            keyisdown = true;
      }
  }).bind('keyup',function(){
      keyisdown = false;
  });
	
	$('input').on('click', function() {
		$(this).focus().select();
	});
  
  $('#options ul').click(function() {
		return false;
	});
	
	$('#swatches .square').each(function(index) {
		var count = $(this).index() + 1;
		var bg_color = $(this).css('background');
		var hex_code = colorToHex(bg_color);
		$(".color-input li:nth-child("+count+") input").val(hex_code);
	});
	
	$('.color-input').click(function() {
		return false;
	});
	
	$('.color-input input').hover(function() {
		var li_index = $(this).parent().index() - 1;
		$('#swatches li').eq(li_index).append('<span class="check"></span>');
	}, function() {
		$('.check').hide(750);
	});
	
	$('.color-input input').keyup(function (e) {
	    if (e.keyCode == 13) {
			var new_color = $(this).val();
			var li_index = $(this).parent().index() - 1;
			$('#swatches li').eq(li_index).css('background', ''+new_color+'');
	    }
	});
	
	var hex_val = "";
	var current_color = "";
	var peer_colors_on = false;
  
	$('.square').on('click', function() {
    $('#size-options').addClass('hidden-top');
    hex_val = colorToHex($(this).css('background'));
		var index_val = $('#swatches li').index($(this));
    if(!$(this).hasClass('check')) {
      $(this).append('<span class="check"></span>');
    }
    if(keyisdown) {
      $('.quick-input').append('<div class="appended-quick-input"><label class="">'+index_val+': </label><input type="text" value="'+hex_val+'" class="ap"/></div>');
    }
    else {
      //$('.check').hide(1000);
      $('.appended-quick-input').remove();
		  if(peer_colors_on == true) {
			  $(this).addClass('color-peer-selected');
		  }
		  else if(peer_colors_on == false) {
		  	current_color = $(this);
        $('.check').fadeOut(750);
        $(this).append('<span class="check"></span>');
			  $('.color-input').addClass('hidden-top');
			  $('.quick-input').removeClass('hidden-top');
			  $('.quick-input').children('div').children('label').html(index_val+':');
		    $('.quick-input input').val(hex_val).focus().select();
			  $('#choose-options').removeClass('hidden-left');
			  $('.choose-options-icon:nth-child(2)').removeClass('shuffle-icon-active').addClass('shuffle-icon');
			  $('.choose-options-icon:nth-child(3)').removeClass('peers-icon-active').addClass('peers-icon');
		  }
    }
	});
  
  $('.quick-input').on('click', function() {
    return false;
  });
	
	$('.quick-input input').keyup(function (e) {
	    if (e.keyCode == 13) {
      var new_color = $('.quick-input input').val();
			$('.quick-input').addClass('hidden-top');
			current_color.css('background', ''+new_color+'');
      $('.check').hide();
	    }
	});
  
	$('#options').click(function() {
    peer_colors_on = false;
		$('.quick-input').addClass('hidden-top');
		$('#choose-options').toggleClass('hidden-left');
		$('.color-input').addClass('hidden-top');
    $('#size-options').addClass('hidden-top');
    $('.check').hide(3000);
	});

	$('.choose-options-icon:nth-child(1)').click(function() {
    peer_colors_on = false;
		$('.quick-input').addClass('hidden-top');
		$('.color-input').toggleClass('hidden-top');
    $('#size-options').addClass('hidden-top');
		$('.choose-options-icon:nth-child(2)').removeClass('shuffle-icon-active').addClass('shuffle-icon');
		$('.choose-options-icon:nth-child(3)').removeClass('peers-icon-active').addClass('peers-icon');
		return false;
	});

	$('.choose-options-icon:nth-child(2)').click(function() {
    peer_colors_on = false;
		$('#swatches').randomize(".square");
		$('.quick-input').addClass('hidden-top');
		$('.color-input').addClass('hidden-top');
    $('#size-options').addClass('hidden-top');
		$('.choose-options-icon:nth-child(3)').removeClass('peers-icon-active').addClass('peers-icon');
		$(this).removeClass('shuffle-icon').addClass('shuffle-icon-active');
		return false;
	});

	$('.choose-options-icon:nth-child(3)').click(function() {
		if(peer_colors_on == true) {
			$('.square').removeClass('color-peer-selected');
			$(this).removeClass('peers-icon-active').addClass('peers-icon');	
			peer_colors_on = false;
		}
		else {
			peer_colors_on = true;
			$('.quick-input').addClass('hidden-top');
			$('.color-input').addClass('hidden-top');
			$('.choose-options-icon:nth-child(2)').removeClass('shuffle-icon-active').addClass('shuffle-icon');
      $('#size-options').addClass('hidden-top');
			$(this).removeClass('peers-icon').addClass('peers-icon-active');
		}
		return false;
	});
  
  $('.choose-options-icon:nth-child(4)').click(function() {
    peer_colors_on = false;
    $('.quick-input').addClass('hidden-top');
	  $('.color-input').addClass('hidden-top');
    $('.choose-options-icon:nth-child(2)').removeClass('shuffle-icon-active').addClass('shuffle-icon');
		$('.choose-options-icon:nth-child(3)').removeClass('peers-icon-active').addClass('peers-icon');
    $('#size-options').removeClass('hidden-top');
		return false;
	});
  
  $('.size-options-icon').click(function() {
    var column_request = $(this).attr('class');
    if(column_request == "size-options-icon six-col") {
      $('.square').css('width','16.666666667%');
    }
    else if(column_request == "size-options-icon five-col") {
      $('.square').css('width','20%');
    }
    else if(column_request == "size-options-icon four-col") {
      $('.square').css('width','25%');
    }
    else if(column_request == "size-options-icon three-col") {
      $('.square').css('width','33.3333333333%');
    }
    else if(column_request == "size-options-icon two-col") {
      $('.square').css('width','50%');
    }
    return false;
  });
	
	$('.square').hover(function() {
		var bg_color = $(this).css('background');
		var hex_code = colorToHex(bg_color);
    var cleansed_val = hex_code.replace("#", "");
    var color_val = getContrast(cleansed_val);
    $(this).before('<span class="abs-hex" style="color: '+color_val+'">'+hex_code+'</span>');
	}, function() {
		$('.abs-hex').hide();
	});
});

(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.remove(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);