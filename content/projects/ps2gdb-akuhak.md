---
name: ps2gdb
slug: ps2gdb-akuhak
summary: PS2 GDB stub
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
  lastSynchronized: '2026-10-02T15:58:32.409Z'
automation:
  sync: true
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
