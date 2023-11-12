class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

    //load image
    loadImage(path) {
        this.img = new Image(); //ist das gleiche wie document.getElementByID('image')...
        this.img.src = path;
    }

    /**
    * 
    * @param {Array} arr - ['img/image1.png', 'img/image2.png']
    */
    
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path; 
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        console.log('Moving left')
    }
}