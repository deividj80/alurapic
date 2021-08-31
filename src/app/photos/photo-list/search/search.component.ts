import {EventEmitter, Input, Output} from "@angular/core";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() onTyping = new EventEmitter<string>();
  debounce: Subject<string> = new Subject<string>();
  @Input() value: string = '';

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.debounce.next(elemento.value);
    }
  }

}
