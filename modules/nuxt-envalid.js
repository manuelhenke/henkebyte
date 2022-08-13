import { cleanEnv } from 'envalid';

/**
 * @typedef {Object} ModuleOptions
 * @property {import('envalid').ReporterOptions} reporter
 * @property {Record<string, import('envalid').ValidatorSpec} validators
 */

/**
 * @param {ModuleOptions} moduleOptions
 */
export default function NuxtEnvalid(moduleOptions) {
  /** @type {ModuleOptions} */
  const options = {
    reporter: undefined,
    validators: {},
    ...this.options.envalid,
    ...moduleOptions,
  };

  const cleanEnvOptions = {};

  if (options.reporter) {
    cleanEnvOptions.reporter = options.reporter;
  }

  const env = {
    ...process.env,
    ...this.options.env,
  };

  const cleanEnvConfig = cleanEnv(env, options.validators, cleanEnvOptions);

  Object.keys(options.validators).forEach((key) => {
    this.options.env[key] = cleanEnvConfig[key];
    process.env[key] = cleanEnvConfig[key];
  });
}
