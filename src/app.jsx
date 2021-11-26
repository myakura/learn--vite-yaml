import { Yaml } from './yaml';
import { YamlDynamic } from './yaml-dynamic';

export function App(props) {
  return (
    <>
      <h1>Vite + Preact + @rollup/plugin-yaml</h1>
      <p>
        Trying out <a class="link" href="https://www.npmjs.com/package/@rollup/plugin-yaml" target="_blank"
        >@rollup/plugin-yaml</a> in a Vite app.
      </p>
      <Yaml />
			<YamlDynamic />
    </>
  )
}
