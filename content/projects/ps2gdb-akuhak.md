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
  lastSynchronized: '2026-10-31T12:31:03.819Z'
automation:
  sync: true
  github:
    repoEtag: W/"6bc4443a92d59c6b6c7f237f4a4c8aa1c327db35053929ca7d4049ceec323d0f"
    releasesEtag: W/"b7aba7044af81a7430fe9f22fc14f4061a623ddb36e37743552ca0317f3470ea"
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
