import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  copyText: string = 'Text to copy'; // Example default text

  copyToClipboard() {
    const textField = document.createElement('textarea');
    textField.innerText = this.copyText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
}
