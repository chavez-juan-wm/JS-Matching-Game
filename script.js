function generateFace()
{
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");

    for(var i = 1; i <= numberOfFaces; i++)
    {
        var img = document.createElement('img');
        img.src = 'images/vaultBoy.png';
        img.height = 100;
        img.width = 100;

        theLeftSide.appendChild(img).style.left = (Math.random() * 380) + "px";
        theLeftSide.appendChild(img).style.top = (Math.random() * 400) + "px";

        var cln = theLeftSide.cloneNode(true);
        theRightSide.appendChild(cln);
    }
    theRightSide.removeChild(theRightSide.lastChild);
}