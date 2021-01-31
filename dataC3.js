const items1 = [
{keycode:  "0" ,keyval:'That key has no keycode'},
{keycode:  "3" ,keyval:'break'},
{keycode:  "8" ,keyval:'backspace / delete'},
{keycode:  "9" ,keyval:'tab'},
{keycode:  "12",keyval: 'clear'},
{keycode:  "13",keyval: 'enter'},
{keycode:  "16",keyval: 'shift'},
{keycode:  "17",keyval: 'ctrl'},
{keycode:  "18",keyval: 'alt'},
{keycode:  "19",keyval: 'pause/break'},
{keycode:  "20",keyval: 'caps lock'},
{keycode:  "21",keyval: 'hangul'},
{keycode:  "25",keyval: 'hanja'},
{keycode:  "27",keyval: 'escape'},
{keycode:  "28",keyval: 'conversion'},
{keycode:  "29",keyval: 'non-conversion'},
{keycode:  "32",keyval: 'spacebar'},
{keycode:  "33",keyval: 'page up'},
{keycode:  "34",keyval: 'page down'},
{keycode:  "35",keyval: 'end'},
{keycode:  "36",keyval: 'home'},
{keycode:  "37",keyval: 'left arrow'},
{keycode:  "38",keyval: 'up arrow'},
{keycode:  "39",keyval: 'right arrow'},
{keycode:  "40",keyval: 'down arrow'},
{keycode:  "41",keyval: 'select'},
{keycode:  "42",keyval: 'print'},
{keycode:  "43",keyval: 'execute'},
{keycode:  "44",keyval: 'Print Screen'},
{keycode:  "45",keyval: 'insert'},
{keycode:  "46",keyval: 'delete'},
{keycode:  "47",keyval: 'help'},
{keycode:  "48",keyval: '0'},
{keycode:  "49",keyval: '1'},
{keycode:  "50",keyval: '2'},
{keycode:  "51",keyval: '3'},
{keycode:  "52",keyval: '4'},
{keycode:  "53",keyval: '5'},
{keycode:  "54",keyval: '6'},
{keycode:  "55",keyval: '7'},
{keycode:  "56",keyval: '8'},
{keycode:  "57",keyval: '9'},
{keycode:  "58",keyval: ':'},
{keycode:  "59",keyval: 'semicolon (firefox), equals'},
{keycode:  "60",keyval: '<'},
{keycode:  "61",keyval: 'equals (firefox)'},
{keycode:  "63",keyval: 'ß'},
{keycode:  "64",keyval: '@ (firefox)'},
{keycode:  "65",keyval: 'a'},
{keycode:  "66",keyval: 'b'},
{keycode:  "67",keyval: 'c'},
{keycode:  "68",keyval: 'd'},
{keycode:  "69",keyval: 'e'},
{keycode:  "70",keyval: 'f'},
{keycode:  "71",keyval: 'g'},
{keycode:  "72",keyval: 'h'},
{keycode:  "73",keyval: 'i'},
{keycode:  "74",keyval: 'j'},
{keycode:  "75",keyval: 'k'},
{keycode:  "76",keyval: 'l'},
{keycode:  "77",keyval: 'm'},
{keycode:  "78",keyval: 'n'},
{keycode:  "79",keyval: 'o'},
{keycode:  "80",keyval: 'p'},
{keycode:  "81",keyval: 'q'},
{keycode:  "82",keyval: 'r'},
{keycode:  "83",keyval: 's'},
{keycode:  "84",keyval: 't'},
{keycode:  "85",keyval: 'u'},
{keycode:  "86",keyval: 'v'},
{keycode:  "87",keyval: 'w'},
{keycode:  "88",keyval: 'x'},
{keycode:  "89",keyval: 'y'},
{keycode:  "90",keyval: 'z'},
{keycode:  "91",keyval: 'Windows Key / Left ⌘ / Chromebook Search key'},
{keycode:  "92",keyval: 'right window key'},
{keycode:  "93",keyval: 'Windows Menu / Right ⌘'},
{keycode:  "95",keyval: 'sleep'},
{keycode:  "96",keyval: 'numpad 0'},
{keycode:  "97",keyval: 'numpad 1'},
{keycode:  "98",keyval: 'numpad 2'},
{keycode:  "99",keyval: 'numpad 3'},
{keycode:  "100",keyval: 'numpad 4'},
{keycode:  "101",keyval: 'numpad 5'},
{keycode:  "102",keyval: 'numpad 6'},
{keycode:  "103",keyval: 'numpad 7'},
{keycode:  "104",keyval: 'numpad 8'},
{keycode:  "105",keyval: 'numpad 9'},
{keycode:  "106",keyval: 'multiply'},
{keycode:  "107",keyval: 'add'},
{keycode:  "108",keyval: 'numpad period (firefox)'},
{keycode:  "109",keyval: 'subtract'},
{keycode:  "110",keyval: 'decimal point'},
{keycode:  "111",keyval: 'divide'},
{keycode:  "112",keyval: 'f1'},
{keycode:  "113",keyval: 'f2'},
{keycode:  "114",keyval: 'f3'},
{keycode:  "115",keyval: 'f4'},
{keycode:  "116",keyval: 'f5'},
{keycode:  "117",keyval: 'f6'},
{keycode:  "118",keyval: 'f7'},
{keycode:  "119",keyval: 'f8'},
{keycode:  "120",keyval: 'f9'},
{keycode:  "121",keyval: 'f10'},
{keycode:  "122",keyval: 'f11'},
{keycode:  "123",keyval: 'f12'},
{keycode:  "124",keyval: 'f13'},
{keycode:  "125",keyval: 'f14'},
{keycode:  "126",keyval: 'f15'},
{keycode:  "127",keyval: 'f16'},
{keycode:  "128",keyval: 'f17'},
{keycode:  "129",keyval: 'f18'},
{keycode:  "130",keyval: 'f19'},
{keycode:  "131",keyval: 'f20'},
{keycode:  "132",keyval: 'f21'},
{keycode:  "133",keyval: 'f22'},
{keycode:  "134",keyval: 'f23'},
{keycode:  "135",keyval: 'f24'},
{keycode:  "136",keyval: 'f25'},
{keycode:  "137",keyval: 'f26'},
{keycode:  "138",keyval: 'f27'},
{keycode:  "139",keyval: 'f28'},
{keycode:  "140",keyval: 'f29'},
{keycode:  "141",keyval: 'f30'},
{keycode:  "142",keyval: 'f31'},
{keycode:  "143",keyval: 'f32'},
{keycode:  "144",keyval: 'num lock'},
{keycode:  "145",keyval: 'scroll lock'},
{keycode:  "151",keyval: 'airplane mode'},
{keycode:  "160",keyval: '^'},
{keycode:  "161",keyval: '!'},
{keycode:  "162",keyval: '؛ (arabic semicolon)'},
{keycode:  "163",keyval: '#'},
{keycode:  "164",keyval: '$'},
{keycode:  "165",keyval: 'ù'},
{keycode:  "166",keyval: 'page backward'},
{keycode:  "167",keyval: 'page forward'},
{keycode:  "168",keyval: 'refresh'},
{keycode:  "169",keyval: 'closing paren (AZERTY)'},
{keycode:  "170",keyval: '*'},
{keycode:  "171",keyval: '~ + * key'},
{keycode:  "172",keyval: 'home key'},
{keycode:  "173",keyval: 'minus (firefox), mute/unmute'},
{keycode:  "174",keyval: 'decrease volume level'},
{keycode:  "175",keyval: 'increase volume level'},
{keycode:  "176",keyval: 'next'},
{keycode:  "177",keyval: 'previous'},
{keycode:  "178",keyval: 'stop'},
{keycode:  "179",keyval: 'play/pause'},
{keycode:  "180",keyval: 'e-mail'},
{keycode:  "181",keyval: 'mute/unmute (firefox)'},
{keycode:  "182",keyval: 'decrease volume level (firefox)'},
{keycode:  "183",keyval: 'increase volume level (firefox)'},
{keycode:  "186",keyval: 'semi-colon / ñ'},
{keycode:  "187",keyval: 'equal sign'},
{keycode:  "188",keyval: 'comma'},
{keycode:  "189",keyval: 'dash'},
{keycode:  "190",keyval: 'period'},
{keycode:  "191",keyval: 'forward slash / ç'},
{keycode:  "192",keyval: 'grave accent / ñ / æ / ö'},
{keycode:  "193",keyval: '?, / or °'},
{keycode:  "194",keyval: 'numpad period (chrome)'},
{keycode:  "219",keyval: 'open bracket'},
{keycode:  "220",keyval: 'back slash'},
{keycode:  "221",keyval: 'close bracket / å'},
{keycode:  "222",keyval: 'single quote / ø / ä'},
{keycode:  "223",keyval: '`'},
{keycode:  "224",keyval: 'left or right ⌘ key (firefox)'},
{keycode:  "225",keyval: 'altgr'},
{keycode:  "226",keyval: '< /git >, left back slash'},
{keycode:  "230",keyval: 'GNOME Compose Key'},
{keycode:  "231",keyval: 'ç'},
{keycode:  "233",keyval: 'XF86Forward'},
{keycode:  "234",keyval: 'XF86Back'},
{keycode:  "235",keyval: 'non-conversion'},
{keycode:  "240",keyval: 'alphanumeric'},
{keycode:  "242",keyval: 'hiragana/katakana'},
{keycode:  "243",keyval: 'half-width/full-width'},
{keycode:  "244",keyval: 'kanji'},
{keycode:  "251",keyval: 'unlock trackpad (Chrome/Edge)'},
{keycode:  "255",keyval: 'toggle touchpad'},
]
function add_data(items){
  const table = document.getElementById("add_data_here");
  items.forEach(item =>{
    
    let row = table.insertRow();
    
    let code = row.insertCell(0);
    code.innerHTML=item.keycode;
    
    let key = row.insertCell(1);
    key.innerHTML = item.keyval;
    
  }) ;
}

add_data(items1);
document.getElementById("head").style.display="none";

var a;
function show_hide()
{
  if(a==1)
  {
    document.getElementById("head").style.display="none";
    return a=0; 
  }
  else
  {
    document.getElementById("head").style.display="inline";
    return a=1; 
  }
}


document.addEventListener("keydown", function (event) {
  console.log(event);
  
  document.body.innerHTML =
  `
    &nbsp;&nbsp;&nbsp;
    <b>which: ${event.which}</b>
    <br>&nbsp;
    <b>keyCode:</b> ${event.keyCode}
    <br>&nbsp;&nbsp;&nbsp;
    <b>shiftKey:</b> ${event.shiftKey}
    </br>&nbsp;&nbsp;&nbsp;&nbsp;
    <b>altKey:</b> ${event.altKey}
    <br>&nbsp;&nbsp;&nbsp;
    <b>ctrlKey:</b> ${event.ctrlKey}
    <br>&nbsp;&nbsp;
    <b>metaKey:</b> ${event.metaKey}
    <br>
    &nbsp;&nbsp; 
    <b>key:</b> ${event.key}<br>`
    
});



