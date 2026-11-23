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
  lastCommit: '2026-11-15T14:42:24Z'
latestRelease:
  tag: development
  name: NJEMU Development · 3.0.0-pre.1208+gafaaea30 (afaaea30)
  publishedAt: '2026-11-14T20:08:18Z'
  url: 'https://github.com/FENGLIN2000/NJEMU/releases/tag/development'
activity:
  lastSynchronized: '2026-11-23T00:54:39.727Z'
automation:
  sync: true
  github:
    repoEtag: W/"362f1b27ad4f031664019eba024056bd2d921c38dba611612422a45aa3c21501"
    releasesEtag: W/"88604fa080cdfb93dda72e170fd70730a8d8fbdd033640d289d36ffa4f47ad41"
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
