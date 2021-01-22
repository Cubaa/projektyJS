document.body.addEventListener('keypress', onKeyPress);
const channel = [];
let recordStart 
const singlePlate = document.getElementById('Crash-Cymbol')
const doublePlateTop = document.getElementById('Hi-Hat-Top')
const doublePlateBottom = document.getElementById('Hi-Hat-Bottom')
const kickDrum = document.getElementById('Kick')
const snareDrum = document.getElementById('Snare-Drum')
const floorTomDrum = document.getElementById('Floor-Tom-Drum')
const leftTomDrum = document.getElementById('Tom-Left-Drum')
const rightTomDrum = document.getElementById('Tom-Right-Drum')
const btnChannels = document.querySelectorAll('button.channel')
const select = document.getElementById("mySelect");
const selectOption =  document.querySelectorAll("#mySelect option");
const playAllbtn = document.querySelector('.playAll')
let yourChannelChoice

let channel1= []
let channel2=[]
let channel3= []
let channel4= []
const allCanals = [channel1, channel2, channel3, channel4]
let time
document.querySelector('#playBtn').addEventListener('click', (e)=>playChannel(e, yourChannelChoice, time));

btnChannels.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    console.log("klik")
  })

})


    
   select.addEventListener("change", (e)=>{
      console.log("klik", select.value)
      time = 0
      recordStart = Date.now();
      if(select.value==="channel1")
      yourChannelChoice=channel1
     else if(select.value==="channel2")
     yourChannelChoice=channel2
     else if(select.value==="channel3")
     yourChannelChoice=channel3
     else yourChannelChoice=channel4

     
    })
  




function singleClap() {
    singlePlate.classList.add('moveSinglePlate')
  }
  function singleClap2() {
singlePlate.classList.remove('moveSinglePlate')
  }
  function doubleClap() {
    doublePlateTop.classList.add('moveDoublePlate')
    doublePlateBottom.classList.add('moveDoublePlate')
  }
  function doubleClap2() {
    doublePlateTop.classList.remove('moveDoublePlate')
    doublePlateBottom.classList.remove('moveDoublePlate')
  }
  function moveKickDrum() {
    kickDrum.classList.add('moveKickDrum')
  }
  function moveKickDrum2() {
kickDrum.classList.remove('moveKickDrum')
  }
  function moveSnareDrum() {
    snareDrum.classList.add('moveSnareDrum')
  }
  function moveSnareDrum2() {
snareDrum.classList.remove('moveSnareDrum')
  }
  function moveFloorTomDrum() {
   floorTomDrum.classList.add('moveFloorTomDrum')
  }
  function moveFloorTomDrum2() {
floorTomDrum.classList.remove('moveFloorTomDrum')
  }
  function moveLeftTomDrum() {
    leftTomDrum.classList.add('moveLeftTomDrum')
   }
   function moveLeftTomDrum2() {
 leftTomDrum.classList.remove('moveLeftTomDrum')
   }
   function moveRightTomDrum() {
    rightTomDrum.classList.add('moveRightTomDrum')
   }
   function moveRightTomDrum2() {
 rightTomDrum.classList.remove('moveRightTomDrum')
   }
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case 'KeyA':
            soundName = 'boom';
            sound = document.querySelector('#boom');
            break;
        case 'KeyS':
            soundName = 'clap';
            sound = document.querySelector('#clap');
            break;
        case 'KeyD':
            soundName = 'hihat';
            sound = document.querySelector('#hihat');
            document.body.addEventListener("keydown", doubleClap())
            document.body.addEventListener("keyup", doubleClap2)
            break;
        case 'KeyF':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            document.body.addEventListener("keydown", moveKickDrum())
            document.body.addEventListener("keyup", moveKickDrum2)
            break;
        case 'KeyG':
            soundName = 'openhat';
            sound = document.querySelector('#openhat');
            document.body.addEventListener("keydown", singleClap())
            document.body.addEventListener("keyup", singleClap2)
            break;
        case 'KeyZ':
            soundName = 'snare';
            sound = document.querySelector('#snare');
            document.body.addEventListener("keydown", moveSnareDrum())
            document.body.addEventListener("keyup", moveSnareDrum2)
            break;
        case 'KeyX':
            soundName = 'tom';
            sound = document.querySelector('#tom');
            document.body.addEventListener("keydown", moveFloorTomDrum())
            document.body.addEventListener("keyup", moveFloorTomDrum2)
            break;
        case 'KeyJ':
            soundName = 'tom';
            sound = document.querySelector('#tom');
            document.body.addEventListener("keydown", moveLeftTomDrum())
            document.body.addEventListener("keyup", moveLeftTomDrum2)
            break;
         case 'KeyK':
            soundName = 'tom';
            sound = document.querySelector('#tom');
            document.body.addEventListener("keydown", moveRightTomDrum())
            document.body.addEventListener("keyup", moveRightTomDrum2)
                break;
    }
    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        if(Array.isArray(yourChannelChoice)){
          console.log(yourChannelChoice)
          if(yourChannelChoice!=="chooseCanal")
            yourChannelChoice.push(recordedSound);
          else return alert("Wybierz kanał")
      }
        sound.play();
    }
}

function playChannel(e, channelNumber, time) {
  console.log(channelNumber)
  console.log("GOOOO")

    for (let index = 0; index < channelNumber.length; index++) {
        const soundObject = channelNumber[index];
        setTimeout(
            () => {
                playSound(soundObject.sound);
            },
            soundObject.time
        );
    }


}
function playSound(soundName) {
    const sound = document.querySelector('#' + soundName);
    sound.play();
}
playAllbtn.addEventListener("click", ()=>{
  for (let i = 0; i < allCanals.length; i++) {
    for (let j = 0; j < allCanals[i].length; j++) {
      const soundObject = allCanals[i][j];
      setTimeout(
        () => {
            playSound(soundObject.sound);
        },
        soundObject.time
    );
      
    }
    
  }
})