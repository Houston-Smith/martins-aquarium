export const Tip = (tipObj) => {
	return `<article class="fish-card">
				<h3 class="fish-name">${tipObj.species}</h3>
				<ul>
					<li class="fish-details">Tank Size:${tipObj.tankSize}</li>
					<li class="fish-details">Water Salinity: ${tipObj.waterSalinity}</li>
					<li class="fish-details">Water Temperature: ${tipObj.waterTemp}</li>
				</ul>
        	</article>`
}