//This file will be included in skulpt before comilation, as well as copied to app/assets,
//so the constants will be available both within skulpt code and outside of it.

//This is the distance of the edge of the map to the player character in all directions.
//The player character is considered to be at (0, 0), and the corners of the map are 
//(+/- MAP_MAX_INDEX, +/- MAP_MAX_INDEX). Therefore the side length of the map is 2*MAP_MAX_INDEX + 1
var MAP_MAX_INDEX = 12;

//conversion of integer to string direction
var direction = {0:'north', 1:'east',2:'south',3:'west'}

//A map of itemIds
var itemId = {
    'cake': 0,
    'nowhere' : 1,
    'handsfull' : 2,
    'nothing': 3,
    'occupied': 4
}

//A map of tile ids to their sprite representation
var tileSpritePaths = {
    0: '/images/tile/tile_dirt.png',
    1: '/images/tile/tile_sand.png',
    2: '/images/tile/tile_mud.png',
    3: 'images/tile/tile_placeholder.png', //acid
    4: 'images/tile/tile_placeholder.png', //wall
    5: 'images/tile/tile_placeholder.png', //north-facing ledge
    6: 'images/tile/tile_placeholder.png', //west-facing ledge
    7: 'images/tile/tile_placeholder.png', //south-facing ledge
    8: 'images/tile/tile_placeholder.png', //east-facing ledge
    9: 'images/tile/tile_placeholder.png', //northeast-facing ledge
    10: 'images/tile/tile_placeholder.png', //northwest-facing ledge
    11: 'images/tile/tile_placeholder.png', //southwest-facing ledge
    12: 'images/tile/tile_placeholder.png', //southeast-facing ledge
    13: 'images/tile/tile_portal.png', //portal


    //Representation of non-existant tile (off the map)
    50: 'images/tile/tile_placeholder.png',
    //Player character representations (one for each direction)
    51: 'images/tile/tile_placeholder.png',
    52: 'images/tile/tile_placeholder.png',
    53: 'images/tile/tile_placeholder.png',
    54: 'images/tile/tile_placeholder.png',

    //Use ascii values for Letters:
    65: 'images/tile/tile_placeholder.png',
    66: 'images/tile/tile_placeholder.png',
    67: 'images/tile/tile_placeholder.png',
    68: 'images/tile/tile_placeholder.png',
    69: 'images/tile/tile_placeholder.png',
    70: 'images/tile/tile_placeholder.png',
    71: 'images/tile/tile_placeholder.png',
    72: 'images/tile/tile_placeholder.png',
    73: 'images/tile/tile_placeholder.png',
    74: 'images/tile/tile_placeholder.png',
    75: 'images/tile/tile_placeholder.png',
    76: 'images/tile/tile_placeholder.png',
    77: 'images/tile/tile_placeholder.png',
    78: 'images/tile/tile_placeholder.png',
    79: 'images/tile/tile_placeholder.png',
    80: 'images/tile/tile_placeholder.png',
    81: 'images/tile/tile_placeholder.png',
    82: 'images/tile/tile_placeholder.png',
    83: 'images/tile/tile_placeholder.png',
    84: 'images/tile/tile_placeholder.png',
    85: 'images/tile/tile_placeholder.png',
    86: 'images/tile/tile_placeholder.png',
    87: 'images/tile/tile_placeholder.png',
    88: 'images/tile/tile_placeholder.png',
    89: 'images/tile/tile_placeholder.png',
    90: 'images/tile/tile_placeholder.png',

    97: 'images/tile/tile_placeholder.png',
    98: 'images/tile/tile_placeholder.png',
    99: 'images/tile/tile_placeholder.png',
    100: 'images/tile/tile_placeholder.png',
    101: 'images/tile/tile_placeholder.png',
    102: 'images/tile/tile_placeholder.png',
    103: 'images/tile/tile_placeholder.png',
    104: 'images/tile/tile_placeholder.png',
    105: 'images/tile/tile_placeholder.png',
    106: 'images/tile/tile_placeholder.png',
    107: 'images/tile/tile_placeholder.png',
    108: 'images/tile/tile_placeholder.png',
    109: 'images/tile/tile_placeholder.png',
    110: 'images/tile/tile_placeholder.png',
    111: 'images/tile/tile_placeholder.png',
    112: 'images/tile/tile_placeholder.png',
    113: 'images/tile/tile_placeholder.png',
    114: 'images/tile/tile_placeholder.png',
    115: 'images/tile/tile_placeholder.png',
    116: 'images/tile/tile_placeholder.png',
    117: 'images/tile/tile_placeholder.png',
    118: 'images/tile/tile_placeholder.png',
    119: 'images/tile/tile_placeholder.png',
    120: 'images/tile/tile_placeholder.png',
    121: 'images/tile/tile_placeholder.png',
    122: 'images/tile/tile_placeholder.png',

    //Characters used in the splash page ascii art start with 200
    200: '█',
    201: '╗',
    202: '╔',
    203: '═',
    204: '╚',
    205: '╝',
    206: '║',
    207: '_',
    208: '|',
    209: '[',
    210: ']',
    211: '\\',
    212: '/',
    213: '(',
    214: ')',
    215: '^',
    216: ',',
    217: '¯',
    218: '.',
    219: '>'

 
};

