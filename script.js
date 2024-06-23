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



// var result = document.getElementById('Result')


// const height = new webkitSpeechRecognition() || new SpeechRecognition();
// var transcript_height
// // Устанавливаем язык (по умолчанию используется язык браузера)
// height.lang = 'ru';

// // Устанавливаем обработчик события при распознавании речи
// height.onresult = function(event) {
//   transcript_height = event.results[0][0].transcript;
//     result.style.height =`${parseInt(transcript_height)}px`
// console.log(transcript_height);
// };




// const radius = new webkitSpeechRecognition() || new SpeechRecognition();
// var transcript_radius
// // Устанавливаем язык (по умолчанию используется язык браузера)
// radius.lang = 'ru';

// // Устанавливаем обработчик события при распознавании речи
// radius.onresult = function(event) {
//   transcript_radius = event.results[0][0].transcript;
//     result.style.borderRadius =`${parseInt(transcript_radius)}px`
// console.log(transcript_radius);
// };




// // Создаем объект распознавания речи
// const width = new webkitSpeechRecognition() || new SpeechRecognition();
// var transcript_width
// // Устанавливаем язык (по умолчанию используется язык браузера)
// width.lang = 'ru';

// // Устанавливаем обработчик события при распознавании речи
// width.onresult = function(event) {
//   transcript_width = event.results[0][0].transcript;
//     result.style.width =`${parseInt(transcript_width)}px`
// console.log(transcript_width);
// };

// const bg = new webkitSpeechRecognition() || new SpeechRecognition();
// var transcript_bg
// // Устанавливаем язык (по умолчанию используется язык браузера)
// bg.lang = 'en-US';

// // Устанавливаем обработчик события при распознавании речи
// bg.onresult = function(event) {
//   transcript_bg = event.results[0][0].transcript;
//     result.style.backgroundColor =transcript_bg
// console.log(transcript_bg);
// };

// var Width = document.getElementById('Width')

// var Height = document.getElementById('Height')

// var Radius = document.getElementById('Radius')

// var BgColor = document.getElementById('BgColor')



// Width.addEventListener('click',()=> {
  
//     width.start();
  
// })
// Height.addEventListener('click',()=> {
//     height.start();  
// })
// BgColor.addEventListener('click',()=> {
//     bg.start()
// })


// Radius.addEventListener('click',()=> {
  
//     radius.start();
  
// })










// DomContent
var Button = document.getElementById('Button');
var Energy_tab = document.getElementById('Energy');
var LvlTab = document.getElementById('LvlBar');
var Lvl_bar = document.getElementById('Lvl');
var Coin_tab = document.getElementById('Coin');


// LevelMultiple
var LvlUp = {
    1: 0.1,
    2: 0.090,
    3: 0.080,
    4: 0.070,
    5: 0.060,
    6: 0.050,
    7: 0.040,
    8: 0.030,
    9: 0.020,
    10: 0.010,
    11: 0.0090,
    12: 0.0080,
    13: 0.0070,
    14: 0.0060,
    15: 0.0050,
    16: 0.0040,
    17: 0.0030,
    18: 0.0020,
    19: 0.0010,
    20: 0.0009,
    21: 0.0008,
    22: 0.0007,
    23: 0.0006,
    24: 0.0005,
    25: 0.0004,
    26: 0.0003,
    27: 0.0002,
    28: 0.0001,
    29: 0.00009,
    30: 0.00008,
    31: 0.00007,
    32: 0.00006,
    33: 0.00005,
    34: 0.00004,
    35: 0.00003,
    36: 0.00002,
    37: 0.00001,
    38: 0.000009,
    39: 0.000008,
    40: 0.000007,
    41: 0.000006,
    42: 0.000005,
    43: 0.000004,
    44: 0.000003,
    45: 0.000002,
    46: 0.000001,
    47: 0.0000009,
    48: 0.0000008,
    49: 0.0000007,
    50: 0.0000006,
    51: 0.0000005,
    52: 0.0000004,
    53: 0.0000003,
    54: 0.0000002,
    55: 0.0000001,
    56: 0.00000009,
    57: 0.00000008,
    58: 0.00000007,
    59: 0.00000006,
    60: 0.00000005,
    61: 0.00000004,
    62: 0.00000003,
    63: 0.00000002,
    64: 0.00000001,
    65: 0.000000009,
    66: 0.000000008,
    67: 0.000000007,
    68: 0.000000006,
    69: 0.000000005,
    70: 0.000000004,
    71: 0.000000003,
    72: 0.000000002,
    73: 0.000000001,
    74: 0.0000000009,
    75: 0.0000000008,
    76: 0.0000000007,
    77: 0.0000000006,
    78: 0.0000000005,
    79: 0.0000000004,
    80: 0.0000000003,
    81: 0.0000000002,
    82: 0.0000000001,
    83: 0.00000000009,
    84: 0.00000000008,
    85: 0.00000000007,
    86: 0.00000000006,
    87: 0.00000000005,
    88: 0.00000000004,
    89: 0.00000000003,
    90: 0.00000000002,
    91: 0.00000000001,
    92: 0.000000000009,
    93: 0.000000000008,
    94: 0.000000000007,
    95: 0.000000000006,
    96: 0.000000000005,
    97: 0.000000000004,
    98: 0.000000000003,
    99: 0.000000000002,
    100: 0.000000000001

}


// UserInfo
var Lv;
var Coin;
var Coin_multiple;
var Energy;

// preDomContentLoaded

    var ClientData = localStorage.getItem('totalInfo');
    if(ClientData) {
       ClientData = JSON.parse(ClientData)
     Lvl= ClientData.lvl;
Coin = ClientData.coin
Coin_multiple = ClientData.multiple
Energy = ClientData.energy
    }
    else {
         Lvl= 1;
 Coin = 0
 Coin_multiple = 1;
 Energy = 1500;

    }


Energy_tab.innerHTML = Energy
Energy_tab.innerHTML = Energy
LvlTab.innerHTML = Lvl;
Coin_tab.innerHTML = 0

function UpdateTab() {
    Energy_tab.innerHTML= Energy;
    LvlTab.innerText = Lvl;
    Coin_tab.innerText = Coin;
    UpdateOfflineInfo();
}
var TotalInfo = {
    lvl:Lvl,
    energy:Energy,
    lvlBar:Lvl_bar.value,
    coin:Coin,
    multiple:Coin_multiple
}
function UpdateOfflineInfo() {
    TotalInfo.lvl = Lvl;
    TotalInfo.coin = Coin;
    TotalInfo.energy = Energy;
    TotalInfo.lvlBar = Lvl_bar.value
    TotalInfo.multiple = Coin_multiple
}
Button.addEventListener('click',(Event)=> {

    localStorage.setItem('totalInfo',JSON.stringify(TotalInfo))
    UpdateTab()
    if(Energy > 5 ) {
Coin+=1 *Coin_multiple
        if(Lvl_bar.value == 1) {
           Coin_multiple*=2
            Lvl_bar.value = 0
            Lvl++
        }
        Lvl_bar.value += LvlUp[Lvl]
        Energy-=5
    var Effect = document.createElement('div');
    Effect.classList.add('Effect');
    Effect.innerHTML = '1'
    Effect.style.left = `${Event.clientX - 9}px`
    Effect.style.top = `${Event.clientY - 9}px`
    Button.append(Effect)
   setTimeout(() => {
    Effect.style.top = '-30px'
   }, 50);

   setTimeout(() => {
    Effect.remove()
   }, 1000 );
}
})


setInterval(() => {
    if(Energy <1500) {
    Energy+=5
    UpdateTab()
    }
 
  
}, 1000);



