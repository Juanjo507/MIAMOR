function mostrarCarta(){

    document.getElementById("carta").style.display="flex";
    document.getElementById("video").style.display="flex";
    document.getElementById("galeria").style.display="flex";
    document.getElementById("final").style.display="flex";

    document.getElementById("carta").scrollIntoView({
        behavior:"smooth"
    });

}

function lluvia(){

    for(let i=0;i<180;i++){

        setTimeout(function(){

            let corazon=document.createElement("div");

            corazon.className="corazon";

            corazon.innerHTML="💖";

            corazon.style.left=Math.random()*100+"vw";

            corazon.style.fontSize=(18+Math.random()*35)+"px";

            corazon.style.animationDuration=(4+Math.random()*5)+"s";

            document.body.appendChild(corazon);

            setTimeout(function(){

                corazon.remove();

            },9000);

        },i*40);

    }

}
