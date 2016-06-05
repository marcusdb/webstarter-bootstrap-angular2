import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { PROGRESSBAR_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

/*
 * we are grouping the module so we only need to manage the imports in one location
 */


export const BOOTSTRAP3_DIRECTIVES = [
  ...[
    AlertComponent,
    CollapseDirective,
    RatingComponent,
    TimepickerComponent,
    BUTTON_DIRECTIVES
  ],
  ...ACCORDION_DIRECTIVES,
  BUTTON_DIRECTIVES,
  ...CAROUSEL_DIRECTIVES,
  ...DROPDOWN_DIRECTIVES,
  MODAL_DIRECTVES,
  ...PAGINATION_DIRECTIVES,
  ...PROGRESSBAR_DIRECTIVES,
  ...TAB_DIRECTIVES,
  ...TOOLTIP_DIRECTIVES,
  ...TYPEAHEAD_DIRECTIVES
];

export const BOOTSTRAP3_VIEWPROVIDERS = [
  BS_VIEW_PROVIDERS
];

