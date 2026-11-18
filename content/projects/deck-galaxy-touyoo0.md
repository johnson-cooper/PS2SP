---
name: deck-galaxy
slug: deck-galaxy-touyoo0
summary: >-
  Rogue Galaxy (PS2) as a native Windows game: a static recompilation on
  PS2Recomp, built from your own disc.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: touyoo0/deck-galaxy
  repositoryId: '1461878069'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-18T21:52:27Z'
latestRelease:
  tag: v0.10.0
  name: 0.10.0
  publishedAt: '2026-11-18T20:11:23Z'
  url: 'https://github.com/touyoo0/deck-galaxy/releases/tag/v0.10.0'
activity:
  lastSynchronized: '2026-11-18T21:57:12.176Z'
automation:
  sync: true
  github:
    repoEtag: W/"a9b4b292e2824c3f561dacdf2a086c853a16bcfb3bc1da6f78f5e0de45df08d6"
    releasesEtag: W/"79f2fca35a76f3e368748143496be18ae7869fabaf78164f81f7fa6e5d00e950"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      victor-takai/rogue-galaxy-recomp
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: victor-takai/rogue-galaxy-recomp
  source: victor-takai/rogue-galaxy-recomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
