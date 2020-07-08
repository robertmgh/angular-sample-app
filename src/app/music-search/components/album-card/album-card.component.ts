import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Album } from 'src/app/core/models/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album!: Album

  @HostBinding('class.card') isCard = true;

  constructor() { }

  ngOnInit(): void {
  }

}
