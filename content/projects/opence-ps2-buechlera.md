---
name: OpenCE-PS2
slug: opence-ps2-buechlera
summary: >-
  PlayStation 2 port of the Halo: Combat Evolved decompilation (OpenCE): plan,
  map budget and converter tools for a retail 32 MB PS2
categories:
  - host-tools
  - preservation
  - development
  - ports
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: CC0-1.0
homepage: null
source:
  provider: github
  repository: BuechlerA/OpenCE-PS2
  repositoryId: '1411666445'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-10-15T22:09:29Z'
latestRelease:
  tag: build-14
  name: Build 14 (c4442ea)
  publishedAt: '2026-10-14T17:57:58Z'
  url: 'https://github.com/BuechlerA/OpenCE-PS2/releases/tag/build-14'
activity:
  lastSynchronized: '2026-10-17T19:25:07.738Z'
automation:
  sync: true
  github:
    repoEtag: W/"aa59c987ef11608eea58828b446c51af0a508d1e4ffe5f9d7c86d37e0c37a995"
    releasesEtag: W/"51f58349c2df6a689a3a60bea1d18e1f6793f188aebf68b732a4d8abfcf9ae89"
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpenCommunityEdition/OpenCE
  source: punpckhdq/halo
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
