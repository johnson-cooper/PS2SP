---
name: udpbd-server
slug: udpbd-server-alsisan
summary: udpbd server PS2 static cross-compilation to Linux 32bit ARM7
categories:
  - networking
  - host-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: AlSiSan/udpbd-server
  repositoryId: '937764822'
repository:
  archived: false
  defaultBranch: main
  stars: 3
  forks: 0
  lastCommit: '2025-09-17T12:06:41Z'
latestRelease:
  tag: Linux32bitsARM7_2
  name: Linux 32bit ARM7 port from Felipe A. Hernandez code
  publishedAt: '2025-08-06T00:05:14Z'
  url: 'https://github.com/AlSiSan/udpbd-server/releases/tag/Linux32bitsARM7_2'
activity:
  lastSynchronized: '2026-10-26T19:22:09.219Z'
automation:
  sync: true
  github:
    repoEtag: W/"7f067433c1e8f2332407fc34a2c9695f2be55c76e056e38b93417f5fac834d28"
    releasesEtag: W/"32f1c69147d6e24f56fe3f4609232faf16dfedb89c1eb17c66319d78ff1b04b6"
discovery:
  method: 'fork-network:israpps/udpbd-server'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: israpps/udpbd-server'
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: israpps/udpbd-server
  source: israpps/udpbd-server
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
