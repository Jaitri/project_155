AFRAME.registerComponent("game-play", {
    
    schema: {
        elementId: {type:"string", default:"#coin1"},
    },
    update: function(){
        this.isCollided(this.data.elementId);
    },

    
    isCollided: function(elementId) {
        console.log("works")
        const element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
            if(elementId.includes("#coin")) {
                console.log(elementId + "collision");
            
            } else if (elementId.includes("#hurdle")) {
                console.log("coin collision")
            }
        });
    },
});
