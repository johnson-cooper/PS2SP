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
  stars: 6
  forks: 4
  lastCommit: '2026-10-08T12:47:55Z'
latestRelease:
  tag: development
  name: NJEMU Development · 2.4.0-pre.1000+g3b653d8d
  publishedAt: '2026-10-08T06:16:27Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/development'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-10-08T15:38:03.329Z'
automation:
  sync: true
  github:
    repoEtag: W/"73e9f8fbef7c0316cf72db8ff45c68536594590d0759c4d937ecf91778ce19f4"
    releasesEtag: W/"ffde8fceb32f75aaada25c252f4a853f90a99f99e3273af0163ea6717bbe29ad"
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
