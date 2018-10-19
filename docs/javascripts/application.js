// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function resize_bulletin_headers() {
	image_block_width = $('.image_bulletin img').outerWidth(true);
	header_width = Math.floor(($('.content_container').width() - 12) / image_block_width) * image_block_width;
	$('.bulletin_header').width(header_width - 52);
	
	var images_per_row = Math.floor(($('.content_container').width() - 12) / image_block_width);

  var image_bulletins = $('.image_bulletin');
  
  if (image_bulletins.length <= 1)
    return;
  
  var num_images = image_bulletins[0].childNodes.length - 2;
  
  if (Math.floor(num_images / images_per_row) == 0)
    return;
  
  var num_to_show = num_images - (num_images % images_per_row);

  
  for (var i = 0;i<image_bulletins.length;i++) {
    var childNodes = image_bulletins[i].childNodes;
    var imageNum = 0;
    for (var j=0;j<childNodes.length;j++) {
      var childNode = childNodes[j];
      if (childNode.tagName == "A") {
        if (imageNum >= num_to_show) {
          childNode.style.display = "none";
        } else {
          childNode.style.display = "inline";
        }
        imageNum += 1;
      }
    }
  }
}

function resize_next_img_tag() {
	image_block_width = $('.image_bulletin img').outerWidth(true);
	header_width = Math.floor(($('.content_container').width()) / image_block_width) * image_block_width;
	$('#next_img_tag').width(header_width - 52);		
}

function clip_sbs() {
  if ($('#sbs_container').length) {
    var jps_width = Math.floor($('.sbs_image_left')[0].width);
    var jps_height = $('.sbs_image_left')[0].height;
    var half_jps_width = Math.floor(jps_width / 2);
    var max_width = 1200;
    if (($(window).width() - 40) < max_width)
      max_width = $(window).width() - 40;
        
    if (jps_width > max_width) {
            
      var scale = max_width / jps_width;
      half_jps_width = Math.floor(half_jps_width * scale);
      jps_width = Math.floor(jps_width * scale);
      jps_height = Math.floor(jps_height * scale);

      $('.sbs_image_left').width(jps_width);
      $('.sbs_image_right').width(jps_width);
    }
      
      // $('.sbs_image_left')[0].style.clip = "rect(0px," + jps_width + "px," + jps_height + "px," + half_jps_width + "px)"    
      // $('.sbs_image_left')[0].style.position = "absolute";
      // $('.sbs_image_left')[0].style.left = "-" + (half_jps_width - 20) + "px";
      // 
      // 
      // $('.sbs_image_right')[0].style.clip = "rect(0px," + half_jps_width + "px," + jps_height + "px,0px)";
      // 
      // $('.sbs_image_right')[0].style.display = "inline";
      // $('.sbs_image_right')[0].style.left = (half_jps_width + 20) + "px";      
      // 
      // 
      // $('#sbs_container').height(jps_height);
    
    $('.sbs_image_left')[0].style.clip = "rect(0px," + jps_width + "px," + jps_height + "px," + half_jps_width + "px)"    
    $('.sbs_image_left')[0].style.position = "absolute";
    $('.sbs_image_left')[0].style.left = "-" + (half_jps_width - 20) + "px";
    $('.sbs_image_right')[0].style.clip = "rect(0px," + half_jps_width + "px," + jps_height + "px,0px)";
    $('.sbs_image_right')[0].style.display = "inline";
    $('.sbs_image_right')[0].style.left = (half_jps_width + 20) + "px";
    $('#sbs_container').height(jps_height);
  }
}

function showNSFWtip() {
	$("#nsfw_tip").fadeToggle();
}

$(window).resize(resize_bulletin_headers);
$(window).ready(resize_bulletin_headers);

$(window).resize(resize_next_img_tag);
$(window).ready(resize_next_img_tag);
$(window).load(clip_sbs);

$(document).ready(function($) {
	$('a#nsfw_tip_btn').click(showNSFWtip);
});

