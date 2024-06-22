// var folower = document.getElementById('Folower');
// var InitialState = {
//     x:300,
//     y:300
// }
// folower.style.left = `${InitialState.x}px`;
// folower.style.top = `${InitialState.y}px`;

// function UpdateState(UpX,UpY) {
// InitialState.x = UpX
// InitialState.y = UpY
// }
// function UpdatePos() {
//     folower.style.left = `${InitialState.x -9}px`;
// folower.style.top = `${InitialState.y - 9}px`;
// requestAnimationFrame(UpdatePos);
// }
// document.addEventListener('mousemove',(Event)=> {
//     UpdateState(Event.clientX,Event.clientY);
//     UpdatePos()


// })

// var Button = document.getElementById('Button');
// var Energy_tab = document.getElementById('Energy');
// var Energy = 1500;
// var LvlTab = document.getElementById('LvlBar');
// var Lvl_bar = document.getElementById('Lvl');
// var Lvl= 1;
// var Coin_tab = document.getElementById('Coin')
// Energy_tab.innerHTML = Energy
// var LvlUp = {
//     1:.1,
//     2:0.090,
//     3:0.080,
//     4:0.070,
//     5:0.060,
//     6:0.050,
//     7:0.040,
//     8:0.030,
//     9:0.020,
//     10:0.010,
//     11:0.090,
//     12:0.090,
//     13:0.090,
//     14:0.090,
//     15:0.090,
//     16:0.090,
//     17:0.090,
//     18:0.090,
//     19:0.090,
//     20:0.090,
//     21:0.090,
//     22:0.090,
//     23:0.090,
//     24:0.090,
//     25:0.090,
//     26:0.090,
//     27:0.090,
//     28:0.090,
//     29:0.090,
//     30:0.090,
//     31:0.090,
//     32:0.090,
//     33:0.090,
//     34:0.090,
//     35:0.090,
//     36:0.090,
//     37:0.090,
//     38:0.090,
//     39:0.090,
//     40:0.090,
//     41:0.090,

// }
// LvlTab.innerHTML = Lvl;
// Coin_tab.innerHTML = 0
// var Coin = 0
// var Coin_multiple = 1;
// function UpdateTab() {
//     Energy_tab.innerHTML= Energy;
//     LvlTab.innerText = Lvl;
//     Coin_tab.innerText = Coin;
// }

// Button.addEventListener('click',(Event)=> {

//     UpdateTab()
//     if(Energy > 5 ) {
// Coin+=1 *Coin_multiple
//         if(Lvl_bar.value == 1) {
//            Coin_multiple*=2
//             Lvl_bar.value = 0
//             Lvl++
//         }
//         Lvl_bar.value += LvlUp[Lvl]
//         Energy-=5
//     var Effect = document.createElement('div');
//     Effect.classList.add('Effect');
//     Effect.innerHTML = '1'
//     Effect.style.left = `${Event.clientX - 9}px`
//     Effect.style.top = `${Event.clientY - 9}px`
//     Button.append(Effect)
//    setTimeout(() => {
//     Effect.style.top = '-30px'
//    }, 50);

//    setTimeout(() => {
//     Effect.remove()
//    }, 1000 );
// }
// })


// setInterval(() => {
//     if(Energy_tab.innerHTML <1995) {
//     Energy+=5
//     UpdateTab()
//     }
  
// }, 1000);



// var TotalInfo = {
//     lvl:Lvl,
//     energy:Energy,
//     lvlBar:Lvl_bar
// }




// var Filter = document.getElementById('Filter')



// var InitialState = {
//     x:300,
//     y:300
// }
// Filter.style.left = `${InitialState.x}px`;
// Filter.style.top = `${InitialState.y}px`;

// function UpdateState(UpX,UpY) {
// InitialState.x = UpX
// InitialState.y = UpY
// }
// function UpdatePos() {
//     Filter.style.left = `${InitialState.x-50 }px`;
// Filter  .style.top = `${InitialState.y - 50}px`;
// requestAnimationFrame(UpdatePos);
// }
// document.addEventListener('mousemove',(Event)=> {
//     UpdateState(Event.clientX,Event.clientY);
//     UpdatePos()


// })



var result = document.getElementById('Result')


const height = new webkitSpeechRecognition() || new SpeechRecognition();
var transcript_height
// Устанавливаем язык (по умолчанию используется язык браузера)
height.lang = 'ru';

// Устанавливаем обработчик события при распознавании речи
height.onresult = function(event) {
  transcript_height = event.results[0][0].transcript;
    result.style.height =`${parseInt(transcript_height)}px`
console.log(transcript_height);
};




const radius = new webkitSpeechRecognition() || new SpeechRecognition();
var transcript_radius
// Устанавливаем язык (по умолчанию используется язык браузера)
radius.lang = 'ru';

// Устанавливаем обработчик события при распознавании речи
radius.onresult = function(event) {
  transcript_radius = event.results[0][0].transcript;
    result.style.borderRadius =`${parseInt(transcript_radius)}px`
console.log(transcript_radius);
};




// Создаем объект распознавания речи
const width = new webkitSpeechRecognition() || new SpeechRecognition();
var transcript_width
// Устанавливаем язык (по умолчанию используется язык браузера)
width.lang = 'ru';

// Устанавливаем обработчик события при распознавании речи
width.onresult = function(event) {
  transcript_width = event.results[0][0].transcript;
    result.style.width =`${parseInt(transcript_width)}px`
console.log(transcript_width);
};

const bg = new webkitSpeechRecognition() || new SpeechRecognition();
var transcript_bg
// Устанавливаем язык (по умолчанию используется язык браузера)
bg.lang = 'en-US';

// Устанавливаем обработчик события при распознавании речи
bg.onresult = function(event) {
  transcript_bg = event.results[0][0].transcript;
    result.style.backgroundColor =transcript_bg
console.log(transcript_bg);
};

var Width = document.getElementById('Width')

var Height = document.getElementById('Height')

var Radius = document.getElementById('Radius')

var BgColor = document.getElementById('BgColor')



Width.addEventListener('click',()=> {
  
    width.start();
  
})
Height.addEventListener('click',()=> {
    height.start();  
})
BgColor.addEventListener('click',()=> {
    bg.start()
})


Radius.addEventListener('click',()=> {
  
    radius.start();
  
})