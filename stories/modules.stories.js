import { action, withActions } from '@storybook/addon-actions';
import { document } from 'global';
import { select, radios, withKnobs, text } from '@storybook/addon-knobs';

export default {
	title: 'Modules',
	decorators: [withKnobs]
};

export const Button1 = () => {
	const btnText = text('Button Text', 'Button');
	const btnStyles = {
		Primary: 'primary',
		Secondary: 'secondary'
	};
	const btnStyle = select('Button Type', btnStyles, 'primary');
	const button = document.createElement('button');
	button.className = btnStyle;
	button.innerText = btnText;
	function test() { 
		alert(btnText);
	}
	button.addEventListener('click', test);
	return button;
};

export const Button2 = () => {
	const btnText = text('Button Text', 'Button');
	const btnStyles = {
		Primary: 'primary',
		Secondary: 'secondary'
	};
	const btnStyle = radios('Button Type', btnStyles, 'secondary');

  return `<button class="${btnStyle}">${btnText}</button>`;
};
