import React from "react";
import Office from "../Images/office.jpg";
import Parks from "../Images/parks.jpg";
import Brook from "../Images/brook.jpg";
import Eric from "../Images/eric.jpg";
import Avatar from "../Images/avatar.jpg";
import Adventure from "../Images/adventure.jfif";
import Sponge from "../Images/sponge.png";
import Dragon from "../Images/dragon.png";
import Ozark from "../Images/ozark.jpg";

let MoviesList = [
    {
        id:"1",
        name:"The Office",
        genre: "Comedy",
        director: "Randall Einhorn",
        img: Office,
        wiki: "https://www.imdb.com/title/tt0386676/?ref_=kw_li_tt"
    },{
        id:"2",
        name:"Parks and Recreation",
        genre: "Comedy",
        director: "Dean Holland",
        img: Parks,
        wiki: "https://www.imdb.com/title/tt1266020/?ref_=ttfc_fc_tt"
    },{
        id:"3",
        name:"Brooklyn 99",
        genre: "Comedy",
        director: "Michael McDonald",
        img: Brook,
        wiki: "https://www.imdb.com/title/tt2467372/?ref_=ttfc_fc_tt"
    },{
        id:"4",
        name:"The Eric Andre Show",
        genre: "Comedy Talk Show",
        director: "Andrew Barchilon",
        img: Eric,
        wiki: "https://www.imdb.com/title/tt2244495/?ref_=fn_al_tt_1"
    },{
        id:"5",
        name:"Avatar: The Last Airbender",
        genre: "Adventure",
        director: "Giancarlo Volpe",
        img: Avatar,
        wiki: "https://www.imdb.com/title/tt0417299/?ref_=ttfc_fc_tt"
    },{
        id:"6",
        name:"Adventure Time",
        genre: "Adventure",
        director: "Bong Hee Han",
        img: Adventure,
        wiki: "https://www.imdb.com/title/tt1305826/?ref_=ttfc_fc_tt"
    },{
        id:"7",
        name:"SpongeBob Squarepants",
        genre: "Comedy",
        director: "Stephen Hillenburg",
        img: Sponge,
        wiki: "https://www.imdb.com/title/tt0206512/?ref_=ttfc_fc_tt"
    },{
        id:"8",
        name:"Dragon Ball Z",
        genre: "Action",
        director: "Daisuke Nishio",
        img: Dragon,
        wiki: "https://www.imdb.com/title/tt0214341/?ref_=fn_al_tt_1"
    },{
        id:"9",
        name:"Ozark",
        genre: "Thriller",
        director: "Jason Bateman",
        img: Ozark,
        wiki: "https://www.imdb.com/title/tt5071412/?ref_=ttfc_fc_tt"
    }
];

export default MoviesList;
