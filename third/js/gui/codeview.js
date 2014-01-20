var cview = new CodeViewer();

$(window).resize(function(){cview.updateCanvasSize();});

function CodeViewer(){
	
}



CodeViewer.prototype.updateCanvasSize = function(){
    c_width = $('#canvasContainer').width();
    c_height = $('#canvasContainer').height();
    $('canvas').attr('width',c_width);
    $('canvas').attr('height',c_height);
    //console.info(c_width+'x'+c_height);
}

CodeViewer.prototype.updateGUI = function(){

    var canvas_container = document.getElementById('canvasContainer');
    
    //1. Create DOM Elements
	var buttons = document.createElement('div');
    buttons.id = 'buttons';
    
    
    var buttons_canvas = document.createElement('div');
    buttons_canvas.id = 'buttonsCanvas';
    
    buttons.appendChild(buttons_canvas);
    
	var bottom = document.getElementById('bottom');
    
    
    canvas_container.style.width    = '100%';
    bottom.style.display			= 'block';

   
    //3. Assembling GUI
    $('#canvasContainer').before(buttons);
    //4. Look and Feel
	$('#buttonsCanvas').buttonset();
	
    
    //5. Show Canvas
    this.updateCanvasSize();
	
	$('#canvasContainer, #bottom').fadeIn(600);
	
}


CodeViewer.prototype.run = function(m,nc)
{
   
	this.updateGUI();
}

CodeViewer.prototype.execute = function(){
	
	
	
	
	
}


