const secret = 74135;
const hourInSeconds = 3600;

export function generateCode(username: string): number {
	const name = calculateName(username);

	const timeStep = Math.floor(Date.now() / 1000 / hourInSeconds);

	const total = name + timeStep + secret;
	return total;
}

export function validateCode(username: string, code: number): boolean {
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const currentStep = Math.floor(currentTimestamp / hourInSeconds);
	const previousStep = currentStep - 1;

	const name = calculateName(username);

	return checkStep(name, currentStep, code) || checkStep(name, previousStep, code);
}

function checkStep(name: number, timeStep: number, code: number): boolean {
	const expected = name + timeStep + secret;
	return code === expected;
}

function calculateName(username: string): number {
	const total = [...username.toLowerCase()].reduce((sum, char) => sum + char.charCodeAt(0), 0);
	return total;
}
