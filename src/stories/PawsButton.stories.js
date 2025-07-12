// src/stories/PawsButton.stories.js
import PawsButton from '../components/PawsButton.vue';

// This is the metadata for your component's stories.
export default {
  // The title that will appear in the Storybook sidebar.
  title: 'Paws UI/Button',
  // The component this story is for.
  component: PawsButton,
};

// --- We now define individual stories for each state of our component. ---

// A "story" is just a function that returns how to render the component.
// This is our "Primary" button story.
export const Primary = {
  args: { // 'args' are the props we pass to the component for this story.
    label: 'Primary Button',
    variant: 'primary',
  },
};

// This is our "Secondary" button story.
export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};