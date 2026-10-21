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
  stars: 12
  forks: 4
  lastCommit: '2026-10-21T03:38:03Z'
latestRelease:
  tag: v3.0.4
  name: NJEMU 3.0.4
  publishedAt: '2026-10-18T13:42:41Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.0.4'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-10-21T15:15:24.717Z'
automation:
  sync: true
  github:
    repoEtag: W/"d5202d2e3a30b85400ad78b63baf414bdb94318f3d6727565d011eac3b78f006"
    releasesEtag: W/"f56a7f7311f0d02e3b7f535c0071b7413f8f7c832856f1aa75cfd7ef4930270f"
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
