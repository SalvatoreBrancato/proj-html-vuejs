import {reactive} from 'vue';

export const store = reactive(
	  {
         nome: '',
         cognome: '',
         indirizzo: '',
         email: '',
         età: '',
         arrayUtenti : [],
         registrazione: false,
         y: window.screenY
      }
)