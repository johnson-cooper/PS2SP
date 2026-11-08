---
name: NJEMU
slug: njemu
summary: CPS1 CPS2 NEOGEO(CD)Emulators for PSP
categories:
  - utilities
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'http://pan.baidu.com/s/1eQ9VQGM'
source:
  provider: github
  repository: fjtrujy/NJEMU
  repositoryId: '603458804'
  url: 'https://github.com/fjtrujy/NJEMU'
repository:
  archived: false
  defaultBranch: master
  stars: 15
  forks: 5
  lastCommit: '2026-11-08T03:27:55Z'
latestRelease:
  tag: v3.1.0
  name: NJEMU 3.1.0
  publishedAt: '2026-11-01T11:55:08Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.1.0'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-08T15:13:50.206Z'
automation:
  sync: true
  github:
    repoEtag: W/"8d103bf1b3c58dfce72964cdc1d824bc696e14fcea32e6e28df2034d8bb8275e"
    releasesEtag: W/"e961ec8751f866ed9231ea0caed1a64c0b0d53796ce71c855da4734d76160dab"
discovery:
  method: 'pending-promotion:incremental:ps2sdk in:name,description,readme'
  confidence: 75
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: phoe-nix/NJEMU
  source: phoe-nix/NJEMU
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
