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
         prenotazione: false,
         y: window.screenY,
         arrayMesi:[
            'Gennaio',
            'Febraio',
            'Marzo',
            'Aprile',
            'Maggio',
            'Giugno',
            'Luglio',
            'Agosto',
            'Settembre',
            'Ottobre',
            'Novembre',
            'Dicembre'
         ],
         arrayAnno: [
            '2023',
            '2024',
            '2025'
         ]         
      }
)