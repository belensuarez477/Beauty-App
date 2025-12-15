import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
   businessName = 'BeautySystem';
  today = new Date();

}
