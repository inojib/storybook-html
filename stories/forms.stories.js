import { action } from '@storybook/addon-actions';
import { document } from 'global';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
	title: 'Forms',
	decorators: [withKnobs]
};

export const emailSignup = () => {
  const title = text('Title', 'Stay Informed');
  const subtitle = text('Subtitle', 'Enter your email below for updates, coupons and more!');
  const btnSubmit = text('Submit text', 'Submit');

  return `<form class="email-wrapper">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <input type="text" id="emailSignup"><input type="submit" value="${btnSubmit}">
      </form>
    `;
};

emailSignup.story = { name: 'Email Signup' };