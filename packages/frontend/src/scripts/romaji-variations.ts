const romajiVariations = [
	['shi', 'si'],
	['sha', 'sya'],
	['shu', 'syu'],
	['sho', 'syo'],
	['chi', 'ti'],
	['tsu', 'tu'],
	['cha', 'tya'],
	['chu', 'tyu'],
	['cho', 'tyo'],
	['fu', 'hu'],
	['n', 'nn'],
	['ji', 'zi'],
	['ja', 'zya'],
	['ju', 'zyu'],
	['jo', 'zyo'],
	['ji', 'di', 'zi'],
	['zu', 'du'],
	['ja', 'dya', 'zya'],
	['ju', 'dyu', 'zyu'],
	['jo', 'dyo', 'zyo'],
];

export function getRomajiVariations(romaji: string): string[] {
	const variations = [romaji];
	for (const entry of romajiVariations) {
		for (const variant of entry) {
			if (romaji.includes(variant)) {
				variations.push(...entry.filter(x => x !== variant).map(x => romaji.replace(variant, x)));
			}
		}
	}
	return variations;
}