//A map of tile ids to their ascii representation
var tileChars = {
    0: ' ', //dirt
    1: '…', //sand
    2: '~', //mud
    3: '%', //acid
    4: '█', //wall
    5: '¯', //north-facing ledge
    6: '[', //west-facing ledge
    7: '_', //south-facing ledge
    8: ']', //east-facing ledge
    9: '╗', //northeast-facing ledge
    10: '╔', //northwest-facing ledge
    11: '╚', //southwest-facing ledge
    12: '╝', //southeast-facing ledge
    13: '@', //portal
    14: '☒', //locked door
    15: 'ロ', //open door
    

    //Representation of non-existant tile (off the map)
    50: '#',
    //Player character representations (one for each direction)
    51: '^',
    52: 'v',
    53: '>',
    54: '<',

    //Use ascii values for Letters:
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',

    97: 'a',
    98: 'b',
    99: 'c',
    100: 'd',
    101: 'e',
    102: 'f',
    103: 'g',
    104: 'h',
    105: 'i',
    106: 'j',
    107: 'k',
    108: 'l',
    109: 'm',
    110: 'n',
    111: 'o',
    112: 'p',
    113: 'q',
    114: 'r',
    115: 's',
    116: 't',
    117: 'u',
    118: 'v',
    119: 'w',
    120: 'x',
    121: 'y',
    122: 'z',

    //Characters used in the splash page ascii art start with 200
    200: '█',
    201: '╗',
    202: '╔',
    203: '═',
    204: '╚',
    205: '╝',
    206: '║',
    207: '_',
    208: '|',
    209: '[',
    210: ']',
    211: '\\',
    212: '/',
    213: '(',
    214: ')',
    215: '^',
    216: ',',
    217: '¯',
    218: '.',
    219: '>'

 
};

//this could probably go in a better place but it's here for now
var splashArt = [
[200,200,200,200,200,200,201,  0,  0,200,200,200,200,200,200,201,  0,200,200,200,200,200,200,200,200],
[200,200,202,203,203,200,200,201,200,200,202,203,203,203,200,200,201,204,203,203,200,200,202,203,203],
[200,200,200,200,200,200,202,205,200,200,206,  0,  0,  0,200,200,206,  0,  0,  0,200,200,206,  0,  0],
[200,200,202,203,203,200,200,201,200,200,206,  0,  0,  0,200,200,206,  0,  0,  0,200,200,206,  0,  0],
[200,200,200,200,200,200,202,205,204,200,200,200,200,200,200,202,205,  0,  0,  0,200,200,206,  0,  0],
[204,203,203,203,203,203,205,  0,  0,204,203,203,203,203,203,205,  0,  0,  0,  0,204,203,205,  0,  0],
[  0,  0,207,207,207,207,  0,207,  0,  0,207,  0,207,207,207,207,  0,207,207,207,207,  0,207,207,207],
[  0,  0,208,  0,  0,208,  0,208,  0,  0,208,  0,208,207,207,207,  0,209,207,207,  0,  0,  0,208,  0],
[  0,  0,208,207,211,208,  0,208,207,207,208,  0,208,207,207,207,  0,207,207,207,210,  0,  0,208,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,207,  0,  0,  0,  0,  0,  0,  0,  0,207,  0,  0,  0,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,213,207,214,  0,  0,  0,  0,  0,  0,213,207,214,  0,  0,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,211,211,207,207,207,207,207,207,212,212,207,207,  0,  0],
[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,212,211,211,  0,  0,  0,  0,212,212,  0,  0,212,208,  0],
[  0,  0,207,  0,  0,207,  0,  0,  0,  0,212,207,207,207,207,207,207,207,207,207,207,212,  0,208,  0],
[  0,212,212,  0,  0,211,211,  0,  0,  0,208,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,208,  0,208,  0],
[208,208,  0,  0,  0,208,208,  0,  0,  0,208,  0,  0,  0,215,  0,  0,215,  0,  0,  0,208,  0,208,  0],
[  0,211,211,  0,212,212,  0,  0,  0,  0,208,  0,  0,  0,  0,207,207,216,  0,  0,  0,208,  0,212,  0],
[  0,  0,208,  0,208,  0,  0,  0,  0,212,208,207,207,207,207,207,207,207,207,207,207,208,212,217,212],
[  0,  0,211,  0,211,  0,  0,  0,212,  0,  0,  0,  0,  0,208,  0,  0,  0,208,  0,  0,  0,  0,212,  0],
[  0,  0,  0,211,  0,211,  0,208,217,217,217,217,217,217,217,217,217,217,217,217,217,217,217,208,  0],
[  0,  0,  0,  0,211,  0,217,208,  0,208,217,217,217,217,217,217,217,217,217,217,217,208,  0,208,  0],
[  0,  0,  0,  0,  0,211,207,208,  0,208, 80,121,116,104,111,110,  0,  2,218,  6,  0,208,  0,208,  0],
[  0,  0,  0,  0,  0,  0,  0,208,  0,208,219,219,219,  0,  0,  0,  0,  0,  0,  0,  0,208,  0,208,  0]
]

Bq.constants.MAP_MAX_INDEX = MAP_MAX_INDEX;
Bq.constants.direction = direction;
Bq.constants.itemId = itemId;
Bq.constants.tileChars = tileChars;
Bq.constants.splashArt = splashArt;
