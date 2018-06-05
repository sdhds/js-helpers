module.exports = (user_fields) => {
	const {first_name, last_name, phone,
		email, is_email_confirmed, about, avatar, cover_photo,
		has_live, location_now, has_paid_tracks}
	let result = 0;
	if (first_name && last_name) {
		result += 10;
	}
	if (phone) {
		result += 10;
	}
	if (email && is_email_confirmed) {
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
	if (location_now && location_now.city && location.country) {
		result += 10;
	}
	if (has_paid_tracks) {
		result += 5;
	}
	return result;
};