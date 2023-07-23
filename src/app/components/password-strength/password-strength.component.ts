import { Component, Input, OnChanges } from '@angular/core';

type PasswordStrength = 'none' | 'short' | 'easy' | 'medium' | 'strong'

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';
  str: PasswordStrength = 'none';

  ngOnChanges() {
    this.str = this.getPasswordStrength();
  }

  getPasswordStrength(): PasswordStrength {
    if (this.password.length) {
      if (this.password.length >= 8) {
        const easy = /^(?:\d+|[a-zA-Z]+|[^a-zA-Z0-9]+)$/;
        const strong = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/;
        if (easy.test(this.password)) {
          return 'easy'
        } else if (strong.test(this.password)) {
          return 'strong';
        } else {
          return 'medium'
        }
      }
      return 'short'
    }
    return 'none'
  }
}
