const file = await import('./file.yml');

console.log(`YAML file:`, file);

export function YamlDynamic(props) {
	return !!file ? (
		<p>YAML file imported using dynamic import. Open DevTools Console to inspect data.</p>
	) : (
		<p>Failed to load a YAML file.</p>
	)
}
