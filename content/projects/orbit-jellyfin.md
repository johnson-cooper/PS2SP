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
  lastSynchronized: '2026-11-14T03:16:28.718Z'
automation:
  sync: true
  github:
    repoEtag: W/"ab34ce140d04042370dff64ecfdef2efd1daa46ad8def239f95695b2c41a03e3"
    releasesEtag: W/"7c1be95a8a23607f0fff032a823a7b88329215381ab83c386da361b9f8764999"
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
