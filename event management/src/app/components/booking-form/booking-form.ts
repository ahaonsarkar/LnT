import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking';
import { EventService } from '../../services/event';
import { Event } from '../../models/event';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {
  event = input.required<Event>();
  booked = output<void>();

  private fb = inject(FormBuilder);
  private bookingService = inject(BookingService);
  private eventService = inject(EventService);

  bookingForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    tickets: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
  });

  onSubmit() {
    if (this.bookingForm.valid) {
      const val = this.bookingForm.value;
      const event = this.event();
      
      this.bookingService.addBooking({
        id: 0,
        eventId: event.id,
        name: val.name!,
        email: val.email!,
        tickets: val.tickets!
      });

      this.eventService.updateSeats(event.id, val.tickets!);
      this.booked.emit();
      alert('Booking successful!');
    }
  }
}
