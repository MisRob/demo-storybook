import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import KIcon from './KIcon.vue';
import { iconTypes } from './constants'

export default { 
  title: 'KIcon' ,
  decorators: [withA11y, withKnobs]
};

export const Correct = () => ({
  components: { KIcon },
  props: {
    color: {
      default: text('color', '#2b2b2b')
    },
    icon: {
      default: select('icon', iconTypes, iconTypes[0])
    }
  },
  template: `
    <KIcon
      :color="color"
      :icon="icon"
    />
  `
});

export const CorrectGreen = () => ({
  components: { KIcon },
  props: {
    color: {
      default: text('color', '#7a9c44')
    },
    icon: {
      default: select('icon', iconTypes, iconTypes[0])
    }
  },
  template: `
    <KIcon
      :color="color"
      :icon="icon"
    />
  `
});

export const AllIcons = () => ({
  components: { KIcon },
  data() {
    return {
      iconTypes
    }
  },
  template: `
    <div :style="{ 'display': 'grid', 'grid-template-columns': 'repeat(5, 1fr)' }">
      <template v-for="(icon, idx) in iconTypes">
        <KIcon
          :key="idx"
          :icon="icon"
          color="#2b2b2b"
        />
      </template>
    </div>
  `
})