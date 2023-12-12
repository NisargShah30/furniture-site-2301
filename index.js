// 1 js code //
function mynav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navgiastion");
    bar.onclick = () =>{
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
        }else{
            nav.style.right = "0%"
        }
    }
    

}
mynav();

// 2 js code //
function myHeader(){
    let header = document.getElementById("header");
    window.addEventListener("scroll",function(){
        if(window.scrollY > 0){
            header.classList.add("active")
        }else{
            header.classList.remove("active")

        }
    })
}
myHeader();

// 3 js code //

function myFun(){
    let plush = document.querySelector(".plus");
    let textbox = document.querySelector(".text-box");
    plush.onclick = ()=>{
        textbox.classList.toggle("active");
        plush.classList.toggle("img_active");
    }
}
myFun();

// 4 js code //

function myVidio(){
    let links = document.querySelector(".linl_a");
    let overs = document.querySelector(".bg-show .overlyss");
    let exit = document.querySelector(".cansal");
    let player = document.querySelector(".player");
    let vidios = document.getElementById("vidio");

    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block" 
    }
    exit.onclick = ()=>{
        overs.style.display = "none"  // aana thi vidio off thse// 
    }
    player.onclick = ()=>{
        if (vidios.paused) {
            vidios.play();
            player.src ="_play_.png"   
        }else{
            vidios.pause();
            player.src = "bharatshah.jpg"
        }
    }
}
myVidio();

// 5 js code //

function toTop(){
    let top = document.querySelector(".top");
    Window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"

        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }
}
toTop();

