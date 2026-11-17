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
  lastSynchronized: '2026-11-17T03:55:00.730Z'
automation:
  sync: true
  github:
    repoEtag: W/"6abdf84b25b83a82f02b5d391482ff6b38d2c0919029204a26dad03fa58c9687"
    releasesEtag: '"3f89c379fb58370027d6c5f33107efe5538d1fbb8aedbdc644262c86a3929b77"'
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
