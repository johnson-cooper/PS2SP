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
  lastSynchronized: '2026-11-22T03:15:53.433Z'
automation:
  sync: true
  github:
    repoEtag: W/"250715c5d626e2be60d564a203a6a12df90a0f3ce432c56b386ffd428b280c30"
    releasesEtag: '"0343964b28fb2eda143511ab450b2bffb6215822f235192fb1be4cc3a8b0fb1f"'
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
