/** GSAP Plugins */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/** GSAP Animation - Section 1 - Nouilles */
/* gsap.to("#nouilles", {
    x: 400,
    rotation: 360,

    duration: 1,
})

gsap.to("#nouilles", {
    x: -100,
    rotation: -360,

    delay:2,
    duration: 1,
})

gsap.to("#nouilles", {
    x: 0,
    rotation: 360,

    delay:3,
    duration: 1,
}) */

/*
gsap.to("#nouilles", {
    ScrollTrigger: {
        trigger: '#section2',s
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
        markers: true,
        id:"window2"
        toggleActions: 'play none reverse reset',
    },
    rotation: 360,
    duration: 2,
})*/

/*
function demarageJeu() {
    document.getElementById('popup').classList.add('hide');
    announce("Un ennemi approche...");
    setTimeout( // Pour faire apparaître la popup automatiquement après la "popupIntro"
        document.getElementById("popup").style.display = "flex", // Popup qui apparaît après la "popupIntro" pour choisir notre personnage 
    1000);  
    setTimeout(() => { // C'est une fonction fléchée, une fonction qui ne marche que dans ce cas précis
        announce("Choisissez votre attaque !");
    }, 3000);
}
*/


/** GSAP Animation - Popup - Nouilles */

gsap.to('#popup', {
    opacity: 100,
})

gsap.to('#popup', {
    opacity: 0,
    duration: 1.5,
})

/** GSAP Animation - Section 1 - Logo (ScrollTrigger)  */

gsap.to('#logo', {
    scrollTrigger:{
        trigger:"#section2",
        // markers: true,
        start:'top 60%',
        end: 'top 20%',
        toggleActions: 'play none reverse reset',
        scrub: 1,
    },
    x:'-80',
    y:'-100',
    scale: '0.5',
    duration: 2,
})

/** GSAP Animation - Section 1 - Arrows  */

const arrows = document.getElementById("arrows");
const img = document.getElementById("section1");
const divL = document.getElementById("divL");
const logo = document.getElementById("logo");

img.addEventListener("mousemove", () => {
    gsap.to(arrows, { 
        opacity: 1, 
        duration: 0.5
    });
    console.log("it works!")
});

img.addEventListener("mouseleave", () => {
  gsap.to(arrows, { opacity: 0, duration: 0.9});
});

arrows.addEventListener("click", () => {
    divL.style.backgroundColor = "rgb(167, 97, 97)";
    gsap.to(divL, { 
        x: "-300",       
        opacity: 0,     
        duration: 2.5,
    });
    gsap.to(logo, { 
       x: "0", 
       opacity: 1,
       duration: 6,
    });
})

/** GSAP Animation - Section 1 - DivL comeback  */

gsap.to(divL, {
    scrollTrigger:{
        trigger:"#section2",
        // markers: true,
        start:'top 25%',
        toggleActions: 'play none reverse reset',
        scrub: 1,
    },
    x:'0',
    opacity: 1,     
})

/** GSAP Animation - Section 2 - China(ScrollTrigger)  */


gsap.from('#china', {
    scrollTrigger:{
        trigger:"#section2",
        //markers: true,
        start:'top 60%',
        end: 'top 20%',
        toggleActions: 'play none reverse reset',
        scrub: 1,
    },
    x:'-100vw',
    duration: 2,
})

/** JS Interaction - Section 2 - blockText */

const blockText1 = document.getElementById("blockText1");
const blockText2 = document.getElementById("blockText2");
const blockText3 = document.getElementById("blockText3");
const blockText4 = document.getElementById("blockText4");
const blockText5 = document.getElementById("blockText5");
const blockText6 = document.getElementById("blockText6");

blockText1.addEventListener("mouseenter", () => {
    blockText1.style.transform = "translateY(-20px)";
});

blockText1.addEventListener("mouseleave", () => {
    blockText1.style.transform = "translateX(200px)";
});

blockText2.addEventListener("mouseenter", () => {
    blockText2.style.transform = "translateX(-50px)";
});

blockText2.addEventListener("mouseleave", () => {
    blockText2.style.transform = "translateX(0)";
});

