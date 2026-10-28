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
  stars: 232
  forks: 18
  lastCommit: '2026-10-09T09:41:13Z'
latestRelease:
  tag: 1.4.0
  name: 1.4.0
  publishedAt: '2026-07-08T12:14:40Z'
  url: 'https://github.com/sd2psXtd/firmware/releases/tag/1.4.0'
activity:
  lastChecked: '2026-10-01T03:27:44.437Z'
  lastSynchronized: '2026-10-28T08:32:46.075Z'
automation:
  sync: true
  github:
    repoEtag: W/"dd7a487f66b47d60ff159a63b07eb80c1ff9cd06deeb8791f0b670eee4e74329"
    releasesEtag: W/"b385c4e5d4e1f8a783dbe0648fb3af438c43a2189bcc60472797b2f5870b7006"
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
