const legends = {
    'Bodvar': ['Hammer','Sword'],
    'Cassidy': ['Blasters','Hammer'],
    'Orion': ['Rocket Lance','Spear'],
    'Lord Vraxx': ['Rocket Lance','Blasters'],
    'Gnash': ['Hammer','Spear'],

    'Queen Nai': ['Spear','Katars'],
    'Hattori': ['Sword','Spear'],
    'Sir Roland': ['Rocket Lance','Sword'],
    'Scarlet': ['Hammer','Rocket Lance'],
    'Thatch': ['Sword','Blasters'],

    'Ada': ['Blasters','Spear'],
    'Sentinel': ['Hammer','Katars'],
    'Lucien': ['Katars','Blasters'],
    'Teros': ['Axe','Hammer'],
    'Brynn': ['Axe','Spear'],

    'Asuri': ['Katars','Sword'],
    'Barraza': ['Axe','Blasters'],
    'Ember': ['Bow','Katars'],
    'Azoth': ['Bow','Axe'],
    'Koji': ['Bow','Sword'],
    
    'Ulgrim': ['Axe','Rocket Lance'],
    'Diana': ['Bow','Blasters'],
    'Jhala': ['Axe','Sword'],
    'Kor': ['Gauntlets','Hammer'],
    'Wu Shang': ['Gauntlets','Spear'],
    
    'Val': ['Gauntlets','Sword'],
    'Ragnir': ['Katars','Axe'],
    'Cross': ['Blasters','Gauntlets'],
    'Mirage': ['Scythe','Spear'],
    'Nix': ['Scythe','Blasters'],
    
    'Mordex': ['Scythe','Gauntlets'],
    'Yumiko': ['Bow','Hammer'],
    'Artemis': ['Rocket Lance','Scythe'],
    'Caspian': ['Gauntlets','Katars'],
    'Sidra': ['Cannon','Sword'],
    
    'Xull': ['Cannon','Axe'],
    'Kaya': ['Spear','Bow'],
    'Isaiah': ['Cannon','Blasters'],
    'Jiro': ['Sword','Scythe'],
    'Lin Fei': ['Katars','Cannon'],
    
    'Zariel': ['Gauntlets','Bow'],
    'Rayman': ['Gauntlets','Axe'],
    'Dusk': ['Spear','Orb'],
    'Fait': ['Scythe','Orb'],
    'Thor': ['Hammer','Orb'],
    
    'Petra': ['Gauntlets','Orb'],
    'Vector': ['Rocket Lance','Bow'],
    'Voklov': ['Axe','Scythe'],
    'Onyx': ['Gauntlets','Cannon'],
    'Jaeyun': ['Sword','Greatsword'],
    
    'Mako': ['Katars','Greatsword'],
    'Magyar': ['Hammer','Greatsword'],
    'Reno': ['Blasters','Orb'],
    'Munin': ['Bow','Scythe'],
    'Arcadio': ['Spear','Greatsword'],
    'Ezio': ['Sword','Orb'],
}

function pickRandomLegend() {
    selectedWeapons = getSelectedWeapons()
    bannedWeapons = getBannedWeapons()

    allLegends = Object.entries(legends)

    playableLegends = allLegends.filter(
                                    l => selectedWeapons.some(
                                        w => l[1].includes(w) 
                                    )
                                )
                                .filter(
                                    l => bannedWeapons.every(
                                        w => !l[1].includes(w)
                                    )
                                ).map(e => e[0])
    
    document.querySelector('#result').innerHTML = playableLegends[drawLegend(playableLegends)] 
                                                ? playableLegends[drawLegend(playableLegends)] 
                                                : '';

}

function getSelectedWeapons() {
    return Array.from(document.querySelectorAll('.weaponpicker .column button'))
            .filter(e => !e.classList.contains('is-light') && e.classList.contains('is-info'))
            .map(e => e.innerText)
}

function getBannedWeapons() {
    return Array.from(document.querySelectorAll('.weaponpicker .column button'))
            .filter(e => !e.classList.contains('is-light') && e.classList.contains('is-danger'))
            .map(e => e.innerText)
}

function drawLegend(arr) {
    return Math.floor(Math.random() * arr.length);
}