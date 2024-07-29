import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DirectiveService } from './directive.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: DirectiveService, useValue: { message: 'Parent Level Service' } }]
})
export class AppComponent {
  parentData: number = 0;
  childData: number = 0;
  constructor(public directiveService: DirectiveService) {}

  updateParentData() {
    this.parentData++;
  }

  updateChildData() {
    this.childData++;
  }
}
