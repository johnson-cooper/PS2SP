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
  lastSynchronized: '2026-11-01T07:32:55.940Z'
automation:
  sync: true
  github:
    repoEtag: W/"511e2f73645d2a53b91c123938e321e75989298ad5fcd88bf69f75086fc224fb"
    releasesEtag: W/"9c5b9e9d6ac2abc0bf3eb6bbebdbbb2bbf7388ff8969c5d1a409ffc651bd849f"
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
