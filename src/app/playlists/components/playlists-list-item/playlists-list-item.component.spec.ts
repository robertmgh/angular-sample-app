import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsListItemComponent } from './playlists-list-item.component';

describe('PlaylistsListItemComponent', () => {
  let component: PlaylistsListItemComponent;
  let fixture: ComponentFixture<PlaylistsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
