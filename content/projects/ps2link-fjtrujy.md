---
name: ps2link
slug: ps2link-fjtrujy
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
  repository: fjtrujy/ps2link
  repositoryId: '217171684'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-04-25T11:20:55Z'
latestRelease:
  tag: v0.0.3
  name: v0.0.3
  publishedAt: '2020-05-21T10:40:34Z'
  url: 'https://github.com/fjtrujy/ps2link/releases/tag/v0.0.3'
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
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
