---
name: firmware
slug: firmware
summary: firmware is a PlayStation 2 software project discovered by PS2SP.
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
  repository: sd2psXtd/firmware
  repositoryId: '821342940'
  url: 'https://github.com/sd2psXtd/firmware'
repository:
  archived: false
  defaultBranch: main
  stars: 226
  forks: 18
  lastCommit: '2026-09-30T12:12:16Z'
latestRelease:
  tag: 1.4.0
  name: 1.4.0
  publishedAt: '2026-07-08T12:14:40Z'
  url: 'https://github.com/sd2psXtd/firmware/releases/tag/1.4.0'
activity:
  lastChecked: '2026-10-01T03:27:44.437Z'
  lastSynchronized: '2026-10-02T08:38:11.983Z'
automation:
  sync: true
  github:
    repoEtag: W/"7e91f75fe5ba4ce0582cf0ad424c4be36e012178f64b47e951411e167dac934e"
    releasesEtag: W/"a04b7aa78bd0b88898348cc283b90b69990268e892101dc43600aa1921d170ec"
discovery:
  method: 'pending-promotion:incremental:"PlayStation 2" in:name,description,readme'
  confidence: 80
  evidence:
    - PS2-specific topic
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: bbsan2k/sd2psx_firmware
  source: sd2psx/firmware
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
