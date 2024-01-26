class Canvas {
    constructor (id, parent, width, height)
    {
        this.id      = id;
        this.listId  = null;
        this.parent  = parent;
        this.width   = width;
        this.height  = height;
        this.ctx     = null;
        this.bgColor = "rgb(100 ,150,200)";
        this.canvasObj;
    }

    reset( )
    {
        delete this.ctx;
    }

    create( ) 
    {
        if( this.ctx !== null && this.ctx instanceof HTMLCanvasElement )
        {
            console.log('Canvas already created!!!');
            return;
        }
        else
        {
            let divWrapper = document.createElement('div');
            divWrapper.id = this.id;
            this.canvasObj = document.createElement('canvas');
            this.parent.appendChild( divWrapper );
            
            divWrapper.appendChild( this.canvasObj );

            // add to html
            document.body.appendChild(divWrapper);

            this.ctx = this.canvasObj.getContext('2d');
            this.ctx.clearRect(1,1,this.width,this.height);

            // warp para objeto canvas na tela
            

            this.fillBgColor( this.bgColor );
            console.log("Canvas loaded...");
        }
    }

    createReportList() 
    {
        if(this.listId !== null) {
          console.log('Report list already created!');
          return;
        } else {
          let list = document.createElement('ul');
          list.id = this.id + '-reporter';
    
          let canvasWrapper = document.getElementById(this.id);
          canvasWrapper.appendChild(list);
    
          this.listId = list.id;
        }
    }

    fillBgColor( color )
    {
        this.ctx.fillStyle = color || this.bgColor;
        this.ctx.fillRect(1,1,this.width,this.height);
    }

    box( x,y,w,h, bgColor, borderColor )
    {
        this.ctx.beginPath();
        this.ctx.fillStyle = bgColor || "silver";
        this.ctx.fillRect(x,y,w,h);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = borderColor || "green";
        this.ctx.strokeRect(x,y,w,h);
    }

    drawText(text, x,y, size_px, color) 
    {
        this.ctx.font = (size_px || 12) + "px serif";
        this.ctx.fillStyle = color || "black";
        this.ctx.fillText(text, x,y);
    }

    getInstance( )
    {
        return this.canvasObj;
    }
}

export { Canvas }