import { Injectable, signal } from '@angular/core';

export interface Toast {
  message: string;
  visible: boolean;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toast = signal<Toast>({ message: '', visible: false });
  private timer: ReturnType<typeof setTimeout> | null = null;

  show(message: string): void {
    if (this.timer) clearTimeout(this.timer);
    this.toast.set({ message, visible: true });
    this.timer = setTimeout(() => {
      this.toast.set({ message, visible: false });
    }, 2200);
  }
}
