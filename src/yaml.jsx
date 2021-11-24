import file from './file.yml'

console.log(`YAML file:`, file)

export function Yaml(props) {
	return !!file ? (
		<p>YAML file imported. Open DevTools Console to inspect data.</p>
	) : (
		<p>Failed to load a YAML file.</p>
	)
}
