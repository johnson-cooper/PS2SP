---
name: Lombyte
slug: lombyte-sploters
summary: Preserving Ratchet & Clank (2002) through decompilation
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://lombyte-project.github.io'
source:
  provider: github
  repository: Sploters/Lombyte
  repositoryId: '1418818379'
  url: 'https://github.com/Sploters/Lombyte'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-14T23:38:06Z'
latestRelease:
  tag: toolchain-src
  name: Tool Chain
  publishedAt: '2026-10-14T12:50:05Z'
  url: 'https://github.com/Sploters/Lombyte/releases/tag/toolchain-src'
activity:
  lastChecked: '2026-10-14T14:03:13.565Z'
  lastSynchronized: '2026-10-16T07:10:16.637Z'
automation:
  sync: true
  github:
    repoEtag: W/"1e3a6a00fe9dfcaa1cb909ba19b8c17aa375edbd5a16137a8126d99c8149c344"
    releasesEtag: W/"9659843e4d1c65366eea9265dde27ff1a8b7188c9e44a30872390f5d147142ff"
discovery:
  method: 'pending-promotion:incremental:"PlayStation 2" in:name,description,readme'
  confidence: 85
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: lombyte-project/Lombyte
  source: lombyte-project/Lombyte
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
