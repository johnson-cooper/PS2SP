---
name: PS2-memcards-editor
slug: ps2-memcards-editor-mininxd
summary: 'Migrate to https://github.com/mininxd/SAVESX2'
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: mininxd/PS2-memcards-editor
  repositoryId: '1362326242'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-09-13T12:23:33Z'
latestRelease:
  tag: v1.6.0
  name: v1.6.0 - Migration to another repo
  publishedAt: '2026-09-13T12:23:34Z'
  url: 'https://github.com/mininxd/PS2-memcards-editor/releases/tag/v1.6.0'
activity:
  lastSynchronized: '2026-11-17T22:26:13.919Z'
automation:
  sync: true
  github:
    repoEtag: W/"a540bca5b2fbef5fe51868df573f621ffdeffb739776c54f834805b7dc84acd0"
    releasesEtag: W/"d48863df8070582a8213e52a59e3feafc58768d5bd4d0d2550574d552d6f4b2a"
discovery:
  method: 'fork-network:ARMSX2/ARMSX2'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
