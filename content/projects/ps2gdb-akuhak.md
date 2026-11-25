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
  lastSynchronized: '2026-11-25T12:57:59.722Z'
automation:
  sync: true
  github:
    repoEtag: W/"917977d25146fcd32aeba82a891c2e30d3e576de589054454c0e16b1db996ce8"
    releasesEtag: W/"891f3cd076efb638c593381e4b676209e4d86621601d7a00a5aa29e94200757f"
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
