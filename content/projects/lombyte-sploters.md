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
  lastSynchronized: '2026-11-13T07:58:50.092Z'
automation:
  sync: true
  github:
    repoEtag: W/"6e5c685cfeaa75160a00dc3b9fca0b552f7e589020fab971e7b685a328f527be"
    releasesEtag: W/"4f7390550006f1bb61c166a221c1f11784e86cdf23099167b415c08de3a0aade"
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
