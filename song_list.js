//song list
let All_song = [
   {
     name: "Enna Azhagu Song",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Love Today"
   },
   {
     name: "Theriyaama Pathuputten Song",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Thiruvillaiyaadal"
   },
   {
     name: "Yennada Yennada Song",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Varutha Padatha Valibar Sangam"
   },
   {
     name: "Jodi Nilave Song",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Thangamagan"
   },
   {
     name: "Sakkarai Nilavea Song",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Youth"
   },
   {
    name: "Pirai Thedum Iravilae Song",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Mayakkam Enna"
   },
   {
    name: "Kadhal Valarthen Song",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "Manmadhan"
  },
  {
    name: "En Kadhal Solla Song",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "Paiya"
  },
  {
    name: "Yetho Ondru Ennai Song",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "Paiya"
  },
  {
    name: "Klesa Kadhala Song",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "Dada"
  },
  {
    name: "Venmegam Song",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: "Yaaradi Nee Mohini"
  },
  {
    name: "Kaadhal Rojave Song",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: "Roja"
  },
  {
    name: "Mundhinam Song",
    path: "music/13.mp3",
    img: "images/13.jpg",
    singer: "Vaaranam Aayiram"
  },
  {
    name: "Ayyayo Song",
    path: "music/14.mp3",
    img: "images/14.jpg",
    singer: "Aadukalam"
  },
  {
    name: "Thendral Vanthu Song",
    path: "music/15.mp3",
    img: "images/15.jpg",
    singer: "Avatharam"
  },
  {
    name: "Annul Maelae Song",
    path: "music/16.mp3",
    img: "images/16.jpg",
    singer: "Vaaranam Aayiram"
  },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/