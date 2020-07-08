import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  // ReactiveFormsModule,
  queryForm = new FormGroup({
    query: new FormControl('batman'),
  })

  constructor() {
    (window as any).form = this.queryForm

    const field = this.queryForm.get('query')!;

    field.valueChanges.pipe(
      // not to fast 
      debounceTime(400),
      
      // not too short 
      filter(query => query?.length >= 3),

      // no duplicates
      distinctUntilChanged()

    ).subscribe({
      next: console.log
    })
  }

  ngOnInit(): void {
  }

  @Output() search = new EventEmitter<string>();

  sendSearch() {
    // console.log(this.queryForm.value)
    this.search.emit(this.queryForm.get('query')!.value)
  }

}
