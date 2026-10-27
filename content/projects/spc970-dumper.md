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
  lastSynchronized: '2026-10-27T05:06:56.378Z'
automation:
  sync: true
  github:
    repoEtag: W/"da1e1c348c2e1089d31035ab75537661bec3c6e12cc5cc1698bd4f816954a36a"
    releasesEtag: W/"7e9b7c569a4c45756a11d4be3c56f701c7b37f8ce1d462da1dd1739a26688392"
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
