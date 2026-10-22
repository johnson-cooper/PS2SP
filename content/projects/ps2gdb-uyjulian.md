---
name: ps2gdb
slug: ps2gdb-uyjulian
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
  repository: uyjulian/ps2gdb
  repositoryId: '69762603'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-03-31T00:00:04Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2024-03-31T00:00:05Z'
  url: 'https://github.com/uyjulian/ps2gdb/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-22T04:47:29.744Z'
automation:
  sync: true
  github:
    repoEtag: W/"e11ddef3f6b29b70a710ca9530b04f510d210ef2f3741fa251d2100b8ec9d177"
    releasesEtag: W/"3740ebdb182c2711372f8c27c4569f25b106580f8eb5e6402a8a917da7faeb8f"
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
