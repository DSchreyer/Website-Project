# Contributing Workflow

## Branch strategy
- `master`: production branch (GitHub Pages source)
- `dev`: integration branch for ongoing work
- `feature/*` or `chore/*`: short-lived branches created from `dev`

## Required flow
1. Create a branch from `dev` (for example `feature/new-section`)
2. Open PR into `dev`
3. CI must pass (`Dev CI` GitHub Action)
4. Merge into `dev`
5. When ready to release, open PR from `dev` -> `master`

## CI
`Dev CI` runs on:
- pushes to `dev`
- pull requests targeting `dev`

Checks currently include:
- HTML linting
- required static-file presence checks
