var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blockImgObjct=Img;

        blockImgObjct.scaleToWidth(700);
        blockImgObjct.scaleToHeight(510);
        blockImgObjct.set({
        top:0,
        left:0
        });
        canvas.add(blockImgObjct);
    })
    }
	
function playSound(){
	x.play();
}
