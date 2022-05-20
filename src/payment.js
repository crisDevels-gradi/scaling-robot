import { replaceMinDate } from './components/actual-date';
import { onChangeInput, onDateCard, onNameCard, onNumberCard } from './components/credit-card'
import './scss/main.scss'
import './scss/payment.scss'

onChangeInput('.input-card-js[name="number-card"]', onNumberCard);
onChangeInput('.input-card-js[name="name-card"]', onNameCard);
onChangeInput('.input-card-js[name="date-card"]', onDateCard);

replaceMinDate();