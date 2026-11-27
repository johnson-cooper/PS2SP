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
  lastSynchronized: '2026-11-27T08:33:50.944Z'
automation:
  sync: true
  github:
    repoEtag: W/"55f0cda5e5cd7355c83f41042e55f744b878c257d00992d1c2a5ac6e841b6294"
    releasesEtag: W/"3d4ca37d74a4b6b26a95c90ee2b6f0d9c443351a6f1fd293dad413af379b23b7"
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
