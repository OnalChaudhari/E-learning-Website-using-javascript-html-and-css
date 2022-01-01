	
	Banners=new Array('H:/CPP/images/bg7.png','H:/CPP/images/bg2.png','H:/CPP/images/bg1.png','H:/CPP/images/bg3.png','H:/CPP/images/bg4.png');
	count=0;
	
	function rotate()
	{ 
		if(document.images)
	{ count++;
			if(count==Banners.length)
	{ count=0;
	}
	document.img1.src=Banners[count];
	setTimeout("rotate()",5000);
	}
	}
		
		 
	
	
	
	
	
	
	