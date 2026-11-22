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
  lastSynchronized: '2026-11-22T03:16:32.977Z'
automation:
  sync: true
  github:
    repoEtag: W/"f738fbadca63871a5613eb356dcf9cc74bd11941917f2fd910f48ea2f533d228"
    releasesEtag: W/"f35999e9b5f5d776eede678cd00e26cdb0f8c1589b4f0f685c51ee4c4f3b3c20"
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
