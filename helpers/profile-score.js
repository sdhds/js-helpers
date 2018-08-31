module.exports = (user_fields) => {
	const {first_name, last_name, phone,
		email, is_email_confirmed, about, avatar, cover_photo,
		has_live, location_now} = user_fields;
	let result = 0;
	if (first_name && last_name) {
		result += 15;
	}
	if (phone) {
		result += 10;
	}
	if ((email || is_email_set) && is_email_confirmed) {
		result += 20;
	}
	if (about) {
		result += 10;
	}
	if (avatar) {
		result += 5;
	}
	if (cover_photo) {
		result += 10;
	}
	if (has_live) {
		result += 20;
	}
	if (location_now && location_now.city && location_now.country) {
		result += 10;
	}
	return result;
};
