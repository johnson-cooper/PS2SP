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
  lastSynchronized: '2026-10-21T04:48:26.046Z'
automation:
  sync: true
  github:
    repoEtag: W/"9812ff5a68fe36ce25f2af017167470e1b5f13267ae3a78c18fe76c1a1afb1da"
    releasesEtag: W/"ace00cdbefc726d86ab01739a9a6b1be7f79e0baaf40d21b88cacf2ce29ee5de"
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
