import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import GoogleMapAutoComplete from './modules/map-autocomplete';

GoogleMapAutoComplete($('#address') , $('#lat') , $('#lng'));