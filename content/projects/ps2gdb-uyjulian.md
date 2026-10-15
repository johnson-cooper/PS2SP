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
  lastSynchronized: '2026-10-15T04:40:14.696Z'
automation:
  sync: true
  github:
    repoEtag: W/"7b21eccf4437b2e994c9830bcce450dc770b037befdd36f5991435fb8c6b93cf"
    releasesEtag: W/"4c55f20b2ec469b306676eb661b1dedd01a5ce36eff2764430312a611397b0af"
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
