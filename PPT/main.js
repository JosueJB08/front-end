const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result img"),
    cpuResult = document.querySelector(".cpu-result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index)=>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");
        userResult.src = cpuResult.src = "images/Piedra.png";
        result.textContent = "Espera...";
        optionImages.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
        })
        gameContainer.classList.add("start");
        let time = setTimeout(()=>{
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random()*3);

            let cpuImages = [
                "images/Piedra.png",
                "images/Papel.png",
                "images/Tijera.png"
            ];

            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["P", "R", "T"][randomNumber];
            let userValue = ["P", "R", "T"][index];
            console.log(cpuValue);
            console.log(userValue);

            let outcomes ={
                RR: "Empate", //ROCA ROCA
                RP: "Cpu", //ROCA PAPEL
                RT: "Usuario",//ROCA TIJERA
                PP: "Empate",//PAPEL PAPEL
                PR: "Usuario",//PAPEL ROCA
                PT: "Cpu",//PAPEL TIJERA
                TT: "Empate",//TIJERA TIJERA
                TR: "Cpu",//TIJERA ROCA
                TP: "Usuario"//TIJERA PAPEL
            };

            let outComeValue = outcomes[userValue + cpuValue];

            result.textContent = 
            userValue === cpuValue ? "Empate" : `${outComeValue} Gana!!`;
        },1000);

    });
});