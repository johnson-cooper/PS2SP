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
  lastCommit: '2026-10-09T22:09:38Z'
latestRelease:
  tag: development
  name: NJEMU Development · 2.4.0-pre.1116+g1171bec2
  publishedAt: '2026-10-09T22:09:44Z'
  url: 'https://github.com/fjtrujy/NJEMU/releases/tag/development'
activity:
  lastChecked: '2026-10-04T08:48:40.209Z'
  lastSynchronized: '2026-10-11T15:41:57.675Z'
automation:
  sync: true
  github:
    repoEtag: W/"122dc0be980b15205365b9eb232bb8477461016f63ea722a9a4a088a5016c08a"
    releasesEtag: W/"8d62097ac5caa292c26f376cc4288544c27c809baf5af209f834249a8b9cc45e"
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
