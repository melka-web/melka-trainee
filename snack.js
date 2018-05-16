  function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }

    $('.button').on('click', function submit(){
	 	 
 		 $('.inputs').css('border-color', 'red');
	});
    function toggleSidebar() {
	document.getElementById('sidebar').classList.toggle('active');
	}

	(function() {

	var img = document.getElementById('train').firstChild;
	img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
   		}
	};

	}());

	
function topFunction() { 
    document.documentElement.scrollTop = 2500; 
}

