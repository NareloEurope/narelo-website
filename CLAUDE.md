@AGENTS.md

# Previewing changes

When asked to preview changes, see what a branch/PR looks like on the live
site, or anything like "what would this look like" — do not try to build or
deploy anything yourself. Instead:

1. Push the branch and make sure a PR is open on `NareloEurope/narelo-website`
   (or find the existing one). Opening/updating a PR is what triggers this.
2. The site auto-deploys via Vercel's GitHub integration: the Vercel team is
   `NareloEurope` (slug `narelo-europe`), project `narelo-website`, linked to
   `NareloEurope/narelo-website`. Every push to a branch with an open PR
   triggers an automatic preview deployment — nothing else needs to happen.
3. Use the Vercel MCP tools to find it: `list_teams` → `list_projects` (team
   `NareloEurope`) → `list_deployments` (that project). Match the deployment
   whose `meta.githubCommitSha` / `meta.githubPrId` corresponds to the current
   branch or PR, then give the user its `url` (state should be `READY`).
4. If `list_teams` shows anything other than `NareloEurope` (e.g. a stale
   personal account), the Vercel connector is authenticated as the wrong
   account. That's a Settings → Connectors reconnect on the user's end, not
   something to route around — don't try pushing to a different GitHub repo,
   and don't try to deploy the working tree directly (`deploy_to_vercel`):
   the project's images and video assets are far too large to embed through
   that path, and an automatic preview already exists once the PR is open.
