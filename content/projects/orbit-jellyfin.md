---
name: orbit-jellyfin
slug: orbit-jellyfin
summary: Jellyfin player for the PlayStation 2 (ORBIT style)
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: danielnuld/orbit-jellyfin
  repositoryId: '1402574407'
repository:
  archived: false
  defaultBranch: master
  stars: 7
  forks: 0
  lastCommit: '2026-10-04T09:15:10Z'
latestRelease:
  tag: v0.15
  name: ORBIT Jellyfin v0.15
  publishedAt: '2026-10-03T04:04:17Z'
  url: 'https://github.com/danielnuld/orbit-jellyfin/releases/tag/v0.15'
activity:
  lastSynchronized: '2026-11-05T03:30:57.093Z'
automation:
  sync: true
  github:
    repoEtag: W/"052c4e39c31f1062361670f6c08603e6642bb1a5bffa9d8cde162020cbf28083"
    releasesEtag: W/"4181e2511876c159ff2c194527c4ec97ee25164a6ea55d884eb128ac8d07919d"
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
