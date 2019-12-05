import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';


storiesOf('button', module)
.add('basic', () => ({
    component: ButtonComponent,
    props: {
        texto: 'Guardar',
        icon: '',
        accion: action('Click!!')
    }
}))
.add('disabled', () => ({
    component: ButtonComponent,
    props: {
        texto: 'Guardar',
        icon: '',
        accion: action('Click!!'),
        disabled: true
    }
}))
.add('Icono y Texto', () => ({
    component: ButtonComponent,
    props: {
        texto: 'Guardar',
        icon: 'fas fa-peace',
        accion: action('Click!!'),
    }
}))
.add('Solo Icono', () => ({
    component: ButtonComponent,
    props: {
        texto: '',
        icon: 'fas fa-peace',
        accion: action('Click!!'),
    }
}))
.add('Width Variable', () => ({
    component: ButtonComponent,
    props: {
        texto: '',
        icon: 'fas fa-peace',
        accion: action('Click!!'),
        width: 400
    }
}))
;
