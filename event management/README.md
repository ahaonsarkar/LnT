# 🕉️ UTSAV | Indian Event Management Platform

**UTSAV** is a premium, dark-themed event management application built with **Angular (v18+)**, designed to showcase and book vibrant cultural experiences across India. From the colorful chaos of Holi in Mathura to the tranquil backwaters of Kerala, UTSAV brings the spirit of India to your fingertips with an aesthetic, modern interface.

---

## ✨ Features

- **🎯 Curated Event Discovery**: Explore a rich collection of 16+ Indian cultural events, festivals, workshops, and retreats.
- **🌒 Aesthetic Dark Mode**: A sophisticated "Deep Obsidian" theme with Saffron, Marigold, and India Green accents.
- **🎫 Real-time Seat Management**: Intelligent booking system using **Angular Signals** for reactive seat updates.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **🇮🇳 Localization**: Prices displayed in ₹ (INR) with Indian-themed descriptions and iconography.
- **🏛️ My Journey**: A dedicated space to track all your confirmed cultural experiences.

---

## 🛠️ Tech Stack

- **Frontend**: Angular 18+ (Signals, Standalone Components, New Control Flow)
- **Styling**: Vanilla CSS (Custom Properties, Glassmorphism, Flexbox/Grid)
- **Typography**: Playfair Display (Headers) & Inter (Body) via Google Fonts
- **State Management**: Angular Signals for lightweight, reactive data handling

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/utsav-events.git
    cd utsav-events
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    ng serve
    ```

4.  **Navigate to the app**:
    Open your browser and visit `http://localhost:4200`.

---

## 📂 Project Structure

```text
src/app/
├── components/          # Standalone UI components (Navbar, Event Cards, etc.)
├── models/              # TypeScript interfaces (Event, Booking, User)
├── services/            # Data management (EventService, BookingService)
├── guards/              # Route protection (AuthGuard)
├── pipes/               # Data transformation (EventFilterPipe)
└── directives/          # Custom DOM manipulations
```

---

## 🧪 Testing

To run unit tests with the **Vitest** runner:
```bash
ng test
```

---

## 🎨 Branding & Aesthetics

The application uses a custom-curated color palette:
- **Primary**: `#FF9933` (Deep Saffron)
- **Secondary**: `#FFCC33` (Bright Marigold)
- **Accent**: `#138808` (India Green)
- **Background**: `#0F0F0F` (Deep Obsidian)
- **Royalty**: `#4A148C` (Royal Purple)

*Celebrate the diversity of India through an interface that feels as premium as the experiences it offers.*
