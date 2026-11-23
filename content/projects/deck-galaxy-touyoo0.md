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
  lastCommit: '2026-11-23T19:57:11Z'
latestRelease:
  tag: v0.12.6
  name: 0.12.6
  publishedAt: '2026-11-23T19:58:00Z'
  url: 'https://github.com/touyoo0/deck-galaxy/releases/tag/v0.12.6'
activity:
  lastSynchronized: '2026-11-23T21:25:26.011Z'
automation:
  sync: true
  github:
    repoEtag: W/"bea258b0cd005b763ace60967fc047210b180918d2c4ba360615a481221715b6"
    releasesEtag: W/"fdca8ec3de265f454cec2fab6c4c6593d4deb86ce33c3353b1f9c4a786b9d447"
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
