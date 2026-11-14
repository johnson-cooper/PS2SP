---
name: NJEMU
slug: njemu-fenglin2000
summary: CPS1 CPS2 NEOGEO(CD)Emulators for PS2/PSP/PSVita and Desktop
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
homepage: 'https://fjtrujy.github.io/NJEMU/'
source:
  provider: github
  repository: FENGLIN2000/NJEMU
  repositoryId: '1457861100'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-14T18:00:14Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-14T19:29:01.311Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: phoe-nix/NJEMU'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: fjtrujy/NJEMU
  source: phoe-nix/NJEMU
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
