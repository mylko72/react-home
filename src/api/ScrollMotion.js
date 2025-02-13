import { getAllElements, setPxToVw, callByObserver, isNumber } from './ScrollFunction.js'

export default class ScrollMotion {
    defaults = {
        threshold: 0,
        yDirection: null,
        prevScrollHeight: 0,
        scrollX: 0,
        stickyScollY: 0,
    }

    scrollSection;
    motionSelector;
    currentScene;
    currentIndex = 0;
    yOffset = 0;
    callCnt = 0;
    queueElements = [];
    queueElementsSource = [];
    queueApi = () => {};
    queueFlags = {};
    queueInterval = null;
    executeQueue = true;

    constructor(sceneElem, motionElem, options={threshold: 0}){
        this.scrollSection = document.querySelectorAll(sceneElem);
        this.motionSelector = document.querySelectorAll(motionElem);        
        this.init(options);
    }

    init(options){
        this.defaults = {...this.defaults, ...options};
        this.defaults.threshold = window.innerHeight * options.threshold;

        this.render();
        this.attachEvents();
        this.setActiveScene();
        this.setObserver();
    }

    render(){
        this.setDataSet(this.motionSelector);        

        const splitText = document.querySelectorAll('[data-split-txt]');   
        splitText.length && this.splitMessage(splitText);

        const splitElement = document.querySelectorAll('[data-split-effect]');
        splitElement.length && this.splitEffect(splitElement);

        // 스크롤섹션을 순회하며 섹션마다 스크롤 높이를 설정
        // [...this.scrollSection].forEach((section, index) => {
        //     if(section.dataset.type === 'sticky'){
        //         const scrollHeight = JSON.parse(section.dataset?.heightnum) * window.innerHeight;
        //         section.style.height = `${scrollHeight}px`;
        //     } else {
        //         const scrollHeight = section.offsetHeight + window.innerHeight * 0.5;    
        //         section.style.height = `${scrollHeight}px`;
        //     } 
        // });
        this.updateHeight();
    }

    updateHeight(){
        this.yOffset = this.currentIndex > 0 ? window.scrollY + this.defaults.threshold : window.scrollY;

        // 화면 로딩시 현재 스크롤 값보다 각 섹션을 더한 스크롤높이가 큰 경우
        // 현재 활성화된 스크롤섹션이므로 i를 currentIndex로 설정
        let totalScrollHeight = 0;
        for(let i=0; i<this.scrollSection.length; i++){
           totalScrollHeight += this.scrollSection[i].scrollHeight;
           if(totalScrollHeight >= this.yOffset){
              this.currentIndex = i;
              break;
           }
        }
        console.log('totalScrollHeight', totalScrollHeight);
    }

    attachEvents(){
        window.addEventListener('scroll', (e) => {
            const yOffset = this.currentIndex > 0 ? this.yOffset - this.defaults.threshold : this.yOffset;
            this.defaults.yDirection = yOffset > window.scrollY ? 'up' : 'down';
            this.yOffset = this.currentIndex > 0 ? window.scrollY + this.defaults.threshold : window.scrollY;
            // console.log('direction', this.defaults.yDirection);
            this.setActiveScene();
        });
    }

    detachEvents(){
    }

    toFitScroll(callback){
        let tick = false

        return function trigger () {
            if (tick) {
                return
            }
            tick = true
            return requestAnimationFrame(function task() {
                tick = false
                return callback()
            })
        }
    }

    setDataSet(selectors){
        selectors.length && [...selectors].forEach((selector) => {
            const { effect, transform: translate, delay, duration, timingFunction } = selector.dataset;

            !!effect && selector.classList.add(effect);
            !!translate && (selector.style.transform = translate);
            !!delay && (selector.style.transitionDelay = `${delay}`);
            !!duration && (selector.style.transitionDuration = `${duration}`);
            !!timingFunction && (selector.style.transitionTimingFunction = `${timingFunction}`);
        });
    }

    setObserver(){
        // 인터렉션 관찰
        this.motionSelector = getAllElements('[data-effect]');
        this.motionSelector.length && [...this.motionSelector].forEach((selector) => {
            let opt = !!selector.dataset.options && JSON.parse(selector.dataset.options);
            let marginGap = window.innerWidth > 768 ? window.innerHeight * 0 : window.innerHeight * 0;
            let config = {...{ rootMargin: `0px 0px -${marginGap}px 0px`, threshold: 0.2 }, ...opt}            
            callByObserver({target: selector, showCallback: this.addShow.bind(this), keepObserver:false, options: config });
        });  
        getAllElements('[data-sequence]').length && [...getAllElements('[data-sequence]')].forEach((selector) => {
            let opt = !!selector.dataset.options && JSON.parse(selector.dataset.options);
            let marginGap = window.innerWidth > 768 ? window.innerHeight * 0 : window.innerHeight * 0;
            let config = {...{ rootMargin: `0px 0px -${marginGap}px 0px`, threshold: 0.2 }, ...opt}            
            callByObserver({target: selector, showCallback: this.playAniSequence.bind(this), keepObserver:false, options: config });
        });
    }

