---
name: OPL-JUMP
slug: opl-jump
summary: >-
  Community modification for Open PS2 Loader featuring the JUMP page and Smart
  APPS Filter.
categories:
  - loaders
tags:
  - auto-discovered
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: juankyt505/OPL-JUMP
  repositoryId: '1429338025'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-01T05:36:23Z'
latestRelease:
  tag: v1.0.2
  name: OPL JUMP v1.0.2
  publishedAt: '2026-11-01T05:36:24Z'
  url: 'https://github.com/juankyt505/OPL-JUMP/releases/tag/v1.0.2'
activity:
  lastSynchronized: '2026-11-12T03:00:21.241Z'
automation:
  sync: true
  github:
    repoEtag: W/"c22894aa0a7cafafe2515a35220a10000c55411b7e0a80529bd76ca3a22ce6e7"
    releasesEtag: W/"564f1e245cdf36ca5dfe84835eac7b0b0c0e40faf6895df8cc9d0f277da4b25e"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
