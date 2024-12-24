import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
	parameters: {
		darkMode: {
			current: 'dark', // 👈 Set the current mode to 'dark'
		},
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#333333' }, // 👈 Define the dark background color
				{ name: 'light', value: '#FFFFFF' }, // Optional: Define a light background for contrast
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
