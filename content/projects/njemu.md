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
  stars: 11
  forks: 4
  lastCommit: '2026-10-15T11:51:29Z'
latestRelease:
  tag: v3.0.3
  name: NJEMU 3.0.3
  publishedAt: '2026-10-14T21:35:49Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/v3.0.3'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-10-15T15:02:23.473Z'
automation:
  sync: true
  github:
    repoEtag: W/"d4e240a9cc482c28bb38041d9ba01a866ccd2957df0a2c76ab4a47888c44487d"
    releasesEtag: W/"f1ad2a0a191d66c06b1329041c7551d4811d39a55768ae394ba4c8187489a067"
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
