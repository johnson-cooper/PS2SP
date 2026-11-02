---
name: gh3-native-port
slug: gh3-native-port-omesis-sec
summary: >-
  Experimental native Windows port of Guitar Hero III (PS2 SLUS-21672). Bring
  your own original disc; no game files included.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: omesis-sec/gh3-native-port
  repositoryId: '1440342618'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T16:28:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-02T06:03:04.945Z'
automation:
  sync: true
  github:
    repoEtag: W/"ea3eff9ada724a6a8ab5e2a0a9d80f799910fadc6ab4757f9a555b492cc19555"
    releasesEtag: '"a3ecb6892d2d743d8b827fa2a5bb15363548a9af08f592d29835e33f8f4b1528"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ran-j/PS2Recomp'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: ran-j/PS2Recomp
  source: ran-j/PS2Recomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
