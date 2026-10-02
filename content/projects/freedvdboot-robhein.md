---
name: FreeDVDBoot
slug: freedvdboot-robhein
summary: PlayStation 2 DVD Player Exploit
categories:
  - uncategorized
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: robhein/FreeDVDBoot
  repositoryId: '420109824'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-02-10T08:51:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-02T15:50:05.338Z'
automation:
  sync: true
  github:
    repoEtag: W/"593d22774c180ba9e28b1726e130e8a96e08926f8d41f25e810c40fcaaf633e6"
    releasesEtag: '"96dbaa5a1ba612f09046f88e261ca7c71987d08e38ee07d6c4ea67437dfe4656"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
