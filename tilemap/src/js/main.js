/**
 * Convert this game to threejs
 * https://threejs.org/manual/#en/fundamentals
 */
import { Canvas } from '../modules/canvas.js';

const screen_width = 240;
const screen_heigh = 256;

let rightPressed = false;
let leftPressed = false;

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, screen_width, screen_heigh );

    myCanvas.reset();
    myCanvas.create( );
    //myCanvas.createReportList( );

    
    /**
     * create grid
     */
    let mapper = [];
    let stage1 = [
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1]];

        let gridX = stage1[0].length;
        let gridY = stage1.length;

    //draw the stage 1
    let wb= Math.floor(240/10);
    let hb= Math.floor(256/10);
    let nextX = 1;
    let nextY = 1;

    let posX = 1;
    let posY = 1;
    let spaceBetween = 5;

    //pontuações
    let score = 0;

    //console.log( "matrix: y/x " + gridY + "/" + gridX );
    //console.table( stage1 );

    for(let y=0; y < gridY; y++ )
    {
        nextY = y * hb + posY;
      //  console.info("linha:" + nextY);

        for(let x=0; x < gridX; x++ )
        {
            nextX = x * wb + posX;
           
            if( stage1[y][x] == 1 )
            {
                myCanvas.box(nextX,nextY,wb,hb);
                //console.log(stage1[y][x]);
            }
        }
    }

    // draw text over a box to revel what it is.
    let textX=10;
    let textY=1;

    textX = 40; 
    textY = 20;
    myCanvas.drawText( "Score: " + score, textX, textY);

    //registra evento onclick
    myCanvas.getInstance().addEventListener('click', function (event) { 
        console.log(" clicked..." );
        console.log(" page x " + event.pageX );
        console.log(" page y " + event.pageY );
    });

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup',   keyUpHandler,   false);
    
    function keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = true;
          console.log( "keydown-right pressed");
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = true;
          console.log( "keydown-left pressed");
        }
      }
      
      function keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = false;
        }
      }

//draw system