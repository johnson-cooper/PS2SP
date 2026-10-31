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
  lastSynchronized: '2026-10-31T05:42:48.648Z'
automation:
  sync: true
  github:
    repoEtag: W/"bc0999591fbc08f355c6bd47a5a913c2712903d321f7972ec397af4e3319dbb5"
    releasesEtag: W/"6551de4da8449b277b8f6f0921c87e2bd9053c023a1d969ab20a4ddcffcba852"
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
