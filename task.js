const deadMole = document.getElementById("dead")
const lostMole = document.getElementById("lost")
const getHoleClass = ( index ) => {
    return document.getElementById(`hole${index}`)
}
for (i=1; i<=9; i++) {
   const mole = document.getElementById(getHoleClass(i).id)
   mole.onclick = () => {
    if (mole.className == 'hole hole_has-mole') {
        deadMole.textContent = Number(deadMole.textContent) + 1
                if (deadMole.textContent == 10) {
                    alert("Вы победили!")
                    deadMole.textContent = 0
                    lostMole.textContent = 0
                }
            }
    else {
        lostMole.textContent = Number(lostMole.textContent) + 1
                if (lostMole.textContent == 5) { 
                    alert("Вы проиграли :-(")        
                    deadMole.textContent = 0
                    lostMole.textContent = 0
                                                     
                }                
            }    
        }
}
