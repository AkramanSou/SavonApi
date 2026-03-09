import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; // Sera normalement ajouté automatiquement par VS Code
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar], // AJOUTER ICI Navbar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sav-app');
}