// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // Sistema
    SYSTEM_PREFIX: 'medup', // Prefixo para indentificar o sistema, usado nos cookies,
    // SMN Auth
    AUTH_API: 'http://localhost:9500', // API do auth
    // AUTH_BY_EMAIL: true // O sistema faz o login atráves do e-mail
};
