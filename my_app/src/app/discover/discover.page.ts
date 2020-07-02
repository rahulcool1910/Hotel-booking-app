import { Component, OnInit, Output } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  maps:Mapboxgl.Map
 

  constructor() { }

  ngOnInit() {
    // (Mapboxgl as any).accessToken = 'pk.eyJ1IjoicmFodWwtcmFodWwxOSIsImEiOiJja2E2ZTQ5YXYwN2l0MnFtdXh4dnRlb3gzIn0.1FVNeOR_l8My30XesnTUJQ';
    // this.maps= new Mapboxgl.Map({
    // container: 'map', // container id
    // style: 'mapbox://styles/mapbox/streets-v11',
    // center: [-117.1790624744678,38.488220183159314], // starting position
    // zoom: 9 // starting zoom
    // });
    // this.createmarker(-117.1790624744678,38.488220183159314);
  }



  // createmarker(lng:number,lat:number){
  //   var marker = new Mapboxgl.Marker({
  //     draggable: true
  //     })
  //     .setLngLat([lng,lat])
  //     .addTo(this.maps);
  //     marker.on('drag',()=>{
  //       console.log(marker.getLngLat());
  //     })
  //   }
}
