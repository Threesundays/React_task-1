import logo from './logo.svg';
import './App.css';

export const App = () => {
	const today = new Date().getFullYear();
	const appDiv = document.createElement('div');
	appDiv.className = 'App';
	const header = document.createElement('header');
	header.className = 'App-header';
	const logoImg = document.createElement('img');
	logoImg.src = logo;
	logoImg.className = 'App-logo';
	logoImg.alt = 'logo';

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Edit src/App.js and save to reload.';

	const link = document.createElement('a');
	link.className = 'App-link';
	link.href = 'https://reactjs.org';
	link.target = '_blank';
	link.rel = 'noopener noreferrer';
	link.textContent = 'Learn React';

	const todayParagraph = document.createElement('p');
	todayParagraph.textContent = today;

	header.append(logoImg, paragraph, link, todayParagraph);
	appDiv.appendChild(header);
	return appDiv;
};
