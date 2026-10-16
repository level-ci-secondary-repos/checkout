# CA-7126 checkout

Minimal secondary micro-frontend used to test Level CI secondary-repository
scans.

Repository: <https://github.com/level-ci-secondary-repos/checkout>

The scan workflow treats `main` as the integration branch. Keep the GitHub
default branch aligned with `main` so pull-request and dispatch behavior uses
the expected workflow definition.

## Role in the scan flow

1. A checkout pull request, push to `main`, or manual run sends a
   `level-ci-scan-request` dispatch to `level-ci-secondary-repos/desktop`.
2. The dispatch includes this repository's branch, commit, pull request, and
   Level CI secondary repository key.
3. Desktop combines its `main` branch with the triggering checkout commit and
   uploads the assembled application as a workflow artifact.
4. Healthcheck scans that artifact while preserving checkout's attribution
   metadata, so the Quality Gate comment is posted on the checkout pull
   request.

Checkout does not run Playwright or upload to Level CI directly.

## Run locally

```sh
npm install
npm run dev
```

The standalone micro-frontend fixture is available at
<http://127.0.0.1:1343>.

## GitHub Actions

Configure these Actions secrets:

- `DESKTOP_DISPATCH_TOKEN`: fine-grained PAT with Contents read/write access
  to `level-ci-secondary-repos/desktop`.
- `LEVEL_CI_SECONDARY_REPOSITORY_KEY`: connection key from Level CI Project
  Settings, not the repository name.

See healthcheck's `TOKEN-SETUP.md` for complete PAT instructions.
