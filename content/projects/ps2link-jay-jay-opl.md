---
name: ps2link
slug: ps2link-jay-jay-opl
summary: PS2-side boot loader
categories:
  - networking
  - development
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
  repository: Jay-Jay-OPL/ps2link
  repositoryId: '40512351'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-07-22T12:09:14Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2021-07-22T12:09:14Z'
  url: 'https://github.com/Jay-Jay-OPL/ps2link/releases/tag/latest'
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