    setActiveScene(){
        this.defaults.prevScrollHeight = 0;

        // 스크롤 이벤트가 발생할 때 마다 현재 활성화된 섹션과 인덱스를 가져온다.
        this.scrollSection.forEach((section, idx) => {
            let offsetY = section.getBoundingClientRect().top;
            section.dataset.index = idx;
            if(offsetY <= this.defaults.threshold){
                this.currentIndex = Number(section.dataset.index);
                this.currentScene = section;
            }
        });

        // 스크롤 이벤트가 발생할 때 이전 스크롤높이의 합을 가져온다.
        [...this.scrollSection].filter((scene, i) => {
            if(i < this.currentIndex){
               return this.defaults.prevScrollHeight += scene.scrollHeight;
            }
            return false;
        });

        if(!this.currentScene) return false;

        if(!this.currentScene.classList.contains('active')){
            // 현재 섹션이 active될 때 한번 실행 
            if(this.currentIndex === '0'){
                console.log(`Section 1 모션 시작...`);
            }
            if(this.currentIndex === '1'){
                console.log(`Section 2 모션 시작...`);
            }
            if(this.currentIndex === '2'){
                console.log(`Section 3 모션 시작...`);
            }                
            if(this.currentIndex === '3'){
                console.log(`Section 4 모션 시작...`);
            }                
            if(this.currentIndex === '4'){
                console.log(`Section 5 모션 시작...`);
            }    
            if(this.currentIndex === '5'){
                console.log(`Section 6 모션 시작...`);
            }    
            if(this.currentIndex === '6'){
                console.log(`Section 7 모션 시작...`);
            }    
            if(this.currentIndex === '7'){
                console.log(`Section 8 모션 시작...`);
            }    
            if(this.currentIndex === '8'){
                console.log(`Section 9 모션 시작...`);
            }    
            if(this.currentIndex === '9'){
                console.log(`Section 10 모션 시작...`);
            }                
            if(this.currentIndex === '11'){
                console.log(`Section 12 모션 시작...`);
            }                
        } else {
            // active된 현재 섹션의 모션 구현
            this.playAnimation(this.currentIndex);
        }

        this.scrollSection.forEach(section => section.classList.remove('active'));
        this.currentScene.classList.add('active'); 
    }  

    playSvgAnimation(svgElem, options){
        options?? (options = {});
        options.repeat?? (options.repeat = true);
        
        const outlinePath = svgElem.querySelector('.path');
        const outlineLength = outlinePath.getTotalLength();

        if(!options.repeat && JSON.parse(outlinePath.dataset.callCnt) > 0){
            return false;
        }

        outlinePath.style.strokeDasharray = outlineLength;
        outlinePath.style.strokeDashOffset = outlineLength;

        let duration = 60;
        let elapsed = 60;
        
        console.log('call svg ani...');
        
        function animate(offset) {
            setTimeout(() => {
                elapsed--;
                if (elapsed < 0){
                    elapsed = 60;
                    return false;
                }
                animate((elapsed / duration) * outlineLength);
            }, 20);
            outlinePath.style.strokeDashoffset = offset;
        }

        animate(outlineLength);
        outlinePath.dataset.callCnt = JSON.parse(outlinePath.dataset.callCnt)+1;
    }
    
    setAnimationListener(onPlayAnimation){
        this.onPlayAnimation = onPlayAnimation;
    }

    playAniSequence(target){
        const elements = target.querySelectorAll('.app__cover-img, .app__message-tit');

        this.setAnimationQueue()(() => {
            if(!elements[0]) return;
            console.log('processing Queue1...')
            elements[0].style.transitionDuration = `${elements[0].dataset.duration}`;
            elements[0].style.transitionTimingFunction = `${elements[0].dataset.timingFunction}`;
            this.addShow(elements[0]);
        })(`${parseFloat(elements[0].dataset.duration)*1000}`)(() => {
            if(!elements[1]) return;
            console.log('processing Queue2...')

            elements[1].style.transitionDuration = `${elements[1].dataset.duration}`;
            elements[1].style.transitionTimingFunction = `${elements[1].dataset.timingFunction}`;
            this.addShow(elements[1]);
        })(`${parseFloat(elements[1].dataset.duration)*1000}`)(() => {
            if(!elements[2]) return;
            console.log('processing Queue3...')

            elements[2].style.transitionDuration = `${elements[2].dataset.duration}`;
            elements[2].style.transitionTimingFunction = `${elements[2].dataset.timingFunction}`;
            this.addShow(elements[2]);
        })();
    }

