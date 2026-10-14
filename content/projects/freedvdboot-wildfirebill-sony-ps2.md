---
name: FreeDVDBoot
slug: freedvdboot-wildfirebill-sony-ps2
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: wildfirebill-sony-ps2/FreeDVDBoot
  repositoryId: '1245204209'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-22T19:06:05Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-14T06:09:22.851Z'
automation:
  sync: true
  github:
    repoEtag: W/"140439ae2fd000ba8191f188247ca47ff243c9f8333af22c9d3d92714823f227"
    releasesEtag: '"e5eba8482d6470e4b0a6ce3d4774fb30b9db64f88c388fda0feb7ffa436844ca"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
