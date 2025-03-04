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
                const stikcyMessage = this.scrollMotion.currentScene.querySelector('.app__sticky-message');
                const stickyEl = this.scrollMotion.currentScene.querySelector('.app__cover-img');
                const stickyScaleWidth = JSON.parse(stickyEl.dataset.scaleWidth);
                const stickyScaleHeight = JSON.parse(stickyEl.dataset.scaleHeight);
                const stickyBorderRadius = JSON.parse(stickyEl.dataset.borderRadius);
                const stickyTranslate = JSON.parse(stickyEl.dataset.translate);

                console.log(`Section 0 모션 진행중...`);

                if(!this.absTop){
                    this.absTop = this.scrollMotion.yOffset + this.scrollMotion.currentScene.getBoundingClientRect().top;
                }

                // let currentYOffset = (this.scrollMotion.yOffset + this.scrollMotion.defaults.threshold) - this.absTop;
                let currentYOffset = this.scrollMotion.yOffset - this.absTop;
                let scrollRatio = currentYOffset / this.scrollMotion.scrollSection[this.scrollMotion.currentIndex].scrollHeight;
                console.log(`Section ${this.scrollMotion.currentIndex} scrollRatio`, scrollRatio);

                stickyEl.parentElement.style.alignItems = 'flex-start';

                if (scrollRatio >= 0.05) {
                    stickyEl.style.width = `${this.scrollMotion.calcValues(stickyScaleWidth, currentYOffset)}%`;
                    stickyEl.style.height = `${this.scrollMotion.calcValues(stickyScaleHeight, currentYOffset)}vh`;
                    stickyEl.style.borderRadius = `${this.scrollMotion.calcValues(stickyBorderRadius, currentYOffset)}vw`
                    stickyEl.style.transform = `translate(-50%, ${this.scrollMotion.calcValues(stickyTranslate, currentYOffset)}vh)`;
                    stickyEl.style.willChange = 'transform, width, height';
                    stickyEl.style.transformStyle = 'preserve-3d';
                }
                if (scrollRatio < 0.04) {
                    stickyEl.style.width = `${stickyScaleWidth[0]}%`;
                    stickyEl.style.height = `${stickyScaleHeight[0]}vh`;
                    stickyEl.style.borderRadius = '5vw';
                    stickyEl.style.transform = 'translate(-50%, 0)';
                }

                if(scrollRatio >= 0.6){
                    stikcyMessage.classList.remove('!hidden');
                }else if(scrollRatio < 0.6 && scrollRatio > 0.2){
                    // stikcyMessage.classList.add('!hidden');
                    [...stikcyMessage.querySelectorAll('[data-effect]')].forEach((el) => {
                        el.classList.remove('show-in');
                    });
                }else{
                    stikcyMessage.classList.add('!hidden');
                }

                const alphabet = Array(20).fill().map((v, i) => String.fromCharCode(i + 97));
                alphabet.map(ch => {
                    const messageTit = this.scrollMotion.currentScene.querySelector(`.message-tit-${ch}`); 
                    const messageTit_opacityOut = JSON.parse(messageTit.dataset.opacityOut);
                    const messageTit_translateyOut = JSON.parse(messageTit.dataset.translateyOut);

                    if (scrollRatio >= 0.01) {
                        messageTit.style.opacity = `${this.scrollMotion.calcValues(messageTit_opacityOut, currentYOffset)}`;
                        messageTit.style.transform = `translateY(${this.scrollMotion.calcValues(messageTit_translateyOut, currentYOffset)}px)`;
                        messageTit.style.willChange = 'transform, width, height';
                        messageTit.style.transformStyle = 'preserve-3d';
                    }else{
                        messageTit.style.transform = `translateY(0px)`;
                    }
                    
                    return null;
                })

                if(stickyEl.style.height === '100vh'){
                    stickyEl.classList.add('!fixed');
                } else{
                    stickyEl.classList.remove('!fixed');
                }
            }else if(currentIndex === 1){
                console.log(`Section 1 모션 진행중...`);            
                // const stickyEl = this.scrollMotion.scrollSection[currentIndex - 1].querySelector('.app__cover-img');
                // stickyEl.style.width = '100%';
                // stickyEl.style.height = '100vh';
                // stickyEl.style.borderRadius = '0';
                // stickyEl.style.transform = 'translate(-50%, -80vh)';
            }else if(currentIndex === 2){
                console.log(`Section 2 모션 진행중...`);
            }else if(currentIndex === 3){
                console.log(`Section '3 모션 진행중...`);
            }else if(currentIndex === 4){ 
                console.log(`Section '4 모션 진행중...`);

                this.absTop2 = this.scrollMotion.yOffset + this.scrollMotion.currentScene.getBoundingClientRect().top;
                let currentYOffset = (this.scrollMotion.yOffset + this.scrollMotion.defaults.threshold) - this.absTop2;
                let scrollRatio = currentYOffset / this.scrollMotion.scrollSection[this.scrollMotion.currentIndex].scrollHeight;

                const appScene = this.scrollMotion.currentScene;
                const appMaindesc = this.scrollMotion.currentScene.querySelector('.app__message-desc');
                const appBackgroundColor = JSON.parse(appScene.dataset.backgroundColor);

                const mainImageA = this.scrollMotion.currentScene.querySelector('.main-image-a');
                const mainImageA2 = this.scrollMotion.currentScene.querySelector('.main-image-a2');
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
                const messageE_translateyIn = JSON.parse(messageE.dataset.translateyIn);
                
                console.log(`${this.scrollMotion.currentIndex} scrollRatio`, scrollRatio);

                if (scrollRatio <= 0.03){
                    appScene.style.backgroundColor = `#${appBackgroundColor[0]}`;
                }
                if (scrollRatio > 0.03 && scrollRatio <= 0.25){
                    appScene.style.backgroundColor = `#${appBackgroundColor[1]}`;
                }
                if (scrollRatio > 0.25 && scrollRatio <= 0.45){
                    appScene.style.backgroundColor = `#${appBackgroundColor[2]}`;
                }
                if (scrollRatio > 0.45 && scrollRatio <= 0.65){
                    appScene.style.backgroundColor = `#${appBackgroundColor[3]}`;
                }
                if (scrollRatio > 0.65 && scrollRatio <= 0.85){
                    appScene.style.backgroundColor = `#${appBackgroundColor[4]}`;
                    appMaindesc.style.color = '#fff';
                }
                if (scrollRatio > 0.85){
                    appMaindesc.style.color = 'var(--desc-text-color)';
                    appScene.style.backgroundColor = `#${appBackgroundColor[5]}`;
                }

                if (appScene.getBoundingClientRect().top < 0){
                    mainImageA2.classList.add('active');
                }else if(appScene.getBoundingClientRect().top > 0 && appScene.getBoundingClientRect().top < window.innerHeight/2){
                    mainImageA2.classList.contains('active') && mainImageA2.querySelector('img').classList.add('fade-out');
                    setTimeout(() => {
                        mainImageA2.classList.remove('active');
                        mainImageA2.querySelector('img').classList.remove('fade-out');
                    }, 500)
                }

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
                    mainImageA.classList.add('active');
                } else if (scrollRatio < 0.07) {
                    mainImageA.classList.remove('active');
                } else if (scrollRatio > 0.22) {
                    mainImageA.classList.remove('active');
                }

                if(scrollRatio > 0.22 && scrollRatio < 0.25){
                    // mainImageA2.classList.add('fade-out');
                }else if (scrollRatio > 0.26){
                    mainImageA2.classList.remove('active');
                    // mainImageA2.classList.remove('fade-out');
                }
                
                if (scrollRatio <= 0.3){
                    messageB.style.opacity = `${this.scrollMotion.calcValues(messageB_opacityIn, currentYOffset)}`;
                    messageB.style.transform = `translateY(${this.scrollMotion.calcValues(messageB_translateyIn, currentYOffset)}vh)`;
                    messageB.style.willChange = 'transform, width, height';
                    messageB.style.transformStyle = 'preserve-3d';
                } else if (scrollRatio > 0.32){
                    mainImageA2.classList.remove('fade-out');
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

                if (scrollRatio >= 0.76){                    
                    messageE.style.opacity = `${this.scrollMotion.calcValues(messageE_opacityIn, currentYOffset)}`;
                    messageE.style.transform = `translate(-50%, ${this.scrollMotion.calcValues(messageE_translateyIn, currentYOffset)}vh)`;
                    messageE.style.willChange = 'transform, width, height';
                    messageE.style.transformStyle = 'preserve-3d';
                } 
                

            }else if(currentIndex === 5){             
            }else if(currentIndex === 7){
            }else if(currentIndex === 8){
            }else if(currentIndex === 9){
            }

            const stickyElem = this.scrollMotion.scrollSection[0].querySelector('.app__cover-img');
            if(currentIndex > 0) {
                stickyElem.style.width = '100%';
                stickyElem.style.height = '100vh';
                stickyElem.style.borderRadius = '0';
                stickyElem.style.transform = 'translate(-50%, -80vh)';
            }else{
                stickyElem.style.borderRadius = '5';
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