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
  stars: 14
  forks: 4
  lastCommit: '2026-11-03T03:27:20Z'
latestRelease:
  tag: v3.1.0
  name: NJEMU 3.1.0
  publishedAt: '2026-11-01T11:55:08Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.1.0'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-03T15:09:16.903Z'
automation:
  sync: true
  github:
    repoEtag: W/"c98941189bf3eac09545c19f54afa78cce86a1685f27b2b2b2e88c090be07ebf"
    releasesEtag: W/"4442f8675894d5196c40637e5bed0a470cdcc69ce97b7386d42961f9665815d7"
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
