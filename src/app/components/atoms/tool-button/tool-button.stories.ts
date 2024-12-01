import { Meta, StoryObj } from '@storybook/angular';
import { ToolButtonComponent } from './tool-button.component';

const meta: Meta<typeof ToolButtonComponent> = {
  title: 'Atoms/Tool Button',
  tags: ['autodocs'],
  component: ToolButtonComponent,
};

export default meta;
type Story = StoryObj<ToolButtonComponent>;

export const Default: Story = {
  args: {
    type: 'select',
    isActive: false,
  },
};
