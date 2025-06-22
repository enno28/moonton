import _ from 'lodash';
import axios from 'axios';

// Pasang ke window supaya bisa dipakai global di browser
window._ = _;
window.axios = axios;

// Set header default axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Jika mau pakai Laravel Echo dan Pusher, contoh:
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;
// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: import.meta.env.VITE_PUSHER_APP_KEY, // atau process.env.MIX_PUSHER_APP_KEY tergantung config
//   cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//   forceTLS: true,
// });
