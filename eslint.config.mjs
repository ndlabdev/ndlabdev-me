// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/indent': ['error', 4],
        '@stylistic/semi': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: { max: 1 }
            }
        ],
        '@stylistic/lines-around-comment': [
            'error',
            {
                beforeLineComment: true,
                allowBlockStart: true,
                allowBlockEnd: true
            }
        ],
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 1
            }
        ],
        '@stylistic/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ]
    }
})
