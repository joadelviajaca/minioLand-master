import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minions-list',
  standalone: true,
  imports: [],
  templateUrl: './minions-list.component.html',
  styles: [ 'img { width: 50%; position: relative; left: 25%;}']
})
export class MinionsListComponent implements OnInit,OnChanges {

  minions: Minion[] = [];
  // @Input() minions: Minion[] = [];
  @Input() searchTerm: string = '';
  constructor(private minionsService: MinionService){}

  ngOnInit(): void {
    this.minions = this.minionsService.getFilterMinions(this.searchTerm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.minions = this.minionsService.getFilterMinions(this.searchTerm)
  }
  
}
