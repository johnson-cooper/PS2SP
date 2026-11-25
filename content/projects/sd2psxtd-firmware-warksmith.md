---
name: sd2psXtd_firmware
slug: sd2psxtd-firmware-warksmith
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - hardware
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://sd2psxtd.github.io'
source:
  provider: github
  repository: Warksmith/sd2psXtd_firmware
  repositoryId: '1440747873'
repository:
  archived: false
  defaultBranch: integration
  stars: 0
  forks: 0
  lastCommit: '2026-11-15T22:22:08Z'
latestRelease:
  tag: 1.5.0-based
  name: 1.5.0 Integration
  publishedAt: '2026-11-15T22:22:08Z'
  url: 'https://github.com/Warksmith/sd2psXtd_firmware/releases/tag/1.5.0-based'
activity:
  lastSynchronized: '2026-11-25T02:31:26.764Z'
automation:
  sync: true
  github:
    repoEtag: W/"19d4e6799c8a8e87e0c21ca17e0346819c280d81cd17951d52c6ea46e1729ab2"
    releasesEtag: W/"a269f1d51ce4c3daf0b52d2963501cfffa437f407c827a32e020d8016b3f83c5"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sd2psx/firmware'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: sd2psXtd/firmware
  source: sd2psx/firmware
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
