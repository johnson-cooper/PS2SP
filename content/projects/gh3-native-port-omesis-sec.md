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
  lastSynchronized: '2026-11-03T06:48:24.462Z'
automation:
  sync: true
  github:
    repoEtag: W/"115dfb5e20b1a2c1423d30a5def517bf6d09dc57297eb62cf0d84baaf23e53df"
    releasesEtag: '"692f2c9f61b2b2ea303277a9a51794b8b35824333ba16aff8fab37dc1c73a90d"'
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
