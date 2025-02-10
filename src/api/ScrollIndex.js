import ScrollMotion from "./ScrollMotion.js";
import { isMobile, isDesktop, getAllElements, callByObserver } from "./ScrollFunction.js";

export default class ScrollIndex {
    defaults = {
        threshold: 0,
    }

    el;
    container;
    scrollMotion;
    imgSelector;
    absTop;
    absTop2;

    // constructor(){
    // }
    
    init(el, sceneElem, motionElem, options){
        this.defaults = {...this.defaults, ...options};
        this.el = el;
        this.container = document.querySelector(this.el);
        this.imgSelector = document.querySelectorAll('[data-src]');
        this.defaults.threshold = window.innerHeight * options.threshold;
        
        if (isDesktop()) {
            this.desktopFlag = true;
            this.mobileFlag = false;
        } else {
            this.desktopFlag = false;
            this.mobileFlag = true;
        }
        
        this.scrollMotion = new ScrollMotion(sceneElem, motionElem, options);
        this.render();
        this.attachEvents();
        this.setObserver();
    }

    render(){

        this.scrollMotion.setAnimationListener((currentIndex) => {
            let currentYOffset = this.scrollMotion.yOffset - this.scrollMotion.defaults.prevScrollHeight;
            let scrollRatio = currentYOffset / this.scrollMotion.scrollSection[currentIndex].scrollHeight;

            // console.log('scrollRatio', scrollRatio);
    
            if(currentIndex === 0){
                const stickyEl = this.scrollMotion.currentScene.querySelector('.app__cover-img');
                const stickyScaleWidth = JSON.parse(stickyEl.dataset.scaleWidth);
                const stickyScaleHeight = JSON.parse(stickyEl.dataset.scaleHeight);
                const stickyBorderRadius = JSON.parse(stickyEl.dataset.borderRadius);

                console.log(`Section 1 모션 진행중...`);

                if(!this.absTop){
                    this.absTop = this.scrollMotion.yOffset + this.scrollMotion.currentScene.getBoundingClientRect().top;
                }

                let currentYOffset = (this.scrollMotion.yOffset + this.scrollMotion.defaults.threshold) - this.absTop;
                let scrollRatio = currentYOffset / this.scrollMotion.scrollSection[this.scrollMotion.currentIndex].scrollHeight;
                console.log(`${this.scrollMotion.currentIndex} scrollRatio`, scrollRatio);

                stickyEl.parentElement.style.alignItems = 'flex-start';

                if (scrollRatio <= 0.82) {
                    stickyEl.style.width = `${this.scrollMotion.calcValues(stickyScaleWidth, currentYOffset)}%`;
                    stickyEl.style.height = `${this.scrollMotion.calcValues(stickyScaleHeight, currentYOffset)}vh`;
                    stickyEl.style.borderRadius = `${this.scrollMotion.calcValues(stickyBorderRadius, currentYOffset)}vw`
                    stickyEl.style.willChange = 'transform, width, height';
                    stickyEl.style.transformStyle = 'preserve-3d';
                }    
            }else if(currentIndex === 1){
            
            }else if(currentIndex === 2){
    
            }else if(currentIndex === 3){ 
    
            }else if(currentIndex === 4){             
    
            }else if(currentIndex === 5){             
            }else if(currentIndex === 7){
            }else if(currentIndex === 8){
            }else if(currentIndex === 9){
            }
        });
    }

    attachEvents(){
        let that = this;
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize () {
        if (isDesktop() && this.mobileFlag === true) {
            this.desktopFlag = true;
            this.mobileFlag = false;
            // console.log('desktop resize...');
        } else if (isMobile() && this.desktopFlag === true) {
            this.desktopFlag = false;
            this.mobileFlag = true;
            // console.log('mobile resize...');
        }
    }

    setObserver(){  
        // 레이지로드 관찰
        this.imgSelector.length && [...this.imgSelector].forEach((selector) => {
            let config = {
                rootMargin: `0px 0px ${window.innerHeight}px 0px`, 
                threshold: 0                
            };
            callByObserver({target: selector, showCallback: this.setLazyload, keepObserver:false, options:config });
        });    
     }

    setLazyload(image){
        image.src = image.dataset.src        
    }
  
}

// window.scrollIndex = new ScrollIndex(
//     '.page__container',
//     '.content__scroll-section',
//     '[data-effect]',
//     { threshold: 0.95 }
// );