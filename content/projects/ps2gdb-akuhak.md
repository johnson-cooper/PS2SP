---
name: ps2gdb
slug: ps2gdb-akuhak
summary: >-
  Remote GDB debugging stub for PlayStation 2, enabling source-level debugging
  over serial or network connections.
categories:
  - development
tags:
  - gdb
  - debugging
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: AKuHAK/ps2gdb
  repositoryId: '773042925'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-03-17T13:30:00Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2024-03-17T13:30:00Z'
  url: 'https://github.com/AKuHAK/ps2gdb/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-05T12:23:01.687Z'
automation:
  sync: true
  github:
    repoEtag: W/"2658b7b6b9473b897a2b8f4f72ebb321f1e07064b6f64bf9e89361423f83cc00"
    releasesEtag: W/"0e679c7f3500ca3a203edd7ba447532f7a44e338b00e1caed66124c525931229"
discovery:
  method: 'fork-network:ps2dev/ps2gdb'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2gdb'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2gdb
  source: ps2dev/ps2gdb
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
