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

gsap.from('#nouilles', {
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

/** GSAP Animation - Popup - Nouilles */

gsap.to('#popup', {
    opacity: 100,
})

gsap.to('#popup', {
    opacity: 0,
    duration: 1.5,
})

/** GSAP Animation - Logo - Nouilles */

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

/** GSAP Animation - DivL - Nouilles */

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


/*
if (arrows != active) {
    img.addEventListener("mouseenter", () => {
    gsap.to(arrows, { opacity: 1, duration: 0.3 });
});
}
*/

/* GSAP Animation - Section 1 - Nouilles ---------------------------------------------- */

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

tl.to('.bowl', { x: 100, stagger: 0.1,})
.to('.bowl', { x: 150, y: -50, stagger: 0.1,})
.to('.bowl', { x: 200, y: 50, stagger: 0.1,})
.to('.bowl', { x: 250, y: -50, stagger: 0.1,})
.to('.bowl', { x: 300, y: 50, stagger: 0.1,})
.to('.bowl', { x: 350, y: -50, stagger: 0.1,})
.to('.bowl', { x: 400, y: 50, stagger: 0.1,})
.to('.bowl', { x: 450, y: -50, stagger: 0.1,})
.to('.bowl', { x: 500, y: 50, stagger: 0.1,})
.to('.bowl', { x: 550, y: -50, stagger: 0.1,})
.to('.bowl', { x: 600, y: 50, stagger: 0.1,})
.to('.bowl', { x: 650, y: -50, stagger: 0.1,})
.to('.bowl', { x: 700, y: 50, stagger: 0.1,})
.to('.bowl', { x: 750, y: -50, stagger: 0.1,})
.to('.bowl', { x: 800, y: 50, stagger: 0.1,})
.to('.bowl', { x: 850, y: -50, stagger: 0.1,})
.to('.bowl', { x: 900, y: 50, stagger: 0.1,})
.to('.bowl', { x: 950, y: -50, stagger: 0.1,})
.to('.bowl', { x: 1000, y: 50, stagger: 0.1,})
.to('.bowl', { x: 1050, y: -50, stagger: 0.1,})
.to('.bowl', { x: 1100, y: 50, stagger: 0.1,})
.to('.bowl', { x: 1150, y: -50, stagger: 0.1,})
.to('.bowl', { x: 1200, y: 50, stagger: 0.1,})
.to('.bowl', { x: 1250, y: -50, stagger: 0.1,})
.to('.bowl', { x: 1300, y: 50, stagger: 0.1,})

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
        gsap.to("#drag", {
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

