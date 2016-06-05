import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs';
import {storage} from '../plugins/storage';
import {request} from '../plugins/request';

export function isLoggedIn() {
    return !!storage.getAuthToken();
}

@Injectable()
export class UserService {
    _loggedIn = new BehaviorSubject(false);

    static get parameters() {
        return [[Http]];
    }

    constructor(private http: Http) {
        if (isLoggedIn()) {
            this._loggedIn.next(true);
        }
    }

    login(credentials) {
        return this.http
            .post('/login', JSON.stringify(credentials), {headers: request.getJsonHeaders()})
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    storage.setAuthToken(res.auth_token);
                    this._loggedIn.next(true);
                }

                return res.success;
            });
    }

    logout() {
        storage.removeAuthToken();
        this._loggedIn.next(false);
    }

    isLoggedIn() {
        return this._loggedIn.getValue();
    }

    getLoggedIn() {
        return this._loggedIn;
    }
}
