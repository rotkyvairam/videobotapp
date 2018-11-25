import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  constructor() { }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();
    this.video = '7sUI7KW9LA4' //video id

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      //this.reframed = false;
      this.player = new window['YT'].Player('player', {
        videoId: this.video,

        playerVars: { 'autoplay': 0, 'controls': 0 },          
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this)
        }
      });
    };     

  }

  onPlayerReady(event) {
    console.log(event)
  };

  onPlayerStateChange(event) {
    console.log(event)
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };
 
  reproducir() {
    console.log(event)
    this.player.playVideo(); 
  }
  
  pausar() {
    console.log(event)
    this.player.pauseVideo();
  }

  inicio() {
    console.log(event)
    this.player.seekTo(0, true);
  }

  avanzar1() {
    console.log(event)
    this.player.seekTo(6, true);
  }
  
  avanzar2() {
    console.log(event)
    this.player.seekTo(18, true);
  }

  avanzar3() {
    console.log(event)
    this.player.seekTo(33, true);
  }

  avanzar4() {
    console.log(event)
    this.player.seekTo(42, true);
  }

  avanzar5() {
    console.log(event)
    this.player.seekTo(49, true);
  }

  avanzar6() {
    console.log(event)
    this.player.seekTo(59, true);
  }


  show_chatbot() {
    console.log(event)
  }

  hide_chatbot() {
    console.log(event)
  }

  send_message() {
    console.log(event)
  }



}