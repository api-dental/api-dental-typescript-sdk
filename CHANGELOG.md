# Changelog

## 1.7.0 (2026-04-30)

Full Changelog: [v1.6.0...v1.7.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.6.0...v1.7.0)

### Features

* support setting headers via env ([d5c13be](https://github.com/api-dental/api-dental-typescript-sdk/commit/d5c13beaee5c2196f70ad13e5c9b4510100c9ff7))


### Chores

* avoid formatting file that gets changed during releases ([699d5aa](https://github.com/api-dental/api-dental-typescript-sdk/commit/699d5aad41ccbcb993f94fd0d45145b690b0a267))
* **ci:** escape input path in publish-npm workflow ([3706e55](https://github.com/api-dental/api-dental-typescript-sdk/commit/3706e559031f0091c4c95fc89a1b13e5ec46ff88))
* **ci:** skip lint on metadata-only changes ([31cf7c1](https://github.com/api-dental/api-dental-typescript-sdk/commit/31cf7c11ce64ed46d5da049c2be648a2b5373fbf))
* **format:** run eslint and prettier separately ([35ef74f](https://github.com/api-dental/api-dental-typescript-sdk/commit/35ef74f727996ddb71613fd3460bacfd703735e5))
* **formatter:** run prettier and eslint separately ([ab3e247](https://github.com/api-dental/api-dental-typescript-sdk/commit/ab3e247a02b0d4e2b25ab8a4c69d4f62e06a232d))
* **internal:** codegen related update ([428def2](https://github.com/api-dental/api-dental-typescript-sdk/commit/428def21d0426ae020acb9eaa28ad01009e9e105))
* **internal:** codegen related update ([4487463](https://github.com/api-dental/api-dental-typescript-sdk/commit/448746354886e8e38472562fd2dafe85d9c1ed11))
* **internal:** codegen related update ([9503688](https://github.com/api-dental/api-dental-typescript-sdk/commit/95036880b2079eb659e20346fa41c014a73217e4))
* **internal:** codegen related update ([32ff806](https://github.com/api-dental/api-dental-typescript-sdk/commit/32ff80624d8c87ea20574d6de9e28c642b60aa68))
* **internal:** codegen related update ([9461925](https://github.com/api-dental/api-dental-typescript-sdk/commit/9461925ad873183aae740bf8ddb863487e5c308a))
* **internal:** fix MCP docker image builds in yarn projects ([c21fbf2](https://github.com/api-dental/api-dental-typescript-sdk/commit/c21fbf200b83be499dbf339fea1cd24aeb3d5f07))
* **internal:** fix MCP server import ordering ([76aae66](https://github.com/api-dental/api-dental-typescript-sdk/commit/76aae66e2dc57dafcb785aadac9934b7c2c0d632))
* **internal:** fix MCP server TS errors that occur with required client options ([31eaf68](https://github.com/api-dental/api-dental-typescript-sdk/commit/31eaf68abdc95018b91154cb73ee4c3ccd0fc384))
* **internal:** improve local docs search for MCP servers ([8a6aaf7](https://github.com/api-dental/api-dental-typescript-sdk/commit/8a6aaf7c2aaadba853117a5c2b7095ea21f6a00f))
* **internal:** improve local docs search for MCP servers ([79f9ad0](https://github.com/api-dental/api-dental-typescript-sdk/commit/79f9ad08cb7f2e740559ea09cbd57e0a719186b2))
* **internal:** more robust bootstrap script ([c7abec2](https://github.com/api-dental/api-dental-typescript-sdk/commit/c7abec20e8169e3ff19f08b1f510f0a3c16cba8a))
* **internal:** show error causes in MCP servers when running in local mode ([17c4985](https://github.com/api-dental/api-dental-typescript-sdk/commit/17c49856b2d05096f8bae36c76bea061b73b2048))
* **internal:** support custom-instructions-path flag in MCP servers ([875510e](https://github.com/api-dental/api-dental-typescript-sdk/commit/875510e5aea3efd8fce6db7dad99cfe0f82c85bd))
* **internal:** support local docs search in MCP servers ([fb4a465](https://github.com/api-dental/api-dental-typescript-sdk/commit/fb4a465c5c57bae491031052ce41f6b92a7864ef))
* **internal:** support type annotations when running MCP in local execution mode ([dff7adc](https://github.com/api-dental/api-dental-typescript-sdk/commit/dff7adc510ad238dbdb786ec446917334b6a1ef6))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([1c60bfa](https://github.com/api-dental/api-dental-typescript-sdk/commit/1c60bfaf8c2e41aa3e474b1fcff3588c011eb920))
* **internal:** tweak CI branches ([f574180](https://github.com/api-dental/api-dental-typescript-sdk/commit/f574180b5c3395421c5fc441e4b3afb3c6185b3f))
* **internal:** update docs ordering ([72cb9ed](https://github.com/api-dental/api-dental-typescript-sdk/commit/72cb9ed53ed603fdcff7b0bcd5af9cf47b74aced))
* **internal:** update gitignore ([4203cac](https://github.com/api-dental/api-dental-typescript-sdk/commit/4203cacf6ce72857a54130f93e61d366c1a24766))
* **internal:** use link instead of file in MCP server package.json files ([6b69b7d](https://github.com/api-dental/api-dental-typescript-sdk/commit/6b69b7dc51c736939538bc7e20e2f5eac61ba0b6))
* **mcp-server:** add support for session id, forward client info ([73c113d](https://github.com/api-dental/api-dental-typescript-sdk/commit/73c113dcd4f05b01dffd70d2cc4a7fa6f6f2049a))
* **mcp-server:** increase local docs search result count from 5 to 10 ([6d9a429](https://github.com/api-dental/api-dental-typescript-sdk/commit/6d9a42988e2a4581635d57b51b13f366926ded40))
* **mcp-server:** log client info ([9963fb1](https://github.com/api-dental/api-dental-typescript-sdk/commit/9963fb1dd8f72455c7b235f160c6b1e08f67f22b))
* restructure docs search code ([662412b](https://github.com/api-dental/api-dental-typescript-sdk/commit/662412bd309b5f6ea0d9b3da2c38840427a2ee4d))

## 1.6.0 (2026-03-15)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.5.0...v1.6.0)

### Features

* **api:** manual updates ([423a2ff](https://github.com/api-dental/api-dental-typescript-sdk/commit/423a2ffdf69ff2707e5b7ea70a805fe8bfb84942))

## 1.5.0 (2026-03-15)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.4.0...v1.5.0)

### Features

* **api:** manual updates ([a86ffb1](https://github.com/api-dental/api-dental-typescript-sdk/commit/a86ffb17567a3bed7a72fab41d20dd24794e7e52))
* **mcp:** add detail field to docs search tool ([24fa692](https://github.com/api-dental/api-dental-typescript-sdk/commit/24fa692febb76159af626f4096d2fc39f8b30958))
* **mcp:** add typescript check to code execution tool ([0218f1d](https://github.com/api-dental/api-dental-typescript-sdk/commit/0218f1d73a684c60c50cd4e67548a5840c39211e))
* **mcp:** enable optional code execution tool on http mcp servers ([61c77bd](https://github.com/api-dental/api-dental-typescript-sdk/commit/61c77bdbf3726ee1f866675372eaae38a71f8331))
* **mcp:** handle code mode calls in the Stainless API ([88bec40](https://github.com/api-dental/api-dental-typescript-sdk/commit/88bec40a97423a8f2c4cd8633dd853a14b34d497))
* **mcp:** return logs on code tool errors ([ec68e91](https://github.com/api-dental/api-dental-typescript-sdk/commit/ec68e912e032a8dca56a529d252791e3b69def2d))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([316bd6c](https://github.com/api-dental/api-dental-typescript-sdk/commit/316bd6ca99126d3c2c972c48975531ff103f8149))
* **mcpb:** pin @anthropic-ai/mcpb version ([aaa0545](https://github.com/api-dental/api-dental-typescript-sdk/commit/aaa05451e82ea701271fdf2d2ea9d67def9653ef))
* **mcp:** correct code tool API endpoint ([695a44c](https://github.com/api-dental/api-dental-typescript-sdk/commit/695a44c264b4c93ca3792f7d7e88ebea8aa38e44))
* **mcp:** return correct lines on typescript errors ([da25b0c](https://github.com/api-dental/api-dental-typescript-sdk/commit/da25b0caa83e2e2838817dde0cf7bddc4963fd76))
* **mcp:** return tool execution error on api error ([9def099](https://github.com/api-dental/api-dental-typescript-sdk/commit/9def099f475e1234828fc6f2c772497b0fa24682))
* **mcp:** return tool execution error on jq failure ([c00fa7d](https://github.com/api-dental/api-dental-typescript-sdk/commit/c00fa7d44d024f8e4c9ae7d3cc372868086c56e4))


### Chores

* **client:** fix logger property type ([554af29](https://github.com/api-dental/api-dental-typescript-sdk/commit/554af297f49404ab00010173a90acb96bfb49d12))
* **internal:** codegen related update ([c3705dd](https://github.com/api-dental/api-dental-typescript-sdk/commit/c3705ddb35b4a2a83ebdbe16132cd248d16c7c10))
* **internal:** codegen related update ([6c308ae](https://github.com/api-dental/api-dental-typescript-sdk/commit/6c308aedf4997af971d02b8bb6ed97df61e3d2d1))
* **internal:** codegen related update ([533ef6e](https://github.com/api-dental/api-dental-typescript-sdk/commit/533ef6e54379aac0b10efe9e088dee6a0533157c))
* **internal:** codegen related update ([a3a35da](https://github.com/api-dental/api-dental-typescript-sdk/commit/a3a35dadadd731fc758a2a4f39af15aac830d0c0))
* **internal:** grammar fix (it's -&gt; its) ([d25058b](https://github.com/api-dental/api-dental-typescript-sdk/commit/d25058bb3880d3efca573319e4ee73cc75b5daa6))
* **internal:** upgrade eslint ([9487701](https://github.com/api-dental/api-dental-typescript-sdk/commit/94877017cc885131ddbbf559d4c20a36ef3de1f0))
* mcp code tool explicit error message when missing a run function ([666c6f5](https://github.com/api-dental/api-dental-typescript-sdk/commit/666c6f578aebf60ec52cefe9de9aed3c68dd4535))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([05cb63c](https://github.com/api-dental/api-dental-typescript-sdk/commit/05cb63c613aa6dc7a5e840807d0ae812333d08d1))
* **mcp:** add line numbers to code tool errors ([799df9a](https://github.com/api-dental/api-dental-typescript-sdk/commit/799df9a077c64ddc4f037fc33ad5145cda64edec))
* **mcp:** clarify http auth error ([b7a81a3](https://github.com/api-dental/api-dental-typescript-sdk/commit/b7a81a37479bb9f2f8b7bdfe5a000b39c3f834e9))
* **mcp:** update lockfile ([3d1ca15](https://github.com/api-dental/api-dental-typescript-sdk/commit/3d1ca158482062365658ac1a45ceaf77bd22febb))
* **mcp:** upgrade jq-web ([91a1002](https://github.com/api-dental/api-dental-typescript-sdk/commit/91a10029dfe74bcc6faf67295f5e8a1d9cb895ec))
* use latest @modelcontextprotocol/sdk ([794ee80](https://github.com/api-dental/api-dental-typescript-sdk/commit/794ee80487aa41f23ce500fdf098a5d6ceca98d7))
* use structured error when code execution tool errors ([d1c32b7](https://github.com/api-dental/api-dental-typescript-sdk/commit/d1c32b70060fd49cb1df1c96bf810399a56fb50c))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([2658967](https://github.com/api-dental/api-dental-typescript-sdk/commit/2658967993a3c41e59e648f1e9d84f55cc6069b1))
* **mcp:** add a README link to add server to VS Code or Claude Code ([ffdd04a](https://github.com/api-dental/api-dental-typescript-sdk/commit/ffdd04a5efe24a0d843514d646623a3bdf567953))

## 1.4.0 (2025-10-09)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.3.0...v1.4.0)

### Features

* **api:** update via SDK Studio ([369d8fc](https://github.com/api-dental/api-dental-typescript-sdk/commit/369d8fcf25fb88074063b84d961a61cef95087fa))
* **mcp:** add docs search tool ([06803f9](https://github.com/api-dental/api-dental-typescript-sdk/commit/06803f9da6de373e97774b51525ea7cf16b7e185))
* **mcp:** add option for including docs tools ([ad122ce](https://github.com/api-dental/api-dental-typescript-sdk/commit/ad122cee597a699b5bc1e1bdbeb2d8e555ebe4de))
* **mcp:** allow setting logging level ([5d6ebfc](https://github.com/api-dental/api-dental-typescript-sdk/commit/5d6ebfc9ca61ddae14d723704123678f9436a1dd))
* **mcp:** enable experimental docs search tool ([10453c8](https://github.com/api-dental/api-dental-typescript-sdk/commit/10453c8c8af1c6c17e76047e7a300cbf6f12435c))
* **mcp:** expose client options in `streamableHTTPApp` ([127f398](https://github.com/api-dental/api-dental-typescript-sdk/commit/127f39835670465b9d40888853b0c7038e94cba1))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([5a2bc11](https://github.com/api-dental/api-dental-typescript-sdk/commit/5a2bc11a80869dd4bdc4a8c3ac6decfe3b3d7dda))
* **mcp:** fix cli argument parsing logic ([d938fa7](https://github.com/api-dental/api-dental-typescript-sdk/commit/d938fa7ed5efc581c241dac648b084e28e43be3a))
* **mcp:** fix query options parsing ([ada5fcc](https://github.com/api-dental/api-dental-typescript-sdk/commit/ada5fccb3e754ab86298b11855b2b0cf55827059))
* **mcp:** fix uploading dxt release assets ([381cff4](https://github.com/api-dental/api-dental-typescript-sdk/commit/381cff4928a1957834f70a7d17f2ebeaf0ea027c))
* **mcp:** resolve a linting issue in server code ([091d00c](https://github.com/api-dental/api-dental-typescript-sdk/commit/091d00cd28b0567552e2ac7b0efee5fa59c3f76c))


### Performance Improvements

* faster formatting ([a8c1de6](https://github.com/api-dental/api-dental-typescript-sdk/commit/a8c1de654e499423e023816f77015ac258de92bd))


### Chores

* add package to package.json ([725e27e](https://github.com/api-dental/api-dental-typescript-sdk/commit/725e27eadb4efb22724cdd51fc5f0679475005fa))
* **client:** qualify global Blob ([15c7600](https://github.com/api-dental/api-dental-typescript-sdk/commit/15c7600c68ae4131db851a361371370090c0f741))
* **codegen:** internal codegen update ([ef0c1ba](https://github.com/api-dental/api-dental-typescript-sdk/commit/ef0c1ba6e703274afd32ee2ffd87ce24dd22a7f9))
* do not install brew dependencies in ./scripts/bootstrap by default ([cb8d6fc](https://github.com/api-dental/api-dental-typescript-sdk/commit/cb8d6fc3e25c098c521ca019dfe8622cffef4acc))
* extract some types in mcp docs ([78116c0](https://github.com/api-dental/api-dental-typescript-sdk/commit/78116c0ed4f0f373b8d83516c1f279911a03df70))
* **internal:** codegen related update ([1fe4685](https://github.com/api-dental/api-dental-typescript-sdk/commit/1fe4685db8b552e512245cf6aa7177f05912b9f3))
* **internal:** codegen related update ([2a7f32b](https://github.com/api-dental/api-dental-typescript-sdk/commit/2a7f32b59d6a7169718103dad12c9b7df4e6ddc4))
* **internal:** codegen related update ([b14bd71](https://github.com/api-dental/api-dental-typescript-sdk/commit/b14bd71c8725d33de58d42d2bba39861c090d190))
* **internal:** codegen related update ([4a60858](https://github.com/api-dental/api-dental-typescript-sdk/commit/4a60858787d3ab0da19272a986c3f2baf9723a0a))
* **internal:** codegen related update ([50fc779](https://github.com/api-dental/api-dental-typescript-sdk/commit/50fc779638f674d9ceb1ae75ae2b6702ae44f9c6))
* **internal:** codegen related update ([6f7c3af](https://github.com/api-dental/api-dental-typescript-sdk/commit/6f7c3af54778f38b8e3bc1fd08e8484fea0965fe))
* **internal:** codegen related update ([2e3628d](https://github.com/api-dental/api-dental-typescript-sdk/commit/2e3628d136053cc3c7a37ba5d1faebd3ea9e8736))
* **internal:** fix incremental formatting in some cases ([1c3d715](https://github.com/api-dental/api-dental-typescript-sdk/commit/1c3d7159ed5ac7683671d52c95a60e2214ebe814))
* **internal:** gitignore .mcpb files ([a6ba07a](https://github.com/api-dental/api-dental-typescript-sdk/commit/a6ba07afd7cc61da71681ed4632a97ccb4dee987))
* **internal:** ignore .eslintcache ([f66bb0b](https://github.com/api-dental/api-dental-typescript-sdk/commit/f66bb0b11cd4f1faba64d46e0ba12b7d971b49e5))
* **internal:** remove .eslintcache ([f4fa340](https://github.com/api-dental/api-dental-typescript-sdk/commit/f4fa3401942b63716cf2f39354313da5fecd2346))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([274e81e](https://github.com/api-dental/api-dental-typescript-sdk/commit/274e81e23add6e8331e92ee93795ebe0b55c26c5))
* **internal:** update global Error reference ([bdaf273](https://github.com/api-dental/api-dental-typescript-sdk/commit/bdaf273ed096a798804a41a8735c9b6036f27e19))
* **internal:** use npm pack for build uploads ([42613fe](https://github.com/api-dental/api-dental-typescript-sdk/commit/42613fe5beb676310d5b5b39046273465ff7d1f5))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([6e171d5](https://github.com/api-dental/api-dental-typescript-sdk/commit/6e171d52fcf97d0dc8533c6f349a6ce5febec806))
* **mcp:** allow pointing `docs_search` tool at other URLs ([599add5](https://github.com/api-dental/api-dental-typescript-sdk/commit/599add57530dc0163e5ed67a5fc2f643d3732416))
* **mcp:** rename dxt to mcpb ([cae4a28](https://github.com/api-dental/api-dental-typescript-sdk/commit/cae4a28eb484159abbd6d98aa9d7a5acf290a15e))
* **mcp:** update package.json ([dcd6396](https://github.com/api-dental/api-dental-typescript-sdk/commit/dcd6396e439fd543be8396988bb8cb00f5dd6692))
* **mcp:** update types ([cd967f5](https://github.com/api-dental/api-dental-typescript-sdk/commit/cd967f5ccc0821401a7314b16dc13921418d0bea))
* **mcp:** upload dxt as release asset ([53e45e9](https://github.com/api-dental/api-dental-typescript-sdk/commit/53e45e9e0a64cc5dd3fefac47ddbf86f79e89d62))
* update CI script ([65ec5fd](https://github.com/api-dental/api-dental-typescript-sdk/commit/65ec5fddf2069af62e7ee51d99bf824f89ea6b48))
* update lockfile ([00d7046](https://github.com/api-dental/api-dental-typescript-sdk/commit/00d7046e6878e2dcedf5c66d50aeb2dad403384a))

## 1.3.0 (2025-08-21)

Full Changelog: [v1.2.1...v1.3.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.2.1...v1.3.0)

### Features

* **api:** update via SDK Studio ([885e676](https://github.com/api-dental/api-dental-typescript-sdk/commit/885e676207078c2cc03302e0bdf7dcf3e65af8b2))
* **api:** update via SDK Studio ([4d10fc7](https://github.com/api-dental/api-dental-typescript-sdk/commit/4d10fc7fff3d58052eb7f356e20a7071a9d4cdf2))
* **api:** update via SDK Studio ([bb37fa3](https://github.com/api-dental/api-dental-typescript-sdk/commit/bb37fa38abbc3d22f7015ad471e194181f21528d))
* **api:** update via SDK Studio ([adfadf7](https://github.com/api-dental/api-dental-typescript-sdk/commit/adfadf795e5190464d66a53d50580c885c7fcb1e))
* **mcp:** add code execution tool ([b8a6402](https://github.com/api-dental/api-dental-typescript-sdk/commit/b8a640280ff856ad887151f3c9f767f6762ae1e4))
* **mcp:** add option to infer mcp client ([906bb95](https://github.com/api-dental/api-dental-typescript-sdk/commit/906bb95135ec0f43b06b8347301d282560780491))
* **mcp:** parse query string as mcp client options in mcp server ([817d60d](https://github.com/api-dental/api-dental-typescript-sdk/commit/817d60d98b53aa7265838398e061a63a3ca43f94))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([7896f61](https://github.com/api-dental/api-dental-typescript-sdk/commit/7896f61452f1982cc30596629c1c4be8b118dd67))
* **internal:** formatting change ([5a64e19](https://github.com/api-dental/api-dental-typescript-sdk/commit/5a64e197f0b2e13d966da4f3f91ba666fa555b2f))
* **internal:** make mcp-server publishing public by defaut ([cde3669](https://github.com/api-dental/api-dental-typescript-sdk/commit/cde3669331263c7f16d32900cc4349f4b950035c))
* **internal:** refactor array check ([91b0cf0](https://github.com/api-dental/api-dental-typescript-sdk/commit/91b0cf083547d2db3f5c782f754a8787dd34b39d))
* **mcp:** add cors to oauth metadata route ([5c1adaf](https://github.com/api-dental/api-dental-typescript-sdk/commit/5c1adaf47275f6f0c5fcc3bb3a2eab0635c88511))
* **mcp:** document remote server in README.md ([492bdc6](https://github.com/api-dental/api-dental-typescript-sdk/commit/492bdc697c51f8eec79f10f9f0f229484fa0b3ad))
* **mcp:** update README ([508f2d4](https://github.com/api-dental/api-dental-typescript-sdk/commit/508f2d4f2a1e98109377670cd1e962d0145b1785))

## 1.2.1 (2025-08-14)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.2.0...v1.2.1)

### Chores

* configure new SDK language ([b8b28d7](https://github.com/api-dental/api-dental-typescript-sdk/commit/b8b28d762a1c44f2f4f08d4ad4e9bfea342e17b7))
* **mcp:** minor cleanup of types and package.json ([9d3b546](https://github.com/api-dental/api-dental-typescript-sdk/commit/9d3b5467e53b030fda472f550abfb20c122795ac))

## 1.2.0 (2025-08-13)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([58250d8](https://github.com/api-dental/api-dental-typescript-sdk/commit/58250d84eeb40dfdebd89f6723ba5bd93ac00df0))

## 1.1.0 (2025-08-13)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v1.0.0...v1.1.0)

### Features

* **api:** update via SDK Studio ([da4ffd5](https://github.com/api-dental/api-dental-typescript-sdk/commit/da4ffd521f962f5cb461be98280586ed5e8f13f0))
* **api:** update via SDK Studio ([2617114](https://github.com/api-dental/api-dental-typescript-sdk/commit/2617114819dcb346bc1eb329a08543bae66fd327))


### Chores

* sync repo ([061510f](https://github.com/api-dental/api-dental-typescript-sdk/commit/061510fbf5ae306117765b86085e76196f18f067))
* sync repo ([4891ce5](https://github.com/api-dental/api-dental-typescript-sdk/commit/4891ce52306707f5203cbcce746b61c3baa35c87))

## 0.3.0 (2025-08-11)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v0.2.0...v0.3.0)

### Features

* **api:** update via SDK Studio ([df49159](https://github.com/api-dental/api-dental-typescript-sdk/commit/df4915924f80feb9ea45acfe4bff8924c49d9be9))
* **api:** update via SDK Studio ([5c48747](https://github.com/api-dental/api-dental-typescript-sdk/commit/5c487478a449a7aac6c9ed61165a49df4eb4b1a7))
* **api:** update via SDK Studio ([8b88fc9](https://github.com/api-dental/api-dental-typescript-sdk/commit/8b88fc946cedcae50215311ead3f80314206c015))
* **api:** update via SDK Studio ([0da955c](https://github.com/api-dental/api-dental-typescript-sdk/commit/0da955cd81767e9c5609254ea8b1a57132db6c98))

## 0.2.0 (2025-08-11)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v0.1.0...v0.2.0)

### Features

* **api:** update via SDK Studio ([002b939](https://github.com/api-dental/api-dental-typescript-sdk/commit/002b939689e3fd6421e5841815555864ac5be5b9))
* **api:** update via SDK Studio ([5440ed1](https://github.com/api-dental/api-dental-typescript-sdk/commit/5440ed183a64cb2e3ecbd9bd862a8fd8a2dc044c))

## 0.1.0 (2025-08-11)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/api-dental/api-dental-typescript-sdk/compare/v0.0.2...v0.1.0)

### Features

* **api:** update via SDK Studio ([6088e3a](https://github.com/api-dental/api-dental-typescript-sdk/commit/6088e3adcb385eda64b2e0615736ed5e92a434bc))


### Chores

* update SDK settings ([af8d6f7](https://github.com/api-dental/api-dental-typescript-sdk/commit/af8d6f74c7bc5f369639c0cb22b53b868e8fbe60))

## 0.0.2 (2025-08-11)

Full Changelog: [v0.0.1-alpha.0...v0.0.2](https://github.com/api-dental/api-dental-typescript-sdk/compare/v0.0.1-alpha.0...v0.0.2)

### Chores

* **internal:** move publish config ([fd21098](https://github.com/api-dental/api-dental-typescript-sdk/commit/fd21098db409fe0c27b410b5555d20ccfa95902d))
* **internal:** remove redundant imports config ([3db2eed](https://github.com/api-dental/api-dental-typescript-sdk/commit/3db2eed04354a124afbb606f5f0254cca489619c))
* **internal:** update comment in script ([789a075](https://github.com/api-dental/api-dental-typescript-sdk/commit/789a07500a371239d83f2d2e457edf5d1302ee7e))
* update @stainless-api/prism-cli to v5.15.0 ([ecafc96](https://github.com/api-dental/api-dental-typescript-sdk/commit/ecafc96393055dc6c1a9a407a9f0141e62ec79e5))
* update SDK settings ([2e2ff6b](https://github.com/api-dental/api-dental-typescript-sdk/commit/2e2ff6bca1841b5f18d7255c710abbb8a0909f5b))
