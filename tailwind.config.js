/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-1': '#111',
				'gray-2': '#222',
				'gray-3': '#333',
				'gray-4': '#444',
				'gray-5': '#555',
				'gray-6': '#666',
				'gray-7': '#777',
				'gray-8': '#888',
				'gray-9': '#999',
				'gray-a': '#aaa',
				'gray-b': '#bbb',
				'gray-c': '#ccc',
				'gray-d': '#ddd',
				'gray-e': '#eee',
			},
		},
	},
	plugins: [],
};
