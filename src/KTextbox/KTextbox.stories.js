import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import KTextbox from './KTextbox.vue';

export default {
  title: 'KTextbox',
  decorators: [withA11y]
};

export const Default = () => ({
  components: { KTextbox },
  methods: {
    onInput: action('input'), 
    onKeydown: action('keydown'),
    onFocus: action('focus'),
    onBlur: action('blur') 
  },
  template: `
    <KTextbox
      label="Facility name"
      @input="onInput"
      @keydown="onKeydown"
      @focus="onFocus"
      @blur="onBlur"
    />
  `
});

export const Disabled = () => ({
  components: { KTextbox },
  data() {
    return {
      label: 'Facility name',
      disabled: true
    }
  },
  methods: {
    onInput: action('input'), 
    onKeydown: action('keydown'),
    onFocus: action('focus'),
    onBlur: action('blur') 
  },
  template: `
    <KTextbox
      :label="label"
      :disabled="disabled"
      @input="onInput"
      @keydown="onKeydown"
      @focus="onFocus"
      @blur="onBlur"
    />
  `
});
