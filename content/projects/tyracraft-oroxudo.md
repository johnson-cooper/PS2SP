---
name: tyracraft
slug: tyracraft-oroxudo
summary: Minecraft for PS2 with Tyra Engine
categories:
  - games
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: Apache-2.0
homepage: null
source:
  provider: github
  repository: ORoxudo/tyracraft
  repositoryId: '1459528656'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-17T20:01:04Z'
latestRelease:
  tag: latest-build
  name: Latest build
  publishedAt: '2026-11-16T04:24:58Z'
  url: 'https://github.com/ORoxudo/tyracraft/releases/tag/latest-build'
activity:
  lastSynchronized: '2026-11-17T22:40:05.664Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: Wellinator/tyracraft'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: Wellinator/tyracraft
  source: Wellinator/tyracraft
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
