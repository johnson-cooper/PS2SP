---
name: fallout1-ce-ps2
slug: fallout1-ce-ps2
summary: >-
  Native Fallout 1 port for the Sony PlayStation 2 (Emotion Engine / GS).
  Unofficial open-source engine reimplementation based on fallout1-ce.
categories:
  - ports
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: 'https://github.com/Nicolasalucin/fallout1-ce-ps2/releases/tag/ps2-v1.0.0-rc1'
source:
  provider: github
  repository: Nicolasalucin/fallout1-ce-ps2
  repositoryId: '1424022767'
repository:
  archived: false
  defaultBranch: ps2
  stars: 3
  forks: 1
  lastCommit: '2026-10-22T16:32:03Z'
latestRelease:
  tag: v1.0.2-ps2
  name: Fallout PS2 v1.0.2 — hardware boot hardening
  publishedAt: '2026-10-22T15:48:24Z'
  url: 'https://github.com/Nicolasalucin/fallout1-ce-ps2/releases/tag/v1.0.2-ps2'
activity:
  lastSynchronized: '2026-10-28T08:32:44.902Z'
automation:
  sync: true
  github:
    repoEtag: W/"ecad7630bd002821d9d9a8ac063e9b99485966f31fcf9952dde898181a3aef26"
    releasesEtag: W/"b4bf9d3b915d104d6118903e6c9cbfab02d75b60a30fbbdd0c9cc85f95af1704"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
