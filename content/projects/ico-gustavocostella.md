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
  lastSynchronized: '2026-11-20T03:16:07.264Z'
automation:
  sync: true
  github:
    repoEtag: W/"f52a971d2d6cb7adc6b513457fa6204b5c3bb2a085a292a78e3a6a6e63af9c97"
    releasesEtag: '"04ae66d0652f8e32f85ee09b36048410b2b52f52a85660eea8f274a40dd5e3c9"'
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
