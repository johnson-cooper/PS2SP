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
  repository: danielnuld/nuld-jellyfin
  repositoryId: '1402574407'
repository:
  archived: false
  defaultBranch: master
  stars: 9
  forks: 0
  lastCommit: '2026-11-06T06:08:19Z'
latestRelease:
  tag: v0.16
  name: NULD Jellyfin v0.16
  publishedAt: '2026-11-06T06:08:19Z'
  url: 'https://github.com/danielnuld/nuld-jellyfin/releases/tag/v0.16'
activity:
  lastSynchronized: '2026-11-19T03:29:12.683Z'
automation:
  sync: true
  github:
    repoEtag: W/"e0a229e47f00868304437e57d7cafa67f0bd0d742fe1118b8b80616343f37c13"
    releasesEtag: W/"af8b9c1015c4250186365e2660a7c25d1ef862bc4e261ee692f994a5bc0c3df6"
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
