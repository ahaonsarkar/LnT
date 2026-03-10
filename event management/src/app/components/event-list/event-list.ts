import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventService } from '../../services/event';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  private eventService = inject(EventService);
  events = this.eventService.getEvents();
}
