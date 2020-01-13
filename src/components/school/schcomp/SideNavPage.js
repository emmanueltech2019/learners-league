import React from 'react';

function SideNavPage() {
	const closer = () => {
		alert('am not yet colapsing');
	};
	const contents = [
		{ name: 'basics', isHeading: true },
		{ name: 'html' },
		{ name: 'css' },
		{ name: 'js es5 and es6' },
		{ name: 'server js', isHeading: true },
		{ name: 'node' },
		{ name: 'Express' },
    { name: 'mongodb' },
		{ name: 'php', isHeading: true },
		{name: 'ruby'}
	].map(({ name, isHeading }, i) => {
		const child = isHeading ? <h3>{name}</h3> : name;

		return (
			<li className={'side-bar-items' + (isHeading ? '' : '-sub')} key={i}>
				{child}
			</li>
		);
	});
	return (
		<div>
			<section className="side-bar">
				<h1 className="closer">
					<button onClick={closer}>x</button>
				</h1>

				<ul>
					{contents}
				</ul>
			</section>
		</div>
	);
}
export default SideNavPage;