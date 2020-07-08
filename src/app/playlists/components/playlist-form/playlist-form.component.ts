import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy, ChangeDetectionStrategy, AfterViewChecked, ViewChild, AfterViewInit } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // runs onChanges
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist!: Playlist

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Playlist>();


  constructor() {
  }

  // @ViewChild('formRef')
  // @ViewChild(NgForm)
  @ViewChild('formRef', { read: NgForm/* , static: false */ })
  formRef?: NgForm

  ngAfterViewInit(): void {
    // ngAfterViewChecked(): void {
    setTimeout(() => {
      console.log(this.formRef?.value)
    })
  }

  ngOnInit(): void {
  }

  cancelClick() {
    this.cancel.emit()
  }

  // submit(draft: Partial<Playlist>) {
  submit(draft: Pick<Playlist, 'name' | 'public' | 'description'>) {

    const updated: Playlist = {
      ...this.playlist,
      ...draft
    }

    this.save.emit(updated)
  }
}

// type keys = 'id' | 'name'
// type PlaylistDraft = {
//   [key in keys]: any
// } 

// type placki = keyof Playlist

// type PlaylistDraft = {
//   [key in keyof Playlist]: Playlist[key]
// }

// type PartialPlaylist = {
//   [key in keyof Playlist]: Playlist[key]
// }

// type Partial<T> = {
//   [key in keyof T]: T[key]
// }
