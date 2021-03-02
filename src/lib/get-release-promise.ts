import type { ViteSentryPluginOptions } from '../..'

import SentryCli from '@sentry/cli'

/*
  Prepare sentry release and returns promise
*/
export const getReleasePromise = (
  cli: SentryCli,
  options: ViteSentryPluginOptions
) => {
  return (options.release
    ? Promise.resolve(options.release)
    : cli.releases.proposeVersion()
  )
    .then((version: string) => `${version}`.trim())
    .catch(() => undefined)
}
