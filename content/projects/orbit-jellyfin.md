---
name: orbit-jellyfin
slug: orbit-jellyfin
summary: Jellyfin player for the PlayStation 2 (ORBIT style)
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: danielnuld/nuld-jellyfin
  repositoryId: '1402574407'
repository:
  archived: false
  defaultBranch: master
  stars: 8
  forks: 0
  lastCommit: '2026-11-06T06:08:19Z'
latestRelease:
  tag: v0.16
  name: NULD Jellyfin v0.16
  publishedAt: '2026-11-06T06:08:19Z'
  url: 'https://github.com/danielnuld/nuld-jellyfin/releases/tag/v0.16'
activity:
  lastSynchronized: '2026-11-17T03:55:45.116Z'
automation:
  sync: true
  github:
    repoEtag: W/"b2bd5993d7fafbc7c0852d3996d3b223e982930ce08749deb12e709705038b2c"
    releasesEtag: W/"b99645a999dba323d77cd70ed4067d8d9930c12c7bfa1a7f78bc779f724b9543"
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
