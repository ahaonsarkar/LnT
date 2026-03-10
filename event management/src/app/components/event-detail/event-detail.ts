import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../../services/event';
import { BookingForm } from '../booking-form/booking-form';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule, RouterLink, BookingForm],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail {
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);

  event = this.eventService.getEventById(Number(this.route.snapshot.paramMap.get('id')));
  showBookingForm = false;
}
