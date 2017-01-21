var player = true;
var board = [[0,0,0],[0,0,0],[0,0,0]];
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function checkValue(term)
{
    if((board[0][0]== term && board[0][1]== term && board[0][2]==term)||
       (board[1][0]== term && board[1][1]== term && board[1][2]==term)||
       (board[2][0]== term && board[2][1]== term && board[2][2]==term)||
       (board[0][0]== term && board[1][0]== term && board[2][0]==term)||
       (board[0][1]== term && board[1][1]== term && board[2][1]==term)||
       (board[0][2]== term && board[1][2]== term && board[2][2]==term)||
       (board[0][3]== term && board[1][3]== term && board[2][3]==term)||
       (board[0][0]== term && board[1][1]== term && board[2][2]==term)||
       (board[0][2]== term && board[1][1]== term && board[2][0]==term)
      )
       {
            alert("player "+term+" wins")
            location.reload();
       }
}

function insertValue(x, y, term)
{
    x = Number(x);
    y = Number(y);
    if(board[x][y]==0)
    {
        board[x][y] = term;
        checkValue(term);
    }
}

function CanvasClicked(e)
{
    var objectName = e.target.id;
	var c = document.getElementById(objectName);
    var ctx = c.getContext("2d");
	if(player==true)
	{
		ctx.beginPath();
		ctx.arc(50,50,35,0,2*Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle="#80ff80";
		ctx.stroke();
		player = false;
		c.removeEventListener("click",CanvasClicked)
        insertValue(objectName[5],objectName[6],1);
	}
	else
	{
		ctx.moveTo(10,10);
		ctx.lineTo(90,90);
		ctx.stroke();
		ctx.moveTo(10,90);
		ctx.lineTo(90,10);
        ctx.lineWidth = 15;
        ctx.strokeStyle="#ffff80";
		ctx.stroke();
		player = true;
		c.removeEventListener("click",CanvasClicked)    
        insertValue(objectName[5],objectName[6],2);
	}
}


for(var i=0;i<3;i++)
{
    for (var j = 0; j < 3; j++)
	{
		var temp = "block"+i+j;
		document.getElementById(temp).addEventListener("click", CanvasClicked, false);
	}
}



