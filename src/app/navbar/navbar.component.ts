import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();

  searchTerm: string = '';
  constructor(private minionsService: MinionService){}
  search(){
    this.onSearch.emit(this.searchTerm);
  }
}