    // 애니메이션 Queue 정의
    setAnimationQueue(){
        let self = this;        

        this.queueApi = function() {
            if(arguments.length === 0){
                // 실행...
                self.playQueue();
            }else{
                // 큐에 추가...
                self.addQueue.apply(self, arguments);
            }
            return self.queueApi;
        }
        return this.queueApi;
    }    

    // Queue 실행
    playQueue(){
        if(this.queueElements.length > 0){
            const item = this.queueElements.shift();
            if(this.queueFlags.stop !== true){
                if(isNumber(item)){ // delay
                    this.queueInterval = setTimeout(this.queueApi, item);
                }else if(typeof item === 'function'){   // function
                    item();
                    this.queueApi();
                }
            }else{
                clearTimeout(this.queueInterval);
            }
        }else{
            // queue is empty
            if(typeof this.queueFlags.callback !== 'undefined') this.queueFlags.callback();
            if(this.queueFlags.loop){
                this.queueElements = [];
                this.queueElementsSource.forEach(el => {
                    this.queueElements.push(el);
                });
                this.queueApi();
            }
        }
    }

    // Queue에 추가
    addQueue(){
        const item = arguments[0];

        if(isNumber(item) || typeof item === 'function'){
            this.queueElements.push(item);
            this.queueElementsSource.push(item);
        }else if(typeof item === 'string'){
            this.queueFlags[item] = arguments[1] || true;
        }
    }

    splitMessage(splitText){        
        [...splitText].forEach((el) => {
            let sec = 0.15;
            const splitArr = el.textContent.split('');
            const { effect, duration } = el.dataset;

            !!duration && (sec = duration);

            splitArr.forEach((char, i) => {
                let spanEl = document.createElement('span');
                spanEl.setAttribute('data-effect', '');
                spanEl.className = 'app__mask';
                spanEl.ariaHidden = 'true';
                spanEl.innerHTML = `<span class="app__message-tit ${el.tagName.toLowerCase()}-txt ${effect}" data-effect style="display:inline-block; transition-duration:.8s; transition-delay: ${sec*i}s">${char}</span>`;
                el.parentElement.append(spanEl);
            });

            [...el.parentElement.querySelectorAll('.span-txt')].forEach((span) => {
                span.addEventListener('transitionend', () => {
                    console.log('transition end...');
                    span.closest('.app__mask').style.overflow = 'visible';
                });
            });
        });
    }

    splitEffect(splitElement){
        [...splitElement].forEach((el) => {
            let sec = 0.06;
            const number = 20;
            const size = el.clientWidth / number;
            const { splitEffect: effect, duration } = el.dataset
            const effectWrap = document.createElement('div');
            effectWrap.className = 'app__mask';
            !!duration && (sec = duration);

            for(let i = 0; i < number; i++){
                effectWrap.innerHTML += `<span class="${effect}" style="display:inline-block; width: ${size}px; transition-delay: ${sec*i}s" data-effect></span>`;
            }
            el.prepend(effectWrap);
        })
    }

    slideEffect(target){
        const { slideWidth, slideHeight, slideDesktop, slideMobile} = target.dataset;

        const desktopVal = setPxToVw(slideDesktop);
        const mobileVal = setPxToVw(slideMobile);

        if(!!slideWidth){
            target.style.width = window.innerWidth > 768 ? `${desktopVal}vw` : `${mobileVal}vw`;
        }

        if(!!slideHeight){
            target.style.height = window.innerWidth > 768 ? `${desktopVal}vw` : `${mobileVal}vw`;
        }

        return target;
    }

    addShow(target){
        let { slideWidth, slideHeight, sec} = target.dataset;
        let time = !!sec ? parseFloat(sec)*1000 : 0;

        if(!!slideWidth || !!slideHeight){
            target = this.slideEffect(target);
        }

        setTimeout(() => {
            target.classList.add('show-in');
        }, time);
    }

    playAnimation(currentIndex){
        this.onPlayAnimation && this.onPlayAnimation(currentIndex);
    }

    // 스크롤 비율에 따른 값 연산
    calcValues(values, currentYOffset){
        let rv;
        const lastScene = this.currentIndex === (this.scrollSection.length-1);
        const scrollHeight = lastScene ? this.scrollSection[this.currentIndex].scrollHeight - window.innerHeight : this.scrollSection[this.currentIndex].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        // values의 타이밍속성이 3번째 있는지 분기처리
        if (values.length === 3) {
        // start ~ end 사이에 애니메이션 실행
        const partScrollStart = JSON.parse(values[2].start) * scrollHeight;
        const partScrollEnd = JSON.parse(values[2].end) * scrollHeight;
        const partScrollHeight = partScrollEnd - partScrollStart;

        if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
            rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
        } else if (currentYOffset < partScrollStart) {
            rv = values[0];
        } else if (currentYOffset > partScrollEnd) {
            rv = values[1];
        }
        } else {
        rv = scrollRatio * (values[1] - values[0]) + values[0];
        }                

        return rv;
    }
}