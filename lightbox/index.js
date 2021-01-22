class LightBox{
    constructor(){
        this.imagesArr = []
        this.imgSrc
        this.imageNumb
        this.index
        
        this.images = [...document.querySelectorAll('.image img')]
        this.lightboxDiv = document.querySelector('div.lightbox')
        this.lightboxImg = document.querySelector('div.lightboxWrapper img')
        this.lightboxSpan = document.querySelector('div.lightboxWrapper span')
        this.exit = document.querySelector('.fa-times-circle-o')
        this.rightArrow = document.querySelector('.fa-arrow-right')
        this.leftArrow = document.querySelector('.fa-arrow-left')
    }
    addImagesToLightbox(){
        this.images.forEach((image)=>{
            this.imagesArr.push({
                src:image.src,
            })
            image.addEventListener("click", ()=>{
               
           
                this.imageNumb = image.dataset.number
                this.index=this.imageNumb
                this.imgSrc = image.src
               this.lightboxImg.src=this.imgSrc
               this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.images.length}`
               this.lightboxDiv.style.display = "block"
                
            })
            this.exit.addEventListener("click", ()=>{
                this.lightboxDiv.style.display = "none"})
            })
    
        }
        nextAndprevImage(){
        this.rightArrow.addEventListener("click", ()=>{
   
                    ++this.imageNumb
                    console.log(this.imageNumb)
                    if(this.imageNumb>this.imagesArr.length-1)
                    this.imageNumb=0
  
                this.lightboxImg.src = this.imagesArr[this.imageNumb].src
 
                this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.imagesArr.length}`
    
                })

                this.leftArrow.addEventListener("click", ()=>{
   
                this.imageNumb--
                if(this.imageNumb<0)
                    this.imageNumb=this.imagesArr.length-1

  
                    this.lightboxImg.src = this.imagesArr[this.imageNumb].src
       
                    this.lightboxSpan.textContent = `Image ${parseInt(this.imageNumb)+1} of ${this.imagesArr.length}`
   
                    })
                    }
                }

                    const lightbox = new LightBox
                    lightbox.addImagesToLightbox()
                    lightbox.nextAndprevImage()










































/*const images = [...document.querySelectorAll('.image img')]
const lightboxDiv = document.querySelector('div.lightbox')
const lightboxImg = document.querySelector('div.lightboxWrapper img')
const lightboxSpan = document.querySelector('div.lightboxWrapper span')
const exit = document.querySelector('.fa-times-circle-o')
const rightArrow = document.querySelector('.fa-arrow-right')
const leftArrow = document.querySelector('.fa-arrow-left')

let index
let imgSrc
let  imageNumb
const imagesArr = []*/
/*const randomArr = [{
    rndSrc:
        [
            "images/forest-931706_1920.jpg",  "images/man-1246233_1920.jpg"
        ],
}]*/


/*images.forEach((image)=>{
    imagesArr.push({
        src:image.src,
    })*/
    //image.addEventListener("click", ()=>{
        /*console.log(intervalIndex)
        clearInterval(intervalIndex)*/
   /*
        imageNumb = image.dataset.number
        index=imageNumb
        imgSrc = image.src
       lightboxImg.src=imgSrc
       lightboxSpan.textContent = `Image ${parseInt(imageNumb)+1} of ${images.length}`
       lightboxDiv.style.display = "block"
        
    })*/


    /*const randomImage = function(imgSrc, randomArr, imagesArr, images){
        let rndIndex=0
        const intervalIndex = setInterval(() => {
            if(rndIndex>1)
            rndIndex=0
                images[0].src = randomArr[0].rndSrc[rndIndex]
                imagesArr[0].src = randomArr[0].rndSrc[rndIndex]
                rndIndex++
            
        }, 3333);
        return intervalIndex
    }

const intervalIndex = randomImage(imgSrc, randomArr, imagesArr, images)
console.log(intervalIndex)*/

/*exit.addEventListener("click", ()=>{
    lightboxDiv.style.display = "none"})
})

rightArrow.addEventListener("click", ()=>{
   
    ++imageNumb
    console.log(imageNumb)
    if(imageNumb>imagesArr.length-1)
         imageNumb=0
  
   lightboxImg.src = imagesArr[imageNumb].src
 
   lightboxSpan.textContent = `Image ${parseInt(imageNumb)+1} of ${imagesArr.length}`
    
})*/

/*leftArrow.addEventListener("click", ()=>{
   
    imageNumb--
    if(imageNumb<0)
        imageNumb=imagesArr.length-1

  
    lightboxImg.src = imagesArr[imageNumb].src
       
    lightboxSpan.textContent = `Image ${parseInt(imageNumb)+1} of ${imagesArr.length}`
   
})*/