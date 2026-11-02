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
  stars: 13
  forks: 4
  lastCommit: '2026-11-02T03:29:08Z'
latestRelease:
  tag: v3.1.0
  name: NJEMU 3.1.0
  publishedAt: '2026-11-01T11:55:08Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.1.0'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-11-02T15:53:39.571Z'
automation:
  sync: true
  github:
    repoEtag: W/"274b6f5af98c3b2ded2ddb674f142e55903b39e12f4f3fe7d41330957a1c97ab"
    releasesEtag: W/"630cd74b5cc12f592bb863098b3578e461032ef862d4167bdbbf80d6164ef6c7"
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
