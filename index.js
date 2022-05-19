const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]

let maisDeNoveTri = hitchedSpaceships.filter(naves => {
    return naves[1] > 9
}).map(naves => {
    return naves[0]
})



let plataformaEngPen = hitchedSpaceships.findIndex(naves =>{
    return naves[2] == false
})



let nomeCaixaAlta = hitchedSpaceships.map(naves =>{
    return naves[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + maisDeNoveTri.join(", ")
message += "\nPlataforma com processo de engate: " +  (plataformaEngPen + 1)
message += "\nEsopaçonaves destacadas: " + nomeCaixaAlta.join(", ")
console.log(message)

alert(message)