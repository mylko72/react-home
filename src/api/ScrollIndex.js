// import ScrollMotion from "./ScrollMotion.js";
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

    constructor(scrollMotion){
        this.scrollMotion = scrollMotion;
    }
    
    init(el, sceneElem, motionElem, options){
        this.defaults = {...this.defaults, ...options};
        this.el = el;
        this.container = document.querySelector(this.el);
        this.defaults.threshold = window.innerHeight * options.threshold;
        
        if (isDesktop()) {
            this.desktopFlag = true;
            this.mobileFlag = false;
        } else {
            this.desktopFlag = false;
            this.mobileFlag = true;
        }
        
        // this.scrollMotion = new ScrollMotion(sceneElem, motionElem, options);
        this.scrollMotion.init(sceneElem, motionElem, options);
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

                console.log(`Section 0 모션 진행중...`);

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
                }else{
                    stickyEl.style.width = '100%';
                    stickyEl.style.height = '100vh';
                    stickyEl.style.borderRadius = '0';
                }

                if(stickyEl.style.height === '100vh'){
                    stickyEl.classList.add('!fixed');
                } else{
                    stickyEl.classList.remove('!fixed');
                }
            }else if(currentIndex === 1){
                const stickyEl = this.scrollMotion.scrollSection[currentIndex-1].querySelector('.app__cover-img');
                stickyEl.style.width = '100%';
                stickyEl.style.height = '100vh';
                stickyEl.style.borderRadius = '0';

                console.log(`Section 1 모션 진행중...`);
            
            }else if(currentIndex === 2){
                console.log(`Section 2 모션 진행중...`);
            }else if(currentIndex === 3){
                console.log(`Section '3 모션 진행중...`);
            }else if(currentIndex === 4){ 
                console.log(`Section '4 모션 진행중...`);

                this.absTop = this.scrollMotion.yOffset + this.scrollMotion.currentScene.getBoundingClientRect().top;
                let currentYOffset = (this.scrollMotion.yOffset + this.scrollMotion.defaults.threshold) - this.absTop;
                let scrollRatio = currentYOffset / this.scrollMotion.scrollSection[this.scrollMotion.currentIndex].scrollHeight;

                const appMessage = this.scrollMotion.currentScene.querySelector('.app__main-message');
                const mainImageA = this.scrollMotion.currentScene.querySelector('.main-image-a');
                const mainImageB = this.scrollMotion.currentScene.querySelector('.main-image-b');
                const mainImageC= this.scrollMotion.currentScene.querySelector('.main-image-c');
                const mainImageD= this.scrollMotion.currentScene.querySelector('.main-image-d');

                const messageA = this.scrollMotion.currentScene.querySelector('.message-text-a');
                const messageB = this.scrollMotion.currentScene.querySelector('.message-text-b');
                const messageC = this.scrollMotion.currentScene.querySelector('.message-text-c');
                const messageD = this.scrollMotion.currentScene.querySelector('.message-text-d');
                const messageE = this.scrollMotion.currentScene.querySelector('.message-text-e');

                const messageA_opacityIn = JSON.parse(messageA.dataset.opacityIn);
                const messageA_opacityOut = JSON.parse(messageA.dataset.opacityOut);
                const messageA_translateyIn = JSON.parse(messageA.dataset.translateyIn);
                const messageA_translateyOut = JSON.parse(messageA.dataset.translateyOut);

                const messageB_opacityIn = JSON.parse(messageB.dataset.opacityIn);
                const messageB_opacityOut = JSON.parse(messageB.dataset.opacityOut);
                const messageB_translateyIn = JSON.parse(messageB.dataset.translateyIn);
                const messageB_translateyOut = JSON.parse(messageB.dataset.translateyOut);

                const messageC_opacityIn = JSON.parse(messageC.dataset.opacityIn);
                const messageC_opacityOut = JSON.parse(messageC.dataset.opacityOut);
                const messageC_translateyIn = JSON.parse(messageC.dataset.translateyIn);
                const messageC_translateyOut = JSON.parse(messageC.dataset.translateyOut);

                const messageD_opacityIn = JSON.parse(messageD.dataset.opacityIn);
                const messageD_opacityOut = JSON.parse(messageD.dataset.opacityOut);
                const messageD_translateyIn = JSON.parse(messageD.dataset.translateyIn);
                const messageD_translateyOut = JSON.parse(messageD.dataset.translateyOut);

                const messageE_opacityIn = JSON.parse(messageE.dataset.opacityIn);
                const messageE_opacityOut = JSON.parse(messageE.dataset.opacityOut);
                const messageE_translateyIn = JSON.parse(messageE.dataset.translateyIn);
                const messageE_translateyOut = JSON.parse(messageE.dataset.translateyOut);
                
                // console.log('messageA_opacityIn', messageA_opacityIn);
                console.log(`${this.scrollMotion.currentIndex} scrollRatio`, scrollRatio);

                if (scrollRatio <= 0.1) {
                    messageA.style.opacity = `${this.scrollMotion.calcValues(messageA_opacityIn, currentYOffset)}`;
                    messageA.style.transform = `translateY(${this.scrollMotion.calcValues(messageA_translateyIn, currentYOffset)}vh)`;
                    messageA.style.willChange = 'transform, width, height';
                    messageA.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.17){
                    messageA.style.opacity = `${this.scrollMotion.calcValues(messageA_opacityOut, currentYOffset)}`;
                    messageA.style.transform = `translateY(${this.scrollMotion.calcValues(messageA_translateyOut, currentYOffset)}vh)`;
                } 
                
                if(scrollRatio >= 0.08 && scrollRatio < 0.2){    
                    appMessage.classList.add('!left-0');
                    appMessage.classList.add('!text-left');
                    appMessage.classList.add('!translate-x-0');

                    mainImageA.classList.add('active');
                } else if (scrollRatio < 0.07) {
                    appMessage.classList.remove('!left-0');
                    appMessage.classList.remove('!text-left');
                    appMessage.classList.remove('!translate-x-0');

                    mainImageA.classList.remove('active');
                } else if (scrollRatio > 0.22) {
                    mainImageA.classList.remove('active');
                }
                
                if (scrollRatio <= 0.3){
                    messageB.style.opacity = `${this.scrollMotion.calcValues(messageB_opacityIn, currentYOffset)}`;
                    messageB.style.transform = `translateY(${this.scrollMotion.calcValues(messageB_translateyIn, currentYOffset)}vh)`;
                    messageB.style.willChange = 'transform, width, height';
                    messageB.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.32){
                    messageB.style.opacity = `${this.scrollMotion.calcValues(messageB_opacityOut, currentYOffset)}`;
                    messageB.style.transform = `translateY(${this.scrollMotion.calcValues(messageB_translateyOut, currentYOffset)}vh)`;
                } 

                if(scrollRatio >= 0.27 && scrollRatio < 0.36){                    
                    mainImageB.classList.add('active');
                } else if (scrollRatio < 0.26) {
                    mainImageB.classList.remove('active');
                } else if (scrollRatio > 0.38) {
                    mainImageB.classList.remove('active');
                }

                if (scrollRatio <= 0.5){
                    messageC.style.opacity = `${this.scrollMotion.calcValues(messageC_opacityIn, currentYOffset)}`;
                    messageC.style.transform = `translateY(${this.scrollMotion.calcValues(messageC_translateyIn, currentYOffset)}vh)`;
                    messageC.style.willChange = 'transform, width, height';
                    messageC.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.52){
                    messageC.style.opacity = `${this.scrollMotion.calcValues(messageC_opacityOut, currentYOffset)}`;
                    messageC.style.transform = `translateY(${this.scrollMotion.calcValues(messageC_translateyOut, currentYOffset)}vh)`;
                } 

                if(scrollRatio >= 0.47 && scrollRatio < 0.56){                    
                    mainImageC.classList.add('active');
                } else if (scrollRatio < 0.46) {
                    mainImageC.classList.remove('active');
                } else if (scrollRatio > 0.6) {
                    mainImageC.classList.remove('active');
                }

                if (scrollRatio <= 0.7){
                    messageD.style.opacity = `${this.scrollMotion.calcValues(messageD_opacityIn, currentYOffset)}`;
                    messageD.style.transform = `translateY(${this.scrollMotion.calcValues(messageD_translateyIn, currentYOffset)}vh)`;
                    messageD.style.willChange = 'transform, width, height';
                    messageD.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.72){
                    messageD.style.opacity = `${this.scrollMotion.calcValues(messageD_opacityOut, currentYOffset)}`;
                    messageD.style.transform = `translateY(${this.scrollMotion.calcValues(messageD_translateyOut, currentYOffset)}vh)`;
                } 

                if(scrollRatio >= 0.67 && scrollRatio < 0.76){                    
                    mainImageD.classList.add('active');
                } else if (scrollRatio < 0.66) {
                    mainImageD.classList.remove('active');
                } else if (scrollRatio > 0.82) {
                    mainImageD.classList.remove('active');
                }

                if (scrollRatio <= 0.82){
                    messageE.style.opacity = `${this.scrollMotion.calcValues(messageE_opacityIn, currentYOffset)}`;
                    messageE.style.transform = `translateY(${this.scrollMotion.calcValues(messageE_translateyIn, currentYOffset)}vh)`;
                    messageE.style.willChange = 'transform, width, height';
                    messageE.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.85){
                    console.log('call messageE...');
                    messageE.style.opacity = `${this.scrollMotion.calcValues(messageE_opacityOut, currentYOffset)}`;
                    messageE.style.transform = `translateY(${this.scrollMotion.calcValues(messageE_translateyOut, currentYOffset)}vh)`;
                } 
            }else if(currentIndex === 5){             
            }else if(currentIndex === 7){
            }else if(currentIndex === 8){
            }else if(currentIndex === 9){
            }
        });
    }
    
    setLayout(section, heightNum){
        const scrollHeight = heightNum * window.innerHeight;
        section.style.height = `${scrollHeight}px`;
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
        this.imgSelector = document.querySelectorAll('[data-src]');
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