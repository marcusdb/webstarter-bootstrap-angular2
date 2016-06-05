
import { Headers } from '@angular/http';
import { storage } from './storage';

class Request {
  getAuthHeaders() {
    let headers = this.getJsonHeaders();
    let authToken = storage.getAuthToken();

    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
  }

  getJsonHeaders() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

export const request = new Request();
