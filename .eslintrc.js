module.exports = {
    extends: ['plugin:vue/vue3-essential', 'prettier'],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        'vue/script-setup-uses-vars': 'off',
        'vetur.format.defaultFormatter.html': 'prettier',
        'vetur.format.defaultFormatter.pug': 'prettier',
        'vetur.format.defaultFormatter.css': 'prettier',
        'vetur.format.defaultFormatter.postcss': 'prettier',
        'vetur.format.defaultFormatter.scss': 'prettier',
        'vetur.format.defaultFormatter.less': 'prettier',
        'vetur.format.defaultFormatter.stylus': 'stylus-supremacy',
        'vetur.format.defaultFormatter.js': 'prettier',
        'vetur.format.defaultFormatter.ts': 'prettier',
        'vetur.format.defaultFormatter.sass': 'sass-formatter',
    },
}
