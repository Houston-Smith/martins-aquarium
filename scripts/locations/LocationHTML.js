export const Location = (locationObj) => {
	return `<article class="fish-card">
				<h3 class="fish-name">${locationObj.name}</h3>
				<ul>
					<li class="fish-details">${locationObj.species1}</li>
					<li class="fish-details">${locationObj.species2}</li>
				</ul>
        	</article>`
}