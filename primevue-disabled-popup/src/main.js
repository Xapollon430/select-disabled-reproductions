import { createApp, h, ref } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import AutoComplete from 'primevue/autocomplete';
import ColorPicker from 'primevue/colorpicker';

const colorMode = new URLSearchParams(location.search).has('color');
createApp({
    setup() {
        const disabled = ref(false);
        const value = ref(colorMode ? 'ff0000' : 'Apple');
        const events = ref(0);
        const options = ref([]);
        return () => h('main', [
            h('nav', [
                h('a', { href: './' }, 'AutoComplete'),
                ' · ',
                h('a', { href: '?color' }, 'ColorPicker')
            ]),
            h('h1', colorMode ? 'PrimeVue ColorPicker' : 'PrimeVue AutoComplete'),
            h('button', { onclick: () => setTimeout(() => { disabled.value = true; }, 2400) }, 'Disable in 2.4 seconds'),
            h('p', `${disabled.value ? 'Disabled' : 'Enabled'} · Value: ${value.value} · Updates: ${events.value}`),
            h(colorMode ? ColorPicker : AutoComplete, {
                disabled: disabled.value,
                modelValue: value.value,
                'onUpdate:modelValue': (next) => { value.value = next; events.value++; },
                ...(colorMode ? {} : { dropdown: true, suggestions: options.value, onComplete: () => { options.value = ['Apple', 'Orange']; } })
            })
        ]);
    }
}).use(PrimeVue, { theme: { preset: Aura } }).mount('#app');
