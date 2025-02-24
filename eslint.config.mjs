
import eslint from '@eslint/js';
import tseslint, { plugin, parser, configs } from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';


export default tseslint.config(
    {
        plugins: {
            '@typescript-eslint': plugin,
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: {},
            },
        },
        languageOptions: {
            parser: parser,
            parserOptions: {
                projectService: true,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        
    },
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    eslint.configs.recommended,
    configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    prettierConfig,
);
