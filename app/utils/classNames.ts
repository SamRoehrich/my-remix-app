export default function classNames(classes: string, baseClasses: string) {
	return Array.from(new Set(...classes, ...baseClasses)).join(' ')
}
