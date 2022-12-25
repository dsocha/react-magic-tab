import MagicTab from '../components/MagicTab/MagicTab';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MagicTab',
  component: MagicTab,
  argTypes: {
    position: {
      control: { type: 'select', options: ['left', 'top', 'right', 'bottom'] },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div style={{ width: '100%', height: 'calc(100vh - 32px)' }}>
    <MagicTab {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  position: 'left',
  size: 'small',
  sideContent: 'Hello',
  mainContent: 'Hello',
};
