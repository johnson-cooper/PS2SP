---
name: firmware
slug: firmware
summary: Firmware implementation for the sd2psx memory card hardware interface.
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
  stars: 246
  forks: 24
  lastCommit: '2026-11-25T07:08:06Z'
latestRelease:
  tag: 1.5.2
  name: 1.5.2
  publishedAt: '2026-11-25T07:12:08Z'
  url: 'https://github.com/sd2psXtd/firmware/releases/tag/1.5.2'
activity:
  lastChecked: '2026-10-01T03:27:44.437Z'
  lastSynchronized: '2026-11-27T08:33:53.281Z'
automation:
  sync: true
  github:
    repoEtag: W/"ad1f8c57b43ae652f6b43d5cbf26d8125587a9fc9ba23b5625f8ccfe6c6fc949"
    releasesEtag: W/"09a7bc5baa1a197639a439067ce06574b18101c9c3f41613b17bf99908657bef"
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
