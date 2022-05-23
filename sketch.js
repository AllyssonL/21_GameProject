let button;
let button2;
let cardChoice;
let Playercard;
let Compcard;
let Playercard2;
let Compcard2;
let PlayerTotal;
let CompTotal;
let GameStart;
let GameOver;
let cards = ['A', '2', '3', '4', '5','6','7','8','9','10','J','Q', 'K'];

function preload(){
  img1 =loadImage("images/logo.jpg")
}
function setup() {
  createCanvas(700, 700);
  PlayerTotal = 0;
  CompTotal = 0;
 

  
  button = createButton('Shuffle Cards!');
  button.position(300, 300);
  button.mouseClicked(Shufflecards);

  button2 = createButton('Add card');
  button2.position(300, 350);
  button2.mouseClicked(Addcards);
  
  Playercard = ""; 
  Playercard2 = "";
  Compcard = ""; 
  Compcard2 = "";
  GameStart = true;
  GameOver = false;
  
}
function Shufflecards(){
  Playercard = random(cards); 
  Compcard = random(cards); 
  PlayerTotal = 0;
  CompTotal = 0;
  if (Playercard == 'A'){
    PlayerTotal += 1 
  }
  else if (Playercard == 'J'){
    PlayerTotal += 11
  }
  else if (Playercard == 'Q'){
    PlayerTotal += 12
  }
  else if (Playercard == 'K'){
    PlayerTotal += 13
  }
  else{
    PlayerTotal += Playercard
  }
    if (Compcard == 'A'){
    CompTotal += 1 
  }
  else if (Compcard == 'J'){
    CompTotal += 11
  }
  else if (Compcard == 'Q'){
    CompTotal += 12
  }
  else if (Compcard == 'K'){
    CompTotal += 13
  }
  else{
    CompTotal += Compcard
  }
}

function Addcards(){
  Playercard2 = random(cards); 
  Compcard2 = random(cards); 
  PlayerTotal = Playercard;
  CompTotal = Compcard;
  if (Playercard2 == 'A'){
    PlayerTotal += 1 
  }
  else if (Playercard2 == 'J'){
    PlayerTotal += 11
  }
  else if (Playercard2 == 'Q'){
    PlayerTotal += 12
  }
  else if (Playercard2 == 'K'){
    PlayerTotal += 13
  }
  else{
    PlayerTotal += Playercard2
  }
  if (Compcard2 == 'A'){
    CompTotal += 1 
  }
  else if (Compcard2 == 'J'){
    CompTotal += 11
  }
  else if (Compcard2 == 'Q'){
    CompTotal += 12
  }
  else if (Compcard2 == 'K'){
    CompTotal += 13
  }
  else{
    CompTotal += Compcard2
  }
  GameOver = true;
}

// Opening text 
function draw() {
  background(220);
  textFont("Arial");
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Lets play",350,50);
  text("21",350,100);
  //Game description 
  textSize(20);
  text("Press Shuffle cards to get a card and see if you ",350,200);
  text("want to add another one to get closer to 21", 350, 225);

  textFont("Arial");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Reminder", 100, 270)
  text("A = 1",100,300);
  text("J = 11", 100, 320);
  text("Q = 12", 100, 340);
  text("K = 13", 100, 360)
  
image(img1,550,0,150,150);
image(img1,0,0,150,150);
  
  
text("Player", 100, 500)
text("VS", 300, 500)
text("Computer ", 500, 500)  

  text(Playercard, 100, 550);
  text(Playercard2, 100, 600);
 
text(Compcard, 500, 550); 
text(Compcard2, 500, 600);
  

  if (GameOver){
     if (PlayerTotal > CompTotal ){
      text("Player WINS!", 350, 400);
    }
    else if(PlayerTotal == CompTotal ){
      text("TIE!",350, 400);
    
    }
    else if (CompTotal > PlayerTotal ) {
      text("Computer Wins",350, 400);
  
    }
    print(PlayerTotal)
  } 
}





 
