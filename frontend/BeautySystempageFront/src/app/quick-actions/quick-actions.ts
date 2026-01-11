import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  templateUrl: './quick-actions.html',
  styleUrls: ['./quick-actions.css']
})
export class QuickActions {
  @Output() nuevoTurno = new EventEmitter<void>();
}
