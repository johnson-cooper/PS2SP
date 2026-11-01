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
  lastSynchronized: '2026-11-01T19:42:23.914Z'
automation:
  sync: true
  github:
    repoEtag: W/"32a884167179313b0debd505023dc5ae80515e92153d3e1e4b7c28ee9dbef8e7"
    releasesEtag: W/"357ba0ac0487611cc15c63af6e15b2e2acfbe9c9c2e793ccf987d943e6daf72f"
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
