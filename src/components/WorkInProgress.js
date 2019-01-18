
//
// var Alien = function(x, y) {
//     this.x = x;
//     this.y = y;
//     this.img = getImage("creatures/Hopper-Happy");
//     this.coins = 0;
// };
//
// Alien.prototype.draw = function() {
//     fill(255, 0, 0);
//     this.y = constrain(this.y, 0, height-50);
//     image(this.img, this.x, this.y, 40, 40);
// };
//
// Alien.prototype.hop = function() {
//     this.img = getImage("creatures/Hopper-Jumping");
//     this.y -= 5;
// };
//
// Alien.prototype.fall = function() {
//     this.img = getImage("creatures/Hopper-Happy");
//     this.y += 5;
// };
//
// Alien.prototype.checkForcoinGrab = function(coin) {
//     if ((coin.x >= this.x && coin.x <= (this.x + 40)) &&
//         (coin.y >= this.y && coin.y <= (this.y + 40))) {
//         coin.y = -400;
//         this.coins++;
//     }
// };
//
// var coin = function(x, y) {
//     this.x = x;
//     this.y = y;
// };
//
// coin.prototype.draw = function() {
//     fill(89, 71, 0);
//     rectMode(CENTER);
//     rect(this.x, this.y, 5, 40);
// };
//
// var Alien = new Alien(200, 300);
//
// var coins = [];
// for (var i = 0; i < 40; i++) {
//     coins.push(new coin(i * 40 + 300, random(20, 260)));
// }
//
// var grassXs = [];
// for (var i = 0; i < 25; i++) {
//     grassXs.push(i*20);
// }
//
// draw = function() {
//
//     // static
//     background(227, 254, 255);
//     fill(130, 79, 43);
//     rectMode(CORNER);
//     rect(0, height*0.90, width, height*0.10);
//
//     for (var i = 0; i < grassXs.length; i++) {
//         image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
//         grassXs[i] -= 1;
//         if (grassXs[i] <= -20) {
//             grassXs[i] = width;
//         }
//     }
//
//     for (var i = 0; i < coins.length; i++) {
//         coins[i].draw();
//         Alien.checkForcoinGrab(coins[i]);
//         coins[i].x -= 1;
//     }
//
//     textSize(18);
//     text("Score: " + Alien.coins, 20, 30);
//
//     if (Alien.coins/coins.length >= 0.95) {
//         textSize(36);
//         text("YOU WIN!!!!", 100, 200);
//     }
//
//     if (keyIsPressed && keyCode === 0) {
//         Alien.hop();
//     } else {
//         Alien.fall();
//     }
//     Alien.draw();
// };
//
//
