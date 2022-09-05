export const consumablesHours = (value: string) =>{

  	const consumables = value.split(' ');
  let hours = 0

  	switch (consumables[1]) {
				case 'day':
				case 'days':
					hours = parseInt(consumables[0]) * 24;
					break;
				case 'week':
				case 'weeks':
					hours = parseInt(consumables[0]) * 168;
					break;
				case 'month':
				case 'months':
					hours = parseInt(consumables[0]) * 730;
					break;
				case 'year':
				case 'years':
					hours = parseInt(consumables[0]) * 8760;
					break;
				default:
					hours = 0;
					break;
				}

        return hours;
}

export const countStops = (valueMGLTUser: any, valueConsumables: any, valueMGLTShips: any) => {

	 return valueMGLTUser / (consumablesHours(valueConsumables) * valueMGLTShips ) 

}