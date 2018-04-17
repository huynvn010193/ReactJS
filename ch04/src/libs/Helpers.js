class Helpers
{
	static toCurrency(value:number, currencyUnit:string, position: string="left")
	{
		if(position === "left")
		{
			return currencyUnit + " " + value;
		}
		else if(position === "right")
		{
			return value + " " + currencyUnit;
		}
	}
}

export default Helpers;