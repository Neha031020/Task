import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectiveService {

  constructor() { }
  message: string = 'Root Level Service';

  getMessage() {
    return this.message;
  }
}
