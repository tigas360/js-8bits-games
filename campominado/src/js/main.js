import { Canvas } from '../modules/canvas.js';

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);

    myCanvas.reset();
    myCanvas.create( );
    //myCanvas.createReportList( );

    
    /**
     * create grid
     */
    let gridX = 10;
    let gridY = 5;
    let rndField = [];


    for( let i=0; i < gridX; i++ )
    {
        let temp = [];
        for( let j=0; j < gridY; j++ )
        {
            temp.push( Math.trunc( Math.random() * 5 ) );
        }

        rndField.push( [] );
        rndField[i].push( temp )
    }

    console.log( rndField );

    //draw the grid
    let wb= 10;
    let hb= 10;
    let nextX = 2;
    let nextY = 2;

    let posX = 15;
    let posY = 15;
    let spaceBetween = 5;

    for(let y=0; y < gridY; y++ )
    {
        nextY = y * ( hb + spaceBetween ) + posY; 
        for(let x=0; x < gridX; x++ )
        {
            nextX = x * (wb+spaceBetween) + posX;
            myCanvas.box(nextX,nextY,wb,hb);
        }
    }

    // draw text over a box to revel what it is.
    let textX=1;
    let textY=1;

    textX = 3 * ( ( wb /2 ) + spaceBetween )  + posX; 
    textY = 3 * ( ( hb /2 ) + spaceBetween )  + posY;
    myCanvas.drawText( 3, textX, textY);

    //registra evento onclick
    myCanvas.getInstance().addEventListener('click', function (event) { 
        console.log(" clicked..." );
        console.log(" page x " + event.pageX );
        console.log(" page y " + event.pageY );
        let column = Math.floor( event.pageX / ( gridX + hb + spaceBetween) );
        let row    = Math.floor( event.pageY / gridY );

        console.log( 'row: ' + row + ' \n col: ' + column);
    });

//draw system