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
  lastCommit: '2026-11-11T03:28:15Z'
latestRelease:
  tag: v3.1.0
  name: NJEMU 3.1.0
  publishedAt: '2026-11-01T11:55:08Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.1.0'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-11T15:13:21.375Z'
automation:
  sync: true
  github:
    repoEtag: W/"b734cfacadabea421a90cb07c57835faf8ba94f520e3bfa5c8ff1a99a6ed5892"
    releasesEtag: W/"12552c0407579926da78a4a65a85843fd430ddb7386dd26e1b4f6850d1d0e6b4"
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
