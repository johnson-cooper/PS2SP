---
name: ps2link
slug: ps2link-israpps
summary: PS2-side boot loader
categories:
  - development
  - networking
tags:
  - debugging
  - network
  - elf
  - fork
  - auto-discovered
features:
  - network
authors: []
license: null
homepage: null
source:
  provider: github
  repository: israpps/ps2link
  repositoryId: '485576434'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-09-18T17:38:25Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2023-06-26T23:53:18Z'
  url: 'https://github.com/israpps/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-02T15:58:32.409Z'
automation:
  sync: true
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
