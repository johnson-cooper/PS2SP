---
name: RatchetAndClank-P2P
slug: ratchetandclank-p2p-picfire
summary: Preserving Ratchet & Clank (2002) through decompilation
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://lombyte-project.github.io'
source:
  provider: github
  repository: picfire/RatchetAndClank-P2P
  repositoryId: '1444845700'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-04T15:39:39Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T12:23:28.940Z'
automation:
  sync: true
  github:
    repoEtag: W/"db0f4c56e1d7342ff47cb20e3b61398360c9cdd2cc7206b94aa637c642bb21a9"
    releasesEtag: '"a265e13ba9964cb5149e04ac0bdf1bf82b2b42e69b35395c6e21fd78ae77d913"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: lombyte-project/Lombyte'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: lombyte-project/Lombyte
  source: lombyte-project/Lombyte
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
