import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearcComponent } from './music-searc.component';

describe('MusicSearcComponent', () => {
  let component: MusicSearcComponent;
  let fixture: ComponentFixture<MusicSearcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSearcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
