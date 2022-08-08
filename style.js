let display = document.getElementById("cover");
let btn = Array.from(document.getElementsByClassName("text"));

btn.map(text => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case "C" : 
            cover.innerText = "";
            break;
            case "⇚" :
                if(cover.innerText){
                    cover.innerText = cover.innerText.slice(0,-1);
                }
                break;
            case "=" :
                try{
                    cover.innerText = eval(cover.innertext);
                }
                catch{
                    cover.innerText = "Error!";
                }
                default:
                    cover.innerText += e.target.innerText;
        }

    })
})