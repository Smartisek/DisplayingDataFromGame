let table;
let bullets;
let asteroid;
let hit;
let bulletsLenght = 0;
let asteroidLenght = 0;
let hitsLenght = 0;
let missedShots;
let missedLenght = 0;
let background;


function preload(){
  table = loadTable("gamestat.csv", "csv", "header");
  background = loadImage("background.png");
}

function setup() {
  createCanvas(1550, 750);
  image(background, 0,0);
  textSize(30);
  fill(170, 152, 169);
  stroke(103, 49, 71);
  text("You fired bullets", 100, 180);
  text("You destroyed asteroids", 100, 330);
  text("You missed shots", 100, 480);
  text("You got hit", 100, 630);

  }

  function draw(){
 background.resize(1500,800);
    let rectColor = color(72, 50, 72);
    rectColor.setAlpha(15);
    if(table){
      let numRows = table.getRowCount();
  
      let BulletsFired = table.getColumn("BulletsFired");
      let AsteroidsDestroyed = table.getColumn("AsteroidsDestroyed");
      let HitsTaken = table.getColumn("HitsTaken");
      for(let i = 0; i<numRows; i++){
        let bullets = BulletsFired[i];
        let asteroid = AsteroidsDestroyed[i];
        let hit = HitsTaken[i];
        let missedShots = bullets - asteroid;
        fill(rectColor);
        noStroke();
        rect(100, 200, bulletsLenght, 60,10);
        rect(100, 350, asteroidLenght, 60,10);
        rect(100, 500, missedLenght, 60,10);
        rect(100, 650, hitsLenght, 60,10);
        fill(170, 152, 169);
        if(bulletsLenght !== 10*bullets){
          bulletsLenght+=5;
        } 
        else{
          textSize(35);
          text(bullets, 1300,240);
        }
        if(asteroidLenght !== 10*asteroid){
          asteroidLenght += 5;
        } else{
          textSize(35);
          text(asteroid, 975, 390);
        }
        if(missedLenght !== 10*missedShots){
          missedLenght +=5;
        } else {
          textSize(35);
          text(missedShots, 450,540);
        }
        if(hitsLenght !== 10*hit){
          hitsLenght +=0.25;
        } else {
          textSize(35);
          text(hit, 150, 690);
        }
      }
  }
  }


// https://www.wallpapertip.com/wdown/bbhoow_purple-space-background/