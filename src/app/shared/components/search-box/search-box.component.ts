import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  constructor() { }

  ngOnInit():void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }

}
