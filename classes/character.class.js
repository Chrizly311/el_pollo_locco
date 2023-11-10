class Character extends MovableObject{
    width = 150;
    height = 200;

    constructor(x, y) {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.x = x;
        this.y = y;
    }
    
    jump() {

    }
}