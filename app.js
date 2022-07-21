const hero = {
    emoji: '🤸‍♀️',
    health: 100
}

const boss = {
    emoji: '🤸',
    health: 100,
    maxhealth: 100,
    value: 10,
    level:0
}
// console.log(boss.health);

let gold=0

function drawHero() {
    let heroTemplate = ''
    heroTemplate += `
        <section class="col-6">
            <div class="bg-dark text-center fs-5">🤸‍♀️</div>
        </section>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${hero.health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    `
    let heroElm = document.getElementById('battle')
    heroElm.innerHTML = heroTemplate
}
drawHero()

function drawBoss() {
    let bossTemplate = ''
    bossTemplate += `
        <section class="col-6" onclick="(attackBoss())">
            <div class="bg-warning text-center fs-5">🤸</div>
        </section>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${boss.health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="${boss.maxhealth}%"></div>
        </div>
    `
    // console.log(drawBoss);
    let bossElm = document.getElementById('boss')
    bossElm.innerHTML = bossTemplate
}

drawBoss()

function attackBoss() {
    if(hero.health!=0){
    boss.health -= 50
drawBoss()
    if(boss.health<= 0){
        let currentValue = boss.value
        
        boss.level +=1
        boss.maxhealth *= boss.level
        currentValue *= boss.level
        boss.health=boss.maxhealth
        gold+=currentValue
       
        drawGold()
    }}
}

function attackHero(){
    hero.health -=5*boss.level
    if(hero.health<=0){
        hero.health=0
        
    }
    drawHero()
}

setInterval(attackHero, 3000)

function reset(){
    boss.health=100
    hero.health=100
    drawHero()
    drawBoss()
}

function drawGold(){
    let goldTemplate= ''
    goldTemplate += `
    <div class="text-end">$${gold}</div>
    `
    let goldELm= document.getElementById('gold')
    goldELm.innerHTML =goldTemplate
}
drawGold()

function healthPack(){
    gold -= 10
    hero.health += 40
    drawGold()
    drawHero()

}