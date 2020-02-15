import React from "react";

import Ghost from '../Images/ghost.jpg';
import Red from '../Images/red.jpg';
import Just from '../Images/just.jpg';
import Sky from '../Images/sky.png';
import Border from '../Images/border.jpg';
import GTA from '../Images/gta.webp';
import Planet from '../Images/planet.jpg';
import Fallout from '../Images/fallout.jpg';
import Doom from '../Images/doom.jpg';

let GamesList = [
    {
        id: "1",
        name: "Ghost Recon Wildlands",
        genre: "Tactical Shooter",
        hours: "188",
        img: Ghost,
        store: "https://store.steampowered.com/app/460930/Tom_Clancys_Ghost_Recon_Wildlands/",
        wiki: "https://en.wikipedia.org/wiki/Tom_Clancy%27s_Ghost_Recon_Wildlands"
    },{
        id: "2",
        name: "Red Dead Redemption 2",
        genre: "Action Adventure",
        hours: "148",
        img: Red,
        store: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        wiki: "https://en.wikipedia.org/wiki/Red_Dead_Redemption_2"
    },{
        id: "3",
        name: "Just Cause 3",
        genre: "Action Adventure",
        hours: "109",
        img: Just,
        store: "https://store.steampowered.com/app/225540/Just_Cause_3/",
        wiki: "https://en.wikipedia.org/wiki/Just_Cause_3"
    },{
        id: "4",
        name: "ESV Skyrim",
        genre: "Action Role - Playing",
        hours: "69",
        img: Sky,
        store: "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
        wiki: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim"
    },{
        id: "5",
        name: "Borderlands 2",
        genre: "First Person Shooter",
        hours: "66",
        img: Border,
        store: "https://store.steampowered.com/app/49520/Borderlands_2/",
        wiki: "https://en.wikipedia.org/wiki/Borderlands_2"
    },{
        id: "6",
        name: "Grand Theft Auto 5",
        genre: "Action Adventure",
        hours: "65",
        img: GTA,
        store: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
        wiki: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
    },{
        id: "7",
        name: "Planetary Annihilation: Titans",
        genre: "Real - Time Strategy",
        hours: "56",
        img: Planet,
        store: "https://store.steampowered.com/app/386070/Planetary_Annihilation_TITANS/",
        wiki: "https://en.wikipedia.org/wiki/Planetary_Annihilation"
    },{
        id: "8",
        name: "Fallout 4",
        genre: "Action Role - Playing",
        hours: "50",
        img: Fallout,
        store: "https://store.steampowered.com/app/377160/Fallout_4/",
        wiki: "https://en.wikipedia.org/wiki/Fallout_4"
    },{
        id: "9",
        name: "DOOM",
        genre: "Action",
        hours: "32",
        img: Doom,
        store: "https://store.steampowered.com/app/379720/DOOM/",
        wiki: "https://en.wikipedia.org/wiki/Doom_(2016_video_game)"
    },
];

export default GamesList;