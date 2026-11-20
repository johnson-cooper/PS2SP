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
  lastSynchronized: '2026-11-20T03:16:41.181Z'
automation:
  sync: true
  github:
    repoEtag: W/"f47757ce05a05cc7a40fb1f8a21a8bf9e3e6734d8c9fb066fc9c5ef51465a145"
    releasesEtag: W/"fdc2ad5b6d18760199a975ffc41b5e5a9db07aa2b8964864f623f151383d3bc0"
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
