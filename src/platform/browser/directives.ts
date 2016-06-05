/*
 * These are globally available directives in any template
 */

import { PLATFORM_DIRECTIVES } from '@angular/core';
// Angular 2 Router
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {RouterOutlet} from '@angular/router-deprecated';
import {BOOTSTRAP3_DIRECTIVES} from './bootstrap3'


// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES.filter(direc => direc != RouterOutlet)
];

export const DIRECTIVES = [
  BOOTSTRAP3_DIRECTIVES,
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
