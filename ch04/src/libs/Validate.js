class Validate
{
	// sẽ trả về true nếu như thỏa mãn điều kiện là số và khác NaN
	static isNumber(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	}

	static checkQuantity(value) {
		if(value < 1 || Validate.isNumber(value) === false) {
			return false;
		}
		return true;
	}
}

export default Validate;