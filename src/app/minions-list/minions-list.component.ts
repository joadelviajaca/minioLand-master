import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { Observable, catchError, ignoreElements, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-minions-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './minions-list.component.html',
  styles: [ 'img { width: 50%; position: relative; left: 25%;}']
})
export class MinionsListComponent implements OnInit,OnChanges {
  error: boolean = false;
  minions$!: Observable<Minion[]>;
  minionError$!: Observable<any>;
  errorMessage: any = null;
  // @Input() minions: Minion[] = [];
  @Input() searchTerm: string = '';
  constructor(private minionsService: MinionService){}

  ngOnInit(): void {
    // this.minionsService.getMinions()
    // .subscribe({
    //   next: (minions) => {
    //     this.minions = minions;
    //     this.error = false;
    //   },
    //   error: (error) => this.error = true
    // })
    this.minions$ = this.minionsService.getMinions();
    this.minionError$ = this.minions$.pipe(
      ignoreElements(),
      catchError((err)=> of(err))
    )
  

  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.minions = this.minionsService.getFilterMinions(this.searchTerm)
  }
  
}