blockText3.addEventListener("mouseenter", () => {
    blockText3.style.transform = "translateY(20px)";
});

blockText3.addEventListener("mouseleave", () => {
    blockText3.style.transform = "translateX(200px)";
});

blockText4.addEventListener("mouseenter", () => {
    blockText4.style.transform = "translateY(-20px)";
});

blockText4.addEventListener("mouseleave", () => {
    blockText4.style.transform = "translateX(-200px)";
});

blockText5.addEventListener("mouseenter", () => {
    blockText5.style.transform = "translateX(50px)";
});

blockText5.addEventListener("mouseleave", () => {
    blockText5.style.transform = "translateX(0)";
});

blockText6.addEventListener("mouseenter", () => {
    blockText6.style.transform = "translateY(20px)";
});

blockText6.addEventListener("mouseleave", () => {
    blockText6.style.transform = "translateX(-200px)";
});




/** GSAP Animation - Section 3 - Nouilles ---------------------------------------------- */


let tl = gsap.timeline({
    /*
    scrollTrigger:{
        trigger:"#section3",
        markers:true,
        start: "top 60%",
        end: "top 20%",
        id: "zone-section3",
        toggleActions : "play none reverse reset",
        scrub: 1,
    }
    */
    repeat: 1,
    yoyo: true,
});

tl.to('.plate', { x: 100, stagger: 0.1,})
.to('.plate', { x: 150, y: -50, stagger: 0.1,})
.to('.plate', { x: 200, y: 50, stagger: 0.1,})
.to('.plate', { x: 250, y: -50, stagger: 0.1,})
.to('.plate', { x: 300, y: 50, stagger: 0.1,})
.to('.plate', { x: 350, y: -50, stagger: 0.1,})
.to('.plate', { x: 400, y: 50, stagger: 0.1,})
.to('.plate', { x: 450, y: -50, stagger: 0.1,})
.to('.plate', { x: 500, y: 50, stagger: 0.1,})
.to('.plate', { x: 550, y: -50, stagger: 0.1,})
.to('.plate', { x: 600, y: 50, stagger: 0.1,})
.to('.plate', { x: 650, y: -50, stagger: 0.1,})
.to('.plate', { x: 700, y: 50, stagger: 0.1,})
.to('.plate', { x: 750, y: -50, stagger: 0.1,})
.to('.plate', { x: 800, y: 50, stagger: 0.1,})
.to('.plate', { x: 850, y: -50, stagger: 0.1,})
.to('.plate', { x: 900, y: 50, stagger: 0.1,})
.to('.plate', { x: 950, y: -50, stagger: 0.1,})
.to('.plate', { x: 1000, y: 50, stagger: 0.1,})
.to('.plate', { x: 1050, y: -50, stagger: 0.1,})
.to('.plate', { x: 1100, y: 50, stagger: 0.1,})
.to('.plate', { x: 1150, y: -50, stagger: 0.1,})
.to('.plate', { x: 1200, y: 50, stagger: 0.1,})
.to('.plate', { x: 1250, y: -50, stagger: 0.1,})
.to('.plate', { x: 1300, y: 50, stagger: 0.1,})

/** GSAP Animation - Section 4 - Draggable ---------------------------------------------- */

Draggable.create("#drag", {
    type: "x,y",
    bounds: "#section4",
    cursor: 'grab',

    onDrag: function(){
        gsap.to("#drag", {
            witdh: '400px',
            filter: 'drop-shadow(30px 10px 4px rgba(0,0,0,0.4))',
            duration: 0.25,
        })
    },

    onDragEnd: function(){
        gsap.to("#depositZone", {
            witdh: '100px',
            filter: 'drop-shadow()30px 10px 4px rgba(0,0,0,0))',
            duration: 0.25,
        })

        /* Zone de dépot */
        if (this.hitTest("#depositZone", "40px")) {
            document.getElementById("depositZone").classList.add("#depositZone--validate")
        } else {
            document.getElementById("depositZone").classList.remove("#depositZone--validate")
        }
    },
})

