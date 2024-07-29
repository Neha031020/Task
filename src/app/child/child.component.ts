import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DirectiveService } from '../directive.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [{ provide: DirectiveService, useValue: { message: 'Child Level Service' } }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() childData: number = 0;
  constructor(public directiveService: DirectiveService) {}

  updateChildData() {
    this.childData++;
  }
}
