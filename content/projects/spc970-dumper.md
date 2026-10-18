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
  lastSynchronized: '2026-10-18T05:55:46.557Z'
automation:
  sync: true
  github:
    repoEtag: W/"59eb776efab27ff822bdd2c97d4a1acf4984ff53319c3b50b86ae28bb020b1fe"
    releasesEtag: W/"5427df09b1e40425c6977ca88515188b50c2d3489b6f0d8f8011c217f6649a66"
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
