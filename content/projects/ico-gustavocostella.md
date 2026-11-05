---
name: ico
slug: ico-gustavocostella
summary: Decompilation of ICO (PS2)
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: GustavoCostella/ico
  repositoryId: '1419451441'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-14T16:28:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T03:30:23.272Z'
automation:
  sync: true
  github:
    repoEtag: W/"c0a83e90163bdb3d63c70f7f5d132b91772d384d875b88066f51e5878d24a1a9"
    releasesEtag: '"d0fd33205f72e666ae36b3d0b58a9c1bc940fa028f6d4d3236e413053a4ae128"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico
  source: nathanialf/ico
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
