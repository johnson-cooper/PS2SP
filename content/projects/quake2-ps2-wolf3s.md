---
name: quake2-ps2
slug: quake2-ps2-wolf3s
summary: A homebrew port of idSoftware's Quake 2 for the PlayStation 2 Console.
categories:
  - games
  - ports
tags:
  - quake
  - quake2
  - fps
  - ps2sdk
  - fork
  - auto-discovered
features:
  - memory-card
authors: []
license: GPL-2.0
homepage: 'https://glampert.github.io'
source:
  provider: github
  repository: Wolf3s/quake2-ps2
  repositoryId: '1405578273'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T12:33:52Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T03:31:57.676Z'
automation:
  sync: true
  github:
    repoEtag: W/"af3fe5e1171d3eda93bd4ebf164eff7e466868e93fc027bb36d8cd585907679d"
    releasesEtag: '"d0fd33205f72e666ae36b3d0b58a9c1bc940fa028f6d4d3236e413053a4ae128"'
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: glampert/quake2-ps2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: glampert/quake2-ps2
  source: glampert/quake2-ps2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
