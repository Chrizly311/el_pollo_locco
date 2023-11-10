class Chicken extends MovableObject {
    width = 70;
    height = 70;
    
    constructor(y) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.y = y;

        this.x = 200 + Math.random() * 500;
    }
}