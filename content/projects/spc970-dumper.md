---
name: spc970-dumper
slug: spc970-dumper
summary: >-
  Hardware EEPROM dumper for the Sony SPC970 MechaCon security processor on
  PlayStation 2.
categories:
  - hardware
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: spc970-dumper-union/spc970-dumper
  repositoryId: '1377457859'
repository:
  archived: false
  defaultBranch: main
  stars: 8
  forks: 1
  lastCommit: '2026-09-22T19:07:10Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2026-09-22T19:07:12Z'
  url: 'https://github.com/spc970-dumper-union/spc970-dumper/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-24T05:55:56.774Z'
automation:
  sync: true
  github:
    repoEtag: W/"128c55e3e1c7a66634770472307b167f5cc9f345ad8b467e09849dc9b9204ee3"
    releasesEtag: W/"29c133b6e4adc5d71eadb0264a026383f7b510c2c76a7105cc229a4a1b4443d6"
discovery:
  method: pending-recheck
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
